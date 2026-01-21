# Python Installation & Flask Setup Guide

## Step 1: Install Python

Python is not currently installed on your system. Follow these steps:

### Option A: Download from Python.org (Recommended)
1. Go to https://www.python.org/downloads/
2. Download Python 3.11 or 3.12 (latest stable version)
3. **IMPORTANT**: During installation, check the box that says **"Add Python to PATH"**
4. Click "Install Now"

### Option B: Install via Microsoft Store
1. Open Microsoft Store
2. Search for "Python 3.11" or "Python 3.12"
3. Click "Install"

### Option C: Install via Winget (if available)
```bash
winget install Python.Python.3.12
```

## Step 2: Verify Python Installation

After installing Python, close and reopen your terminal (Git Bash), then run:

```bash
python --version
```

or

```bash
python3 --version
```

You should see something like: `Python 3.12.x`

## Step 3: Set Up Flask Backend

Once Python is installed, navigate to the backend folder and run:

```bash
cd backend
python -m venv venv
```

Then activate the virtual environment:

**In Git Bash:**
```bash
source venv/Scripts/activate
```

**In PowerShell:**
```bash
venv\Scripts\activate
```

**In Command Prompt:**
```bash
venv\Scripts\activate.bat
```

## Step 4: Install Dependencies

With the virtual environment activated, run:

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

## Step 5: Create Environment File

Copy the example environment file:

```bash
cp env.example .env
```

Edit `.env` if needed (optional for now).

## Step 6: Run the Flask Server

```bash
python app.py
```

The server will start on `http://localhost:5000`

## Troubleshooting

### Python not found after installation
- Make sure you checked "Add Python to PATH" during installation
- Restart your terminal/IDE after installing Python
- Try `python3` instead of `python`
- Try `py` (Windows Python Launcher)

### Virtual environment activation fails
- Make sure you're in the `backend` directory
- Try using the full path: `source ./venv/Scripts/activate`
- On Windows Git Bash, you might need: `source venv/Scripts/activate.sh`

### Port 5000 already in use
- Change the PORT in `.env` file to a different port (e.g., 5001)
- Or stop the process using port 5000
