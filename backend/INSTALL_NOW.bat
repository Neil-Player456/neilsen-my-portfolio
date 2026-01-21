@echo off
echo Installing Flask dependencies...
cd /d "%~dp0"
call venv\Scripts\activate.bat
python -m pip install Flask flask-cors python-dotenv
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Installation successful!
    echo.
    echo To run the server:
    echo   venv\Scripts\activate
    echo   python app.py
) else (
    echo.
    echo ❌ Installation failed. Check error messages above.
)
pause
