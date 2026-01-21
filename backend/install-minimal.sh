

echo "Minimal Installation Script"
echo "Installing packages one at a time..."
echo ""

cd "$(dirname "$0")" || exit


source venv/Scripts/activate


echo "Installing Flask..."
pip install Flask || { echo "Failed to install Flask"; exit 1; }

echo "Installing flask-cors..."
pip install flask-cors || { echo "Failed to install flask-cors"; exit 1; }

echo "Installing python-dotenv..."
pip install python-dotenv || { echo "Failed to install python-dotenv"; exit 1; }

echo ""
echo "✅ All packages installed successfully!"
echo ""
echo "To run the server:"
echo "  source venv/Scripts/activate"
echo "  python app.py"
