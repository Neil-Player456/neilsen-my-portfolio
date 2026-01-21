

echo "Installing Flask Backend Dependencies..."
echo ""


cd "$(dirname "$0")" || exit


if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python -m venv venv
fi

echo "Activating virtual environment..."
source venv/Scripts/activate

# Upgrade pip first
echo "Upgrading pip..."
python.exe -m pip install --upgrade pip --quiet


echo "Installing Flask..."
pip install Flask || { echo "❌ Failed to install Flask"; exit 1; }

echo "Installing flask-cors..."
pip install flask-cors || { echo "❌ Failed to install flask-cors"; exit 1; }

echo "Installing python-dotenv..."
pip install python-dotenv || { echo "❌ Failed to install python-dotenv"; exit 1; }

echo ""
echo "✅ All dependencies installed successfully!"
echo ""
echo "To verify installation, run:"
echo "  python -c \"import flask; print('Flask version:', flask.__version__)\""
echo ""
echo "To run the server:"
echo "  source venv/Scripts/activate"
echo "  python app.py"
