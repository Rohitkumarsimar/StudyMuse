# StudyMuse

An AI-powered study productivity platform built from scratch using Node.js, Express, PostgreSQL, React, and Tailwind CSS. StudyMuse helps students plan their studies, manage tasks, interact with an AI study companion, and build consistent learning habits.

🔗 **Live Demo:** https://studymuseai.netlify.app  
🔗 **API Base URL:** https://studymuse.onrender.com

---

# Overview

StudyMuse is more than a task manager. It is a productivity platform designed specifically for students.

The application combines secure authentication, intelligent task management, study analytics, and an AI-powered chatbot into one workspace. Students can organize their studies, track their progress, maintain study streaks, and receive AI assistance without leaving the application.

The project follows a layered MVC architecture with a strong emphasis on backend engineering, security, scalability, and clean code.

---

# Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express 5 |
| Database | PostgreSQL (Neon) + Prisma ORM |
| Authentication | JWT, bcrypt, Google OAuth 2.0 |
| Validation | Zod |
| AI | Groq API (Streaming Responses) |
| Frontend | React (Vite) |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| Routing | React Router v6 |
| HTTP Client | Axios |
| Deployment | Render (Backend), Netlify (Frontend) |

---

# Features

## Authentication

- Secure JWT Authentication
- Email & Password Login
- Google OAuth Login
- Email Verification using OTP
- Password Reset using OTP
- Resend OTP
- Password Hashing with bcrypt
- Protected API Routes
- Persistent Authentication
- Route Protection on Frontend
- Axios JWT Interceptor

---

## Task Management

- Create Tasks
- Edit Tasks
- Delete Tasks
- Mark Complete / Pending
- Ownership Enforcement
- Due Dates
- Task Filtering
- Dashboard Statistics

---

## AI Chat Assistant

- AI-powered Study Companion
- Streaming Responses (Server-Sent Events)
- Multiple Conversations
- Automatic Conversation Creation
- Conversation History
- Auto-generated Chat Titles
- Personalized Study Assistance
- Rate Limiting
- Context-aware Responses

---

## Dashboard

- Current Study Streak
- Total Tasks
- Completed Tasks
- Pending Tasks
- Completion Rate
- Recent Tasks
- AI Quick Access

---

## Security

- JWT Authentication
- Password Hashing
- OTP Verification
- Protected Routes
- Zod Validation
- Global Error Handling
- Rate Limiting
- Ownership Validation
- Secure Password Reset Flow

---

# Project Structure

```text
StudyMuse
│
├── backend
│   └── src
│       ├── config
│       ├── controllers
│       ├── services
│       ├── middleware
│       ├── routes
│       ├── prisma
│       ├── schemas
│       ├── utils
│       ├── prompts
│       └── lib
│
└── frontend
    └── src
        ├── api
        ├── components
        ├── context
        ├── hooks
        ├── pages
        ├── layouts
        └── providers
```

---

# Authentication Flow

### Register

- Create Account
- Generate OTP
- Hash OTP
- Send Verification Email
- Verify Email
- Activate Account

### Login

- Validate Credentials
- Generate JWT
- Store Token
- Protected Session

### Password Reset

- Request Reset OTP
- Verify OTP
- Allow Password Reset
- Update Password
- Revoke Reset Permission

### Google Login

- Verify Google ID Token
- Create Account (if new)
- Login Existing User
- Generate JWT

---

# AI Chat System

The chatbot is built using a streaming architecture.

### Features

- Server-Sent Events (SSE)
- Token Streaming
- Conversation Storage
- Chat History
- Automatic Conversation Titles
- Personalized System Prompt
- Study-focused Responses
- Context Preservation

---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register user |
| POST | `/auth/login` | Login |
| POST | `/auth/googleAuth` | Google Authentication |
| POST | `/auth/verify-email` | Verify Email OTP |
| POST | `/auth/resend-otp` | Resend OTP |
| POST | `/auth/forgot-password` | Send Password Reset OTP |
| POST | `/auth/reset-password` | Reset Password |
| GET | `/auth/profile` | Current User |

---

## Tasks

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Get Tasks |
| POST | `/tasks` | Create Task |
| PATCH | `/tasks/:id` | Update Task |
| DELETE | `/tasks/:id` | Delete Task |

---

## Dashboard

| Method | Endpoint | Description |
|---|---|---|
| GET | `/dashboard` | Dashboard Statistics |

---

## AI Chat

| Method | Endpoint | Description |
|---|---|---|
| POST | `/chat/:conversationId` | Stream AI Response |
| GET | `/chat` | All Conversations |
| GET | `/chat/:conversationId` | Conversation Messages |
| DELETE | `/chat/:conversationId` | Delete Conversation |

---

# Database Models

## User

- id
- name
- email
- password
- googleId
- isVerified
- otp
- otpType
- otpExpiresAt
- canResetPassword
- created_at
- updated_at

---

## Task

- id
- title
- description
- completed
- dueDate
- created_at
- updated_at
- userId

---

## Conversation

- id
- title
- userId
- created_at
- updated_at

---

## ChatMessage

- id
- role
- content
- conversationId
- created_at

---

# Local Setup

## Prerequisites

- Node.js 18+
- PostgreSQL Database (Neon recommended)

---

## Backend

```bash
cd backend
npm install
```

Create `.env`

```env
DATABASE_URL=your_database_url

JWT_SECRET=your_secret

GROQ_API_KEY=your_groq_key

GOOGLE_CLIENT_ID=your_google_client_id

EMAIL_USER=your_email

EMAIL_PASS=your_email_password

PORT=3000
```

Run

```bash
npm run dev
```

---

## Frontend

```bash
cd frontend
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:3000

VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

Run

```bash
npm run dev
```

---

# Key Design Decisions

### Prisma + PostgreSQL

Prisma provides type-safe database access while PostgreSQL powers complex queries and scalable relational data.

---

### Layered Architecture

Business logic is isolated inside services while controllers only manage HTTP requests and responses.

---

### Secure Authentication

Authentication uses multiple layers:

- JWT
- bcrypt
- OTP Verification
- Google OAuth
- Route Protection
- Axios Interceptors

---

### Streaming AI

The chatbot streams responses using Server-Sent Events (SSE), providing a real-time conversational experience instead of waiting for the complete response.

---

### Validation

Every request passes through Zod schemas before reaching business logic, ensuring consistent validation and predictable API responses.

---

### Error Handling

A centralized error middleware handles all application errors through a custom `ApiError` class, keeping controllers clean and maintainable.

---

# Roadmap

- [ ] AI Study Planner
- [ ] PDF Workspace
- [ ] PDF Chat
- [ ] AI Notes Generator
- [ ] Flashcards
- [ ] Quiz Generator
- [ ] Pomodoro Timer
- [ ] Calendar Integration
- [ ] Analytics Dashboard
- [ ] Study Heatmaps
- [ ] Email Reminders
- [ ] Mobile Responsive Improvements
- [ ] Dark Mode
- [ ] Collaborative Study Rooms

---

# Deployment

| Service | Platform |
|---|---|
| Frontend | Netlify |
| Backend | Render |
| Database | Neon PostgreSQL |

Frontend: https://studymuseai.netlify.app

Backend: https://studymuse.onrender.com

---

# Author

**Rohit Kumar**

Backend Developer | Node.js • Express • PostgreSQL • Prisma • React

📍 Himachal Pradesh, India

GitHub: https://github.com/Rohitkumarsimar