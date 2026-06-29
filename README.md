# StudyMuse

A full-stack study task management application built from scratch with Node.js, Express, PostgreSQL, React, and Tailwind CSS.

🔗 **Live Demo:** [studymuseai.netlify.app](https://studymuseai.netlify.app)  
🔗 **API Base URL:** [studymuse.onrender.com](https://studymuse.onrender.com)

---

## Overview

StudyMuse helps students manage their study tasks, track completion, and maintain a daily study streak. Users can register, log in, create and manage tasks, and view their progress on a personal dashboard — all secured with JWT authentication.

Built as a portfolio project targeting backend developer roles, with a focus on clean MVC architecture, raw SQL, and security best practices.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express 5 |
| Database | PostgreSQL (Neon.tech) |
| Auth | JWT, bcrypt |
| Validation | Zod |
| Frontend | React (Vite), Tailwind CSS v4 |
| Routing | React Router v6 |
| HTTP Client | Axios |
| Deployment | Render (API), Netlify (Frontend) |

---

## Features

- **JWT Authentication** — register, login, protected routes with auth middleware
- **Password Security** — bcrypt hashing, never stored in plain text
- **Task Management** — full CRUD with ownership enforcement (users only access their own tasks)
- **Dashboard Stats** — total tasks, completed, pending, completion rate, study streak
- **Study Streak** — calculated server-side using PostgreSQL CTEs and window functions
- **Input Validation** — Zod schemas on all endpoints, consistent error responses
- **Global Error Handling** — custom `ApiError` class, centralized error middleware
- **Protected Frontend Routes** — `ProtectedRoute` component mirrors backend auth middleware
- **Persistent Auth** — JWT stored in localStorage, Axios interceptor attaches token automatically

---

## Project Structure

```
StudyMuse/
├── backend/
│   └── src/
│       ├── config/         ← database connection
│       ├── routes/         ← URL to controller mapping
│       ├── controllers/    ← request/response handling
│       ├── services/       ← business logic
│       ├── db/             ← raw SQL queries
│       ├── middleware/     ← auth, validation, error handling
│       ├── schemas/        ← Zod validation schemas
│       └── utils/          ← helpers (JWT, bcrypt, apiResponse)
│
└── frontend/
    └── src/
        ├── api/            ← Axios instance with interceptor
        ├── context/        ← AuthContext (global auth state)
        ├── hooks/          ← useAuth, useTasks (custom hooks)
        ├── components/     ← reusable UI and layout components
        └── pages/          ← Login, Register, Dashboard, Tasks, Profile
```

---

## API Endpoints

### Auth
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/auth/register` | ❌ | Create new user |
| POST | `/auth/login` | ❌ | Login, returns JWT |
| GET | `/auth/profile` | ✅ | Get logged-in user details |

### Tasks
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/tasks` | ✅ | Get all tasks for current user |
| POST | `/tasks` | ✅ | Create a new task |
| PATCH | `/tasks/:id` | ✅ | Update a task |
| DELETE | `/tasks/:id` | ✅ | Delete a task |

### Dashboard
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/dashboard` | ✅ | Get stats — total, completed, pending, rate, streak |

---

## Database Schema

```sql
CREATE TABLE users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        VARCHAR(100) NOT NULL,
  email       VARCHAR(255) UNIQUE NOT NULL,
  password    VARCHAR(255) NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE tasks (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID REFERENCES users(id) ON DELETE CASCADE,
  title        VARCHAR(255) NOT NULL,
  subject      VARCHAR(100),
  due_date     TIMESTAMPTZ,
  is_completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Local Setup

### Prerequisites
- Node.js v18+
- PostgreSQL database (or Neon.tech free tier)

### Backend
```bash
cd backend
npm install
```

Create `.env`:
```
DATABASE_URL=your_neon_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

```bash
npm run dev
```

### Frontend
```bash
cd frontend
npm install
```

Create `.env`:
```
VITE_API_URL=http://localhost:3000
```

```bash
npm run dev
```

---

## Key Design Decisions

**Raw SQL over ORM** — deliberately chose raw PostgreSQL queries over Prisma/Sequelize to understand SQL deeply before abstracting it away.

**Ownership in a single query** — task queries use `AND user_id = $2` to enforce ownership at the database level, avoiding a separate ownership check round-trip.

**Single error middleware** — all errors flow through one `error.middleware.js` using `next(err)`, keeping controllers clean with `asyncWrapper`.

**Three auth layers** — `localStorage` for persistence, `AuthContext` for React state, Axios interceptor for automatic token attachment. Each serves a distinct purpose.

---

## Roadmap — Future Features

- [ ] **AI Study Planner** — generate personalized study plans using Claude API based on subject, exam date, and available hours
- [ ] **Notes** — rich text notes linked to tasks and subjects
- [ ] **Configurable Streak System** — users set their own streak goal duration
- [ ] **PDF Workspace** — upload and annotate study materials
- [ ] **Analytics Dashboard** — weekly/monthly completion trends with charts
- [ ] **Email Reminders** — due date notifications via nodemailer
- [ ] **UI Upgrade** — migrate to shadcn/ui component library

---

## Deployment

| Service | Platform | URL |
|---|---|---|
| Frontend | Netlify | [studymuseai.netlify.app](https://studymuseai.netlify.app) |
| Backend API | Render | [studymuse.onrender.com](https://studymuse.onrender.com) |
| Database | Neon.tech | PostgreSQL (serverless) |

---

## Author

**Rohit Kumar**  
Fresher Backend Developer — Node.js, Express, PostgreSQL  
📍 Himachal Pradesh, India  
🔗 [GitHub](https://github.com/Rohitkumarsimar)
