# 🎓 Learning Management System (LMS)
A **production-ready full-stack LMS platform** built with **React, Node.js, MongoDB, Docker, and Nginx**, designed for **online courses and corporate training**.

This project demonstrates **real-world SaaS architecture**, **role-based access control**, **DevOps containerization**, and **scalable backend design**.

---

# 🚀 Features

# 👨‍🎓 Student
- User registration & login (JWT authentication)
- Browse and enroll in courses
- Watch video lessons
- Track lesson & course progress
- Download course completion certificate (PDF)

# 👨‍🏫 Instructor
- Create & manage courses
- Add lessons with video uploads (S3 / MinIO)
- View enrolled students and progress

# 🛠 Admin
- Manage users (Admin / Instructor / Student)
- Assign instructors to courses
- Full platform control
---

# 🧱 Tech Stack

# Frontend
- React (Vite)
- React Router
- Axios
- Role-based protected routes
- Responsive UI

# Backend
- Node.js + Express
- JWT Authentication
- Role-Based Access Control (RBAC)
- REST APIs
- PDF generation (Certificates)

# Database
- MongoDB
- Mongoose ODM

# Storage
- MinIO (S3-compatible object storage)
- Pre-signed URLs for secure video uploads

# DevOps / Infrastructure
- Docker
- Docker Compose
- Nginx (Reverse Proxy)
- Environment-based configuration
---

# 📁 Project Structure
lms-platform/
├── frontend/
│ ├── Dockerfile
│ ├── package.json
│ └── src/
│ ├── App.jsx
│ ├── main.jsx
│ └── pages/
│
├── backend/
│ ├── Dockerfile
│ ├── package.json
│ └── src/
│ ├── server.js
│ ├── models/
│ ├── routes/
│ └── middleware/
│
├── nginx/
│ └── nginx.conf
│
├── docker-compose.yml
└── .env

---

# 🔐 Authentication & Authorization

- JWT-based authentication
- Role-based access control:
  - `admin`
  - `instructor`
  - `student`
- Backend middleware protects sensitive routes
- Frontend route guarding

---

# 📊 Core API Endpoints

# Authentication
POST /api/auth/register
POST /api/auth/login

# Courses
GET /api/courses
POST /api/courses (Admin / Instructor)

# Progress Tracking
POST /api/progress/complete (Student)

# Certificate
GET /api/certificate/:courseId

# Video Upload
POST /api/upload (Admin / Instructor)

---

# 🧾 Certificate Generation

- Certificates are generated dynamically using **PDFKit**
- Includes course ID and student information
- Downloadable as a PDF

---

# 🐳 Docker & Deployment

# Prerequisites
- Docker
- Docker Compose

# Run Locally
docker-compose up -d --build

# Access the App
Frontend: http://localhost
Backend API: http://localhost/api

# Nginx Reverse Proxy
Serves frontend
Proxies /api requests to backend
Production-ready configuration

# Why This Project Is Strong
✔ Real SaaS LMS architecture
✔ Full authentication & RBAC
✔ Dockerized microservices
✔ Cloud-ready storage (S3 / MinIO)
✔ Perfect for Full-Stack / DevOps resumes
✔ Easy to deploy on AWS / Azure / GCP

# Future Enhancements
Email notifications
Course ratings & reviews
Payment integration
CI/CD with GitHub Actions
Kubernetes deployment

# License
This project is for educational and portfolio purposes.

# Author
Your Name
Full-Stack | DevOps Engineer
