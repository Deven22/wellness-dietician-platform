# 🥗 Wellness Dietician Platform

A full-stack web application designed to help users achieve their New Year health and wellness resolutions through personalized nutrition guidance, goal tracking, and consultation booking.

## 🌟 Features

- **🔐 User Authentication**: Secure signup and login with JWT tokens
- **🎯 Goal Tracking System**: Create, track, and manage wellness goals
- **📅 Consultation Booking**: Schedule appointments with expert dieticians
- **📚 Nutrition Resources**: Access expert-backed nutrition information
- **📊 Progress Dashboard**: Monitor your wellness journey with statistics
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful gradient designs with smooth animations

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Styling**: CSS3 with gradients and animations

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **CORS**: Enabled for cross-origin requests

### Database
- **MongoDB Atlas**: Cloud-hosted NoSQL database
- **Collections**: Users, Goals, Consultations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **MongoDB Atlas Account** (free tier) - [Sign up here](https://www.mongodb.com/cloud/atlas)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/wellness-dietician-platform.git
cd wellness-dietician-platform
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following to `backend/.env`:

```env
MONGODB_URI=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

**How to get MongoDB URI:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password

**Start the backend server:**

```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a **new terminal** window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
touch .env
```

Add the following to `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

**Start the frontend server:**

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

### 4. Open in Browser

Visit `http://localhost:5173` and start using the application!

## 📁 Project Structure

```
wellness-dietician-platform/
├── backend/
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Goal.js              # Goal schema
│   │   └── Consultation.js      # Consultation schema
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   ├── goals.js             # Goal CRUD routes
│   │   └── consultations.js    # Consultation routes
│   ├── middleware/
│   │   └── auth.js              # JWT verification middleware
│   ├── server.js                # Express server entry point
│   ├── package.json             # Backend dependencies
│   └── .env                     # Environment variables (not in git)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx       # Navigation component
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Landing page
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Signup.jsx       # Registration page
│   │   │   ├── Dashboard.jsx    # User dashboard
│   │   │   ├── Consultations.jsx    # Booking page
│   │   │   └── NutritionContent.jsx # Resources page
│   │   ├── services/
│   │   │   └── api.js           # Axios configuration
│   │   ├── App.jsx              # Main app component
│   │   ├── App.css              # Global styles
│   │   └── main.jsx             # React entry point
│   ├── package.json             # Frontend dependencies
│   └── .env                     # Environment variables (not in git)
│
├── .gitignore                   # Git ignore rules
└── README.md                    # Project documentation
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Goals (Protected Routes)
- `GET /api/goals` - Get user's goals
- `POST /api/goals` - Create new goal
- `PUT /api/goals/:id` - Update goal
- `DELETE /api/goals/:id` - Delete goal

### Consultations (Protected Routes)
- `GET /api/consultations` - Get user's consultations
- `POST /api/consultations` - Book consultation
- `PUT /api/consultations/:id` - Update consultation

## 🌐 Deployment

### Backend (Render)

1. Create account at [Render.com](https://render.com)
2. Connect your GitHub repository
3. Create new Web Service
4. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `PORT=5000`
6. Deploy!

### Frontend (Vercel)

1. Create account at [Vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - **Framework**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add environment variable:
   - `VITE_API_URL=https://your-backend-url.onrender.com/api`
5. Deploy!

## 🧪 Testing the Application

### Test User Flow:
1. **Sign Up**: Create a new account with name, email, and password
2. **Dashboard**: View your personalized dashboard
3. **Add Goals**: Create wellness goals (e.g., "Drink 8 glasses of water daily")
4. **Track Progress**: Mark goals as complete or incomplete
5. **Book Consultation**: Schedule an appointment with a dietician
6. **Explore Nutrition**: Read expert nutrition content
7. **Logout**: Test authentication flow

## 📦 Dependencies

### Backend Dependencies
```json
{
  "express": "^4.18.2",
  "mongoose": "^7.6.0",
  "jsonwebtoken": "^9.0.2",
  "bcryptjs": "^2.4.3",
  "dotenv": "^16.3.1",
  "cors": "^2.8.5"
}
```

### Frontend Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "axios": "^1.6.2",
  "lucide-react": "^0.263.1"
}
```

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token-based authentication
- Protected API routes with middleware
- CORS configuration for secure cross-origin requests
- Environment variables for sensitive data
- MongoDB injection protection with Mongoose

## 🎨 Design Features

- **Modern Gradients**: Purple, pink, blue, and green color schemes
- **Smooth Animations**: Fade-in effects and hover transitions
- **Glassmorphism**: Backdrop blur effects on cards
- **Responsive Layout**: Mobile-first design approach
- **Emojis**: Fun and engaging user interface
- **Box Shadows**: Depth and visual hierarchy

## 📸 Screenshots

### Home Page
Colorful landing page with feature cards and call-to-action buttons.

### Dashboard
Personalized dashboard with goal statistics and tracking system.

### Consultations
Easy-to-use booking system with date/time selection.

### Nutrition Resources
Educational content about macronutrients, hydration, and healthy eating.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

