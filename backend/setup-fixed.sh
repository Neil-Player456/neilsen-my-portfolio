#!/bin/bash

echo "=========================================="
echo "Flask Backend Setup"
echo "=========================================="
echo ""


cd "$(dirname "$0")" || exit


echo "Step 1: Creating virtual environment..."
python -m venv venv
if [ $? -ne 0 ]; then
    echo "❌ Failed to create virtual environment"
    exit 1
fi
echo "✅ Virtual environment created"
echo ""

echo "Step 2: Activating virtual environment..."
source venv/Scripts/activate
if [ $? -ne 0 ]; then
    echo "❌ Failed to activate virtual environment"
    exit 1
fi
echo "✅ Virtual environment activated"
echo ""


echo "Step 3: Upgrading pip..."
python.exe -m pip install --upgrade pip --quiet
if [ $? -ne 0 ]; then
    echo "⚠️  Warning: pip upgrade had issues, continuing anyway..."
fi
echo "✅ pip upgraded"
echo ""


echo "Step 4: Installing Flask dependencies..."
pip install -r requirements.txt
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo "✅ Dependencies installed"
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
echo "  1. cd backend"
echo "  2. source venv/Scripts/activate"
echo "  3. python app.py"
echo ""
echo "The server will be available at: http://localhost:5000"
echo ""
