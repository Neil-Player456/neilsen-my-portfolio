# How to Run Backend and Frontend

## Overview

You need to run **both** the backend (Flask) and frontend (React/Vite) servers. They run on different ports:
- **Backend**: `http://localhost:5000`
- **Frontend**: `http://localhost:5173` (or similar, Vite will show the port)

## Order: Run Backend First (Recommended)

It's best to start the backend first, then the frontend, so the frontend can connect immediately.

---

## Step 1: Start the Backend (Flask)

**Open Terminal 1 (Git Bash):**

```bash
cd backend
source venv/Scripts/activate
python app.py
```

You should see:
```
 * Running on http://0.0.0.0:5000
 * Debug mode: on
```

**Keep this terminal open!** The backend needs to keep running.

---

## Step 2: Start the Frontend (React/Vite)

**Open Terminal 2 (New Git Bash window):**

```bash
npm run dev
```

You should see:
```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## Running Both Servers

### Option 1: Two Separate Terminals (Recommended)
- **Terminal 1**: Backend (Flask) - keep running
- **Terminal 2**: Frontend (npm run dev) - keep running

### Option 2: Background Process (Advanced)
You can run one in the background, but two terminals is easier for development.

---

## Testing the Connection

1. **Test Backend**: Visit `http://localhost:5000/api/health`
   - Should see: `{"status":"healthy"}`

2. **Test Frontend**: Visit `http://localhost:5173` (or the port Vite shows)
   - Your React app should load

3. **Test Contact Form**: 
   - Fill out the contact form
   - Submit it
   - Check Terminal 1 (backend) for the form submission log
   - You should see the form data printed

---

## Quick Start Commands

### Backend (Terminal 1):
```bash
cd backend
source venv/Scripts/activate
python app.py
```

### Frontend (Terminal 2):
```bash
npm run dev
```

---

## Stopping the Servers

- **Backend**: Press `Ctrl + C` in Terminal 1
- **Frontend**: Press `Ctrl + C` in Terminal 2

---

## Troubleshooting

### "Failed to connect to server"
- Make sure backend is running on port 5000
- Check Terminal 1 for any errors
- Verify Flask dependencies are installed

### Port Already in Use
- Backend: Change `PORT` in `.env` file
- Frontend: Vite will automatically use next available port

### CORS Errors
- Backend has CORS enabled, but if you see errors, check `backend/app.py` has `CORS(app)`
