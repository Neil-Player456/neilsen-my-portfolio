# Troubleshooting Guide

## Issue: "No space left on device"



### Option 1: Free Up Disk Space

1. **Clean temporary files:**
   ```bash
   # In PowerShell (Run as Administrator)
   Cleanmgr /d C:
   ```

2. **Delete Python cache files:**
   ```bash
   # In Git Bash
   find . -type d -name __pycache__ -exec rm -r {} +
   find . -type d -name "*.pyc" -delete
   ```

3. **Clean pip cache:**
   ```bash
   pip cache purge
   ```

4. **Delete old virtual environments** (if you have any):
   ```bash
   # Check for other venv folders and delete if not needed
   ```

### Option 2: Install to a Different Location

If you can't free up space, you can install packages to a different location:

```bash
cd backend
source venv/Scripts/activate


pip install --target D:/python-packages Flask flask-cors python-dotenv


pip install --user Flask flask-cors python-dotenv
```

### Option 3: Minimal Installation

Try installing packages one at a time:

```bash
cd backend
source venv/Scripts/activate

pip install Flask
pip install flask-cors
pip install python-dotenv
```

### Option 4: Check Disk Space

**In PowerShell:**
```powershell
Get-PSDrive C
```

**In Git Bash:**
```bash
df -h
```

## After Freeing Space

Once you have space, try installing again:

```bash
cd backend
source venv/Scripts/activate
pip install -r requirements.txt
python app.py
```

## Verify Installation

After successful installation, verify:

```bash
python -c "import flask; print(flask.__version__)"
```

You should see: `3.0.0`
