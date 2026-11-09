# Feedback Hub - MERN CRUD Application

A full-stack web application designed to collect, display, and manage user feedback. Built using the **MERN** stack (MongoDB, Express.js, React, Node.js), this project demonstrates clean component structuring on the frontend and full RESTful API implementation on the backend.

## 🚀 Features

- **Create:** Submit user feedback with a name and detailed comments.
- **Read:** View a dynamic list of all submitted feedback in real time.
- **Update:** Edit existing feedback details instantly.
- **Delete:** Remove feedback entries seamlessly.
- **Responsive UI:** Modern, light-blue themed styling powered by **Bootstrap** and built on a fast **Vite** pipeline.

## 🛠️ Tech Stack

- **Frontend:** React, React Router DOM, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Build Tool:** Vite

---

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) and [MongoDB](https://mongodb.com) installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com
cd feedback-crud
```

### 2. Setup the Backend Server
Navigate to your backend directory (e.g., `server` or project root depending on your layout), install dependencies, and start the environment.

```bash
# Navigate to backend folder
cd backend

# Install backend packages
npm install

# Create a .env file and add your connection string:
# PORT=5000
# MONGO_URI=your_mongodb_connection_string

# Start the Node development server
npm run dev
```

### 3. Setup the Frontend Client
Open a new terminal window to install and run the Vite-React application.

```bash
# Navigate to frontend folder
cd feedback-crud

# Install dependencies
npm install

# Run the Vite server
npm run dev
```

Your browser should automatically open `http://localhost:5173` showing the working application.

---

## 📁 Project Structure (Key Folders)
```text
├── backend/
│   ├── models/        # MongoDB Schemas
│   ├── routes/        # API Endpoints (CRUD logic)
│   └── server.js      # Express server entry point
├── src/
│   ├── Components/    # Reusable parts (Navbar, Layouts)
│   ├── pages/         # Page Views (Home.jsx, Edit.jsx)
│   ├── App.jsx        # Component routing layout
│   └── main.jsx       # Client entry point & Bootstrap imports
```
