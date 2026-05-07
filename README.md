<div align="center">

<img src="https://i.ibb.co.com/nsqc159g/Screenshot-2026-05-07-163702.png" alt="Gym Engine Cover" width="100%" style="border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);" />

<br/>

<img src="https://img.icons8.com/fluency/96/dumbbell.png" alt="Gym Engine Logo" width="80" />

<h1>⚡ GYM ENGINE</h1>

> **A Modern Role-Based Gym Management & Fitness Booking Platform**

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>
<p>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/NextAuth.js-111111?style=for-the-badge&logo=auth0&logoColor=white" alt="NextAuth" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
</p>

<p>
  <img src="https://img.shields.io/github/stars/tuhin360?style=social" alt="Stars" />
  &nbsp;
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  &nbsp;
  <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License" />
</p>

<br/>

[🚀 Live Demo](#-demo-credentials) &nbsp;·&nbsp; [📖 Docs](#-api-base-url) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/tuhin360) &nbsp;·&nbsp; [✨ Request Feature](https://github.com/tuhin360)

</div>

---

## 🌟 What is Gym Engine?

**Gym Engine** is a full-stack gym management ecosystem that empowers fitness centers to operate smarter. Users can join, train, book fitness classes, and manage programs — all through a beautifully designed, role-aware interface.

Whether you're an **admin** managing the whole gym, a **trainer** running classes, or a **member** crushing goals — Gym Engine has a tailored experience built just for you.

---

## ✨ Core Features

<table>
<tr>
<td width="50%">

### 🔐 Authentication & Security
- NextAuth + JWT dual-layer auth
- Role-based route protection
- Secure password hashing with bcryptjs
- Session persistence & token refresh

### 👥 Role Management
- **Admin** — Full platform control
- **Trainer** — Class & schedule management
- **Member** — Booking & progress tracking
- **Non-member** — Browse & onboard

</td>
<td width="50%">

### 📅 Class & Booking System
- Real-time class scheduling
- Trainer assignment per class
- Seat availability management
- Booking confirmation flow

### 📊 Dashboard & Analytics
- Role-specific dashboards
- Admin analytics & user tracking
- Dark / Light mode support
- Mobile-responsive layouts

</td>
</tr>
</table>

---

## 🧑‍💻 User Roles at a Glance

```
┌─────────────┬───────────────────────────────────────────────────────┐
│    Role     │  Capabilities                                          │
├─────────────┼───────────────────────────────────────────────────────┤
│  🛡️ Admin   │  Full control: users, schedules, analytics, settings  │
│  🏋️ Trainer │  Manage own classes, set schedules, view members       │
│  👤 Member  │  Book classes, track progress, choose trainers         │
│  👥 Non-mem │  Browse programs, register, upgrade to member          │
└─────────────┴───────────────────────────────────────────────────────┘
```

---

## 🏋️ Fitness Programs

| Program | Description | Level |
|---------|-------------|-------|
| 🟢 Basic Fitness | Foundation training for beginners | Beginner |
| 🧘 Yoga | Flexibility, balance & mindfulness | All Levels |
| 💪 Body Building | Structured hypertrophy programs | Intermediate |
| 🔥 Muscle Courses | Advanced strength & conditioning | Advanced |

---

## 🛠️ Tech Stack

<table>
<tr>
<th>🖥️ Frontend</th>
<th>⚙️ Backend</th>
</tr>
<tr>
<td>

- **Next.js** — React framework with SSR/SSG
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **NextAuth.js** — Authentication flows
- **Axios** — HTTP client

</td>
<td>

- **Node.js** — Runtime environment
- **Express.js** — RESTful API server
- **MongoDB** — NoSQL database
- **JWT** — Stateless auth tokens
- **bcryptjs** — Password encryption

</td>
</tr>
</table>

---

## 🔄 System Flow

```
User Login
    │
    ▼
Role Detection ──────────────────────────────────┐
    │                                             │
    ▼                                             ▼
Admin Dashboard              Member / Trainer Dashboard
    │                                   │
    ▼                                   ▼
Manage Users             Browse & Book Classes
Manage Schedules                 │
View Analytics                   ▼
                         Select Trainer
                                 │
                                 ▼
                         Confirm Booking ✅
```

---

## 🔥 Demo Credentials

> ⚡ Try the platform instantly — no sign-up needed!

| Role | Email | Password |
|------|-------|----------|
| 🛡️ Admin | `admin@gmail.com` | `123456` |
| 🏋️ Trainer | `trainer@gmail.com` | `123456` |
| 👤 Member | `member@gmail.com` | `123456` |
| 👥 Non-member | `nonmember@gmail.com` | `123456` |

---

## 🌐 API Base URL

```
https://gym-engine-server.vercel.app/api/v1
```

---

## 📁 Project Structure

<table>
<tr>
<th>🖥️ Frontend</th>
<th>⚙️ Backend (MVC)</th>
</tr>
<tr>
<td>

```
src/
├── app/           # Next.js app router
├── components/    # Reusable UI components
├── assets/        # Images & static files
├── lib/           # Helper functions
└── styles/        # Global styles
```

</td>
<td>

```
src/
├── controllers/   # Route handlers
├── models/        # Mongoose schemas
├── routes/        # API route definitions
├── middlewares/   # Auth & validation
├── config/        # DB & env config
└── utils/         # Shared utilities
```

</td>
</tr>
</table>

---

## 📦 Installation

### 1. Clone the Repositories

```bash
# Frontend
git clone https://github.com/tuhin360/gym-engine-client.git
cd gym-engine-client

# Backend
git clone https://github.com/tuhin360/gym-engine-server.git
cd gym-engine-server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

**Frontend** — create `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://gym-engine-server.vercel.app/api/v1
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

**Backend** — create `.env`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
```

### 4. Run Locally

```bash
# Frontend
npm run dev   # → http://localhost:3000

# Backend
npm run dev   # → http://localhost:5000
```

---

## 📊 Key Modules

| Module | Technology | Description |
|--------|-----------|-------------|
| 🔐 Auth Module | NextAuth + JWT | Secure login, role detection, session handling |
| 🏋️ Class Management | Express + MongoDB | CRUD for fitness classes & schedules |
| 📅 Schedule Manager | REST API | Create, update & delete time slots |
| 👤 RBAC | Middleware + JWT | Role-based access control across all routes |
| 📈 Analytics Dashboard | Next.js + Charts | Admin insights, user activity, booking trends |

---

## 🚀 Roadmap

- [x] Role-based authentication & dashboards
- [x] Class booking & trainer assignment
- [x] Admin analytics
- [x] Dark / Light mode
- [ ] 📱 Mobile App (React Native)
- [ ] 🔔 Real-time push notifications
- [ ] 💬 In-app chat (Trainer ↔ Member)
- [ ] 📊 Advanced analytics & reporting
- [ ] 🌍 Multi-language / i18n support
- [ ] 💳 Payment integration

---

## 👨‍💻 Author

<div align="center">

<img src="https://avatars.githubusercontent.com/tuhin360" width="80" style="border-radius:50%" alt="Jahedi Alam Tuhin" />

### Jahedi Alam Tuhin

[![GitHub](https://img.shields.io/badge/GitHub-tuhin360-181717?style=for-the-badge&logo=github)](https://github.com/tuhin360)

</div>

---

## ⭐ Support the Project

If Gym Engine helped you or you find it interesting, please consider giving it a **⭐ star** on GitHub — it means a lot and helps others discover the project!

```
    ★ Star    →  github.com/tuhin360
```

---

<div align="center">

Made with ❤️ and 🏋️ by **Jahedi Alam Tuhin**

</div>