#!/usr/bin/env python3
"""
Setup script for Flask backend
Creates virtual environment and installs dependencies
"""
import subprocess
import sys
import os
from pathlib import Path

def run_command(cmd, description):
    """Run a command and handle errors"""
    print(f"\n{description}...")
    try:
        result = subprocess.run(cmd, shell=True, check=True, capture_output=True, text=True)
        if result.stdout:
            print(result.stdout)
        print(f"✅ {description} completed")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error: {e}")
        if e.stderr:
            print(e.stderr)
        return False

def main():
    print("=" * 50)
    print("Flask Backend Setup")
    print("=" * 50)
    
    # Get the directory where this script is located
    script_dir = Path(__file__).parent.absolute()
    os.chdir(script_dir)
    
    venv_path = script_dir / "venv"
    
    # Check if venv already exists
    if venv_path.exists():
        print(f"\n⚠️  Virtual environment already exists at {venv_path}")
        response = input("Do you want to recreate it? (y/n): ").strip().lower()
        if response == 'y':
            import shutil
            shutil.rmtree(venv_path)
            print("Removed existing virtual environment")
        else:
            print("Using existing virtual environment")
    
    
    if not venv_path.exists():
        if not run_command(f'python -m venv "{venv_path}"', "Creating virtual environment"):
            sys.exit(1)
    
    
    if sys.platform == "win32":
        pip_path = venv_path / "Scripts" / "pip.exe"
        python_path = venv_path / "Scripts" / "python.exe"
    else:
        pip_path = venv_path / "bin" / "pip"
        python_path = venv_path / "bin" / "python"
    
    
    if not run_command(f'"{python_path}" -m pip install --upgrade pip', "Upgrading pip"):
        sys.exit(1)
    
    
    requirements_file = script_dir / "requirements.txt"
    if not requirements_file.exists():
        print(f"❌ requirements.txt not found at {requirements_file}")
        sys.exit(1)
    
    if not run_command(f'"{pip_path}" install -r "{requirements_file}"', "Installing dependencies"):
        sys.exit(1)
    
   
    env_file = script_dir / ".env"
    env_example = script_dir / "env.example"
    if not env_file.exists() and env_example.exists():
        import shutil
        shutil.copy(env_example, env_file)
        print(f"\n✅ Created .env file from env.example")
    
    print("\n" + "=" * 50)
    print("✅ Setup complete!")
    print("=" * 50)
    print("\nTo run the Flask server:")
    if sys.platform == "win32":
        print(f'  1. Activate: {venv_path}\\Scripts\\activate')
    else:
        print(f'  1. Activate: source {venv_path}/bin/activate')
    print("  2. Run: python app.py")
    print("\nThe server will be available at: http://localhost:5000")

if __name__ == "__main__":
    main()
