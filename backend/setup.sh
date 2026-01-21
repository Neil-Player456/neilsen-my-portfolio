

echo "Setting up Flask backend..."
echo


if ! command -v python3 &> /dev/null; then
    echo "Python 3 is not installed. Please install Python 3 from https://www.python.org/downloads/"
    exit 1
fi

echo "Python found!"
python3 --version
echo


if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
    echo "Virtual environment created!"
else
    echo "Virtual environment already exists."
fi
echo


echo "Activating virtual environment and installing dependencies..."
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
echo

echo "Setup complete!"
echo
echo "To run the Flask server:"
echo "  1. Activate the virtual environment: source venv/bin/activate"
echo "  2. Run: python app.py"
echo
