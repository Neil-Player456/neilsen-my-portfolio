from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['DEBUG'] = os.getenv('DEBUG', 'False').lower() == 'true'

SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT"))
SMTP_USERNAME = os.getenv("SMTP_USERNAME")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
FROM_EMAIL = os.getenv("FROM_EMAIL")
TO_EMAIL = os.getenv("TO_EMAIL")


@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()

        for field in ['name', 'email', 'message']:
            if field not in data or not data[field].strip():
                return jsonify({
                    'success': False,
                    'error': f'{field} is required'
                }), 400

        name = data['name'].strip()
        email = data['email'].strip()
        message = data['message'].strip()

        if '@' not in email or '.' not in email:
            return jsonify({
                'success': False,
                'error': 'Invalid email format'
            }), 400

        msg = EmailMessage()
        msg['Subject'] = f'New Portfolio Contact: {name}'
        msg['From'] = FROM_EMAIL
        msg['To'] = TO_EMAIL
        msg.set_content(f"""
You received a new message from your portfolio contact form.

Name: {name}
Email: {email}

Message:
{message}
        """)

       
        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as smtp:
            smtp.login(SMTP_USERNAME, SMTP_PASSWORD)
            smtp.send_message(msg)

        return jsonify({
            'success': True,
            'message': 'Thank you for your message! I will get back to you soon.'
        }), 200

    except Exception as e:
        print("Email error:", e)
        return jsonify({
            'success': False,
            'error': 'Failed to send message'
        }), 500


@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"}), 200


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=int(os.getenv('PORT', 5000)),
        debug=app.config['DEBUG']
    )