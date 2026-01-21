# Flask Backend API

This is the Flask backend for the portfolio contact form.

## Prerequisites

**Python must be installed first!**

- Download from: https://www.python.org/downloads/
- **IMPORTANT**: Check "Add Python to PATH" during installation
- Restart your terminal after installation

## Quick Setup (Recommended)

### For Git Bash / Linux / macOS:
```bash
cd backend
chmod +x setup-gitbash.sh
./setup-gitbash.sh
```

### For Windows PowerShell / Command Prompt:
```bash
cd backend
setup.bat
```

## Manual Setup

1. **Create a virtual environment** (recommended):
   ```bash
   python -m venv venv
   ```

2. **Activate the virtual environment**:
   - On Windows Git Bash:
     ```bash
     source venv/Scripts/activate
     ```
   - On Windows PowerShell/CMD:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:
   ```bash
   cp env.example .env
   ```
   Then edit `.env` with your configuration (optional for now).

5. **Run the Flask server**:
   ```bash
   python app.py
   ```

The API will be available at `http://localhost:5000`

## API Endpoints

### POST `/api/contact`
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to get in touch!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon."
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "healthy"
}
```

## Next Steps

- Add email sending functionality (using SMTP or a service like SendGrid)
- Add database storage for contact submissions
- Add rate limiting to prevent spam
- Add input sanitization and validation
