# 🚀 Quick Setup Guide

This guide will help you set up and run the Wellness Dietician Platform on your local machine in under 10 minutes.

## ⚡ Quick Start (Copy & Paste)

### Prerequisites Check

```bash
# Check if Node.js is installed (should be v16 or higher)
node --version

# Check if npm is installed
npm --version

# Check if Git is installed
git --version
```

If any command fails, install the missing software:
- **Node.js**: https://nodejs.org/ (download LTS version)
- **Git**: https://git-scm.com/

---

## 📥 Step 1: Clone & Install

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/wellness-dietician-platform.git
cd wellness-dietician-platform

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Go back to root
cd ..
```

---

## 🗄️ Step 2: Setup MongoDB

### Option A: MongoDB Atlas (Recommended - Free Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free" and create an account
3. Create a FREE cluster:
   - Choose AWS
   - Select any region close to you
   - Click "Create Cluster"
4. Create Database User:
   - Security → Database Access → Add New User
   - Username: `admin`
   - Password: (create a strong password and SAVE it)
   - User Privileges: "Read and write to any database"
   - Click "Add User"
5. Whitelist Your IP:
   - Security → Network Access → Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"
6. Get Connection String:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/`

### Option B: Local MongoDB (Alternative)

```bash
# Install MongoDB locally
# macOS:
brew install mongodb-community

# Ubuntu/Debian:
sudo apt-get install mongodb

# Windows: Download from https://www.mongodb.com/download-center/community

# Start MongoDB
mongod
```

Connection string for local: `mongodb://localhost:27017/wellness`

---

## 🔐 Step 3: Configure Environment Variables

### Backend Configuration

Create `backend/.env` file:

```bash
cd backend
touch .env
```

Add this content (replace with your values):

```env
MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/wellness?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_to_something_random
PORT=5000
```

**Important:**
- Replace `YOUR_PASSWORD` with your actual MongoDB password
- Replace `cluster0.xxxxx` with your actual cluster URL
- Change `JWT_SECRET` to a random string (e.g., `mySecretKey123!`)

### Frontend Configuration

Create `frontend/.env` file:

```bash
cd ../frontend
touch .env
```

Add this content:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## ▶️ Step 4: Run the Application

### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

You should see:
```
🚀 Server running on port 5000
✅ MongoDB connected successfully
```

### Terminal 2 - Frontend (Open new terminal)

```bash
cd frontend
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## 🌐 Step 5: Open in Browser

1. Open your browser
2. Go to: `http://localhost:5173`
3. You should see the colorful home page! 🎉

---

## ✅ Step 6: Test the Application

### Create an Account
1. Click "Sign Up"
2. Enter:
   - Name: Test User
   - Email: test@example.com
   - Password: test123
   - Confirm Password: test123
3. Click "Sign Up"
4. You should be redirected to Dashboard

### Add a Goal
1. In the Dashboard, type a goal: "Drink 8 glasses of water daily"
2. Click "Add Goal"
3. Check the checkbox to mark it complete
4. Click the X to delete it

### Book a Consultation
1. Click "Consultations" in the navbar
2. Fill in:
   - Date: Pick tomorrow's date
   - Time: Select any time
   - Notes: "First consultation"
3. Click "Book Consultation"
4. Should see success message!

### Explore Nutrition
1. Click "Nutrition" in the navbar
2. Browse the colorful nutrition cards

### Logout
1. Click "Logout" in the navbar
2. Try logging in again with same credentials

---

## 🐛 Troubleshooting

### Backend won't start

**Error: "Cannot find module"**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Error: "MongoDB connection error"**
- Check your MongoDB URI in `backend/.env`
- Ensure IP whitelist is set to 0.0.0.0/0 in MongoDB Atlas
- Wait 2-3 minutes for changes to apply

**Error: "Port 5000 already in use"**
```bash
# macOS/Linux:
lsof -ti:5000 | xargs kill -9

# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

### Frontend won't start

**Error: "Cannot connect to backend"**
- Make sure backend is running first
- Check `frontend/.env` has correct URL: `http://localhost:5000/api`

**Error: "Module not found"**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Login/Signup not working

- Check browser console for errors (F12)
- Verify backend is running and connected to MongoDB
- Make sure JWT_SECRET is set in `backend/.env`

---

## 📦 NPM Commands Reference

### Backend Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development server (with nodemon)
npm start            # Start production server
```

### Frontend Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## 🔑 Default Ports

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000
- **MongoDB**: mongodb://localhost:27017 (if local)

---

## 📝 Quick Tips

1. **Always start backend first**, then frontend
2. **Keep both terminals open** while developing
3. **Use Ctrl+C** to stop servers
4. **Refresh browser** if you make CSS changes
5. **Restart backend** if you change .env file
6. **Check .env files** if authentication fails

---

## 🎯 Next Steps

Once everything works locally:

1. **Push to GitHub**: Follow the GitHub setup in README.md
2. **Deploy Backend**: Use Render (free)
3. **Deploy Frontend**: Use Vercel (free)
4. **Share your project**: Get your live URLs!

---

## 💡 Common Questions

**Q: Do I need to install MongoDB locally?**
A: No! Use MongoDB Atlas (free cloud version). It's easier and works everywhere.

**Q: Can I change the port numbers?**
A: Yes! Change `PORT` in `backend/.env` and update `VITE_API_URL` in `frontend/.env`

**Q: Where is the database data stored?**
A: In MongoDB Atlas cloud or local MongoDB, not in your project files.

**Q: What if I restart my computer?**
A: Just run the servers again (Step 4). Your data is safe in MongoDB.

**Q: Can others access my local server?**
A: No, localhost is only accessible from your computer. Deploy for public access.

---

## 🆘 Still Having Issues?

1. Check the main README.md file
2. Look at error messages carefully
3. Google the specific error
4. Check MongoDB Atlas connection
5. Verify .env files are correct
6. Make sure Node.js version is 16+

---

**🎉 Congratulations! You're all set up!**

Now start building amazing features! 🚀