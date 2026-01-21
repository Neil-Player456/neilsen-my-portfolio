@echo off
echo Setting up Flask backend...
echo.

REM 
python --version >nul 2>&1
if errorlevel 1 (
    echo Python is not installed or not in PATH.
    echo Please install Python from https://www.python.org/downloads/
    pause
    exit /b 1
)

echo Python found!
python --version
echo.

REM 
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
    echo Virtual environment created!
) else (
    echo Virtual environment already exists.
)
echo.

REM 
echo Activating virtual environment and installing dependencies...
call venv\Scripts\activate.bat
pip install --upgrade pip
pip install -r requirements.txt
echo.

echo Setup complete!
echo.
echo To run the Flask server:
echo   1. Activate the virtual environment: venv\Scripts\activate
echo   2. Run: python app.py
echo.
pause
