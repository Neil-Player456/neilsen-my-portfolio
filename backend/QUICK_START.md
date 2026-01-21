# Quick Start Guide

Python 3.13.9 is now installed! Follow these steps in your **Git Bash** terminal:

## Step 1: Navigate to backend folder
```bash
cd backend
```

## Step 2: Create virtual environment
```bash
python -m venv venv
```

## Step 3: Activate virtual environment
```bash
source venv/Scripts/activate
```

## Step 4: Upgrade pip
```bash
pip install --upgrade pip
```

## Step 5: Install Flask dependencies
```bash
pip install -r requirements.txt
```

## Step 6: Create .env file (optional)
```bash
cp env.example .env
```

## Step 7: Run the Flask server
```bash
python app.py
```

The server will start at: **http://localhost:5000**

---

## Or use the automated setup script:

```bash
cd backend
python setup.py
```

This will do all the above steps automatically!

---

## Verify Installation

After setup, you can verify everything works:

```bash
# Check Python version
python --version


python -c "import flask; print(flask.__version__)"

# Test the server
python app.py
```

Then visit: http://localhost:5000/api/health

You should see: `{"status":"healthy"}`
