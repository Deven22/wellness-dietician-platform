# 📦 Project Dependencies

Complete list of all dependencies used in the Wellness Dietician Platform.

---

## 🔧 Backend Dependencies

### Production Dependencies

#### express (^4.18.2)
- **Purpose**: Web application framework for Node.js
- **Used for**: Creating REST API, routing, middleware
- **Install**: `npm install express`

#### mongoose (^7.6.0)
- **Purpose**: MongoDB object modeling tool
- **Used for**: Database schemas, queries, validation
- **Install**: `npm install mongoose`

#### jsonwebtoken (^9.0.2)
- **Purpose**: JWT authentication
- **Used for**: Creating and verifying user tokens
- **Install**: `npm install jsonwebtoken`

#### bcryptjs (^2.4.3)
- **Purpose**: Password hashing library
- **Used for**: Securely storing user passwords
- **Install**: `npm install bcryptjs`

#### dotenv (^16.3.1)
- **Purpose**: Loads environment variables from .env file
- **Used for**: Managing configuration and secrets
- **Install**: `npm install dotenv`

#### cors (^2.8.5)
- **Purpose**: Enable Cross-Origin Resource Sharing
- **Used for**: Allowing frontend to communicate with backend
- **Install**: `npm install cors`

### Development Dependencies

#### nodemon (^3.0.1)
- **Purpose**: Auto-restart server on file changes
- **Used for**: Development workflow
- **Install**: `npm install --save-dev nodemon`

### Install All Backend Dependencies

```bash
cd backend
npm install express mongoose jsonwebtoken bcryptjs dotenv cors
npm install --save-dev nodemon
```

---

## 🎨 Frontend Dependencies

### Production Dependencies

#### react (^18.2.0)
- **Purpose**: JavaScript library for building user interfaces
- **Used for**: Core UI components
- **Install**: `npm install react`

#### react-dom (^18.2.0)
- **Purpose**: React package for working with the DOM
- **Used for**: Rendering React components
- **Install**: `npm install react-dom`

#### react-router-dom (^6.20.0)
- **Purpose**: Routing library for React
- **Used for**: Navigation between pages
- **Install**: `npm install react-router-dom`

#### axios (^1.6.2)
- **Purpose**: Promise-based HTTP client
- **Used for**: Making API requests to backend
- **Install**: `npm install axios`

#### lucide-react (^0.263.1)
- **Purpose**: Beautiful & consistent icons
- **Used for**: UI icons throughout the app
- **Install**: `npm install lucide-react`

### Development Dependencies

#### @vitejs/plugin-react (^4.2.0)
- **Purpose**: Vite plugin for React
- **Used for**: Fast refresh and JSX transformation
- **Install**: Comes with Vite setup

#### vite (^5.0.0)
- **Purpose**: Next-generation frontend build tool
- **Used for**: Development server and production builds
- **Install**: Comes with Vite setup

### Install All Frontend Dependencies

```bash
cd frontend
npm install react react-dom react-router-dom axios lucide-react
```

---

## 📊 Dependency Tree

### Backend
```
backend/
├── express@4.18.2
├── mongoose@7.6.0
│   └── mongodb@6.x (installed automatically)
├── jsonwebtoken@9.0.2
├── bcryptjs@2.4.3
├── dotenv@16.3.1
├── cors@2.8.5
└── nodemon@3.0.1 (dev)
```

### Frontend
```
frontend/
├── react@18.2.0
├── react-dom@18.2.0
├── react-router-dom@6.20.0
│   └── history, path-to-regexp (installed automatically)
├── axios@1.6.2
├── lucide-react@0.263.1
└── vite@5.0.0 (dev)
    └── @vitejs/plugin-react@4.2.0 (dev)
```

---

## 🔒 Security Dependencies

### Backend Security
- **bcryptjs**: Prevents password breaches
- **jsonwebtoken**: Secure authentication
- **mongoose**: Prevents MongoDB injection

### Frontend Security
- **axios**: Secure HTTP requests with interceptors
- **React**: XSS protection built-in

---

## 📏 Size Information

### Backend (node_modules)
- **Size**: ~50 MB
- **Packages**: ~150
- **Install time**: 30-60 seconds

### Frontend (node_modules)
- **Size**: ~200 MB
- **Packages**: ~400
- **Install time**: 1-2 minutes

