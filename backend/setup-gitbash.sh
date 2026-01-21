

echo "=========================================="
echo "Flask Backend Setup Script"
echo "=========================================="
echo ""

if ! command -v python &> /dev/null && ! command -v python3 &> /dev/null && ! command -v py &> /dev/null; then
    echo "❌ Python is not installed!"
    echo ""
    echo "Please install Python first:"
    echo "1. Download from: https://www.python.org/downloads/"
    echo "2. During installation, CHECK 'Add Python to PATH'"
    echo "3. Restart your terminal after installation"
    echo ""
    echo "Or install via Microsoft Store:"
    echo "   Search for 'Python 3.11' or 'Python 3.12'"
    echo ""
    exit 1
fi


if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD="python"
elif command -v py &> /dev/null; then
    PYTHON_CMD="py"
fi

echo "✅ Python found: $($PYTHON_CMD --version)"
echo ""


if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    $PYTHON_CMD -m venv venv
    if [ $? -ne 0 ]; then
        echo "❌ Failed to create virtual environment"
        exit 1
    fi
    echo "✅ Virtual environment created!"
else
    echo "✅ Virtual environment already exists"
fi
echo ""


echo "Activating virtual environment..."
if [ -f "venv/Scripts/activate" ]; then
    source venv/Scripts/activate
elif [ -f "venv/bin/activate" ]; then
    source venv/bin/activate
else
    echo "❌ Could not find activation script"
    exit 1
fi


echo "Upgrading pip..."
pip install --upgrade pip --quiet
echo "✅ pip upgraded"
echo ""


echo "Installing Flask dependencies..."
pip install -r requirements.txt
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo "✅ Dependencies installed!"
echo ""


if [ ! -f ".env" ]; then
    if [ -f "env.example" ]; then
        cp env.example .env
        echo "✅ Created .env file from env.example"
    fi
fi
echo ""

echo "=========================================="
echo "✅ Setup complete!"
echo "=========================================="
echo ""
echo "To run the Flask server:"
echo "  1. Activate: source venv/Scripts/activate"
echo "  2. Run: python app.py"
echo ""
echo "The server will be available at: http://localhost:5000"
echo ""