---

## 🔄 Version Compatibility

### Node.js Versions
- **Minimum**: Node.js 16.x
- **Recommended**: Node.js 18.x or 20.x
- **Check**: `node --version`

### npm Versions
- **Minimum**: npm 8.x
- **Recommended**: npm 9.x or 10.x
- **Check**: `npm --version`

---

## 📝 Package.json Files

### Backend package.json

```json
{
  "name": "wellness-backend",
  "version": "1.0.0",
  "description": "Wellness Dietician Platform Backend",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.6.0",
    "jsonwebtoken": "^9.0.2",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.3.1",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### Frontend package.json

```json
{
  "name": "wellness-frontend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "axios": "^1.6.2",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0"
  }
}
```

---

## 🔄 Updating Dependencies

### Check for outdated packages

```bash
# Backend
cd backend
npm outdated

# Frontend
cd frontend
npm outdated
```

### Update all dependencies

```bash
# Backend
cd backend
npm update

# Frontend
cd frontend
npm update
```

### Update specific package

```bash
npm install package-name@latest
```

---

## 🚨 Known Issues & Fixes

### Issue: npm ERR! ERESOLVE unable to resolve dependency tree

**Fix:**
```bash
npm install --legacy-peer-deps
```

### Issue: Cannot find module 'mongoose'

**Fix:**
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

### Issue: React version mismatch

**Fix:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

---

## 📦 Alternative Package Managers

### Using Yarn

```bash
# Install Yarn
npm install -g yarn

# Install dependencies
cd backend && yarn install
cd frontend && yarn install

# Run development
yarn dev
```

### Using pnpm

```bash
# Install pnpm
npm install -g pnpm

# Install dependencies
cd backend && pnpm install
cd frontend && pnpm install

# Run development
pnpm dev
```

---

## 🌍 External Services (Not npm packages)

### MongoDB Atlas
- **Purpose**: Cloud database hosting
- **Cost**: Free tier (512 MB)
- **Setup**: https://www.mongodb.com/cloud/atlas

### Render (for backend deployment)
- **Purpose**: Backend hosting
- **Cost**: Free tier (with spin-down)
- **Setup**: https://render.com

### Vercel (for frontend deployment)
- **Purpose**: Frontend hosting
- **Cost**: Free tier (100 GB bandwidth)
- **Setup**: https://vercel.com

---

## 📖 Documentation Links

### Backend Libraries
- **Express**: https://expressjs.com/
- **Mongoose**: https://mongoosejs.com/
- **JWT**: https://jwt.io/
- **bcrypt**: https://www.npmjs.com/package/bcryptjs

### Frontend Libraries
- **React**: https://react.dev/
- **React Router**: https://reactrouter.com/
- **Axios**: https://axios-http.com/
- **Lucide**: https://lucide.dev/

### Build Tools
- **Vite**: https://vitejs.dev/
- **Node.js**: https://nodejs.org/

---

## 💡 Why These Dependencies?

### Express
- Most popular Node.js framework
- Simple and minimalist
- Great ecosystem
- Easy to learn

### React
- Most popular UI library
- Component-based
- Large community
- Excellent documentation

### MongoDB/Mongoose
- Flexible NoSQL database
- Easy to scale
- Free cloud hosting
- Great for rapid development

### JWT
- Industry standard for authentication
- Stateless (no server sessions)
- Secure and scalable

### Vite
- 10-100x faster than Webpack
- Hot module replacement
- Optimized builds
- Modern and maintained

---

## 🎯 Minimal Installation

If you want the absolute minimum to get started:

```bash
# Backend minimal
cd backend
npm install express mongoose dotenv

# Frontend minimal
cd frontend
npm install react react-dom
```

However, the full setup is recommended for all features!

---

## 📊 Dependency Sizes

| Dependency | Size | Purpose |
|------------|------|---------|
| express | 200 KB | Web framework |
| mongoose | 1.2 MB | Database ODM |
| react | 120 KB | UI library |
| axios | 90 KB | HTTP client |
| jwt | 60 KB | Authentication |
| bcryptjs | 100 KB | Password hashing |

**Total Backend**: ~2 MB (compressed)
**Total Frontend**: ~1 MB (compressed)
**Production Build**: ~500 KB (gzipped)

---

**📦 All dependencies are open-source and actively maintained!**