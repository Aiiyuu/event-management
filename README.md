# 📅 Event Management System (EMS)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)

Quick and efficient Event Management System built with a modern full-stack approach. Leverage AI-driven development for high-speed delivery. 🚀

---

### 🛠 Tech Stack

#### Frontend 🎨
| Tool | Badge |
| :--- | :--- |
| **Framework** | ![Next.js](https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) |
| **UI Library** | ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) |
| **State** | ![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white) |
| **Animation** | ![Framer](https://img.shields.io/badge/Framer-0055FF?style=for-the-badge&logo=framer&logoColor=white) |
| **Maps** | ![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white) |

#### Backend ⚙️
| Tool | Badge |
| :--- | :--- |
| **Framework** | ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) |
| **ORM** | ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) |
| **Database** | ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) |
| **Rate Limit** | ![Throttler](https://img.shields.io/badge/Throttler-Optimization-orange?style=for-the-badge) |

---

### ✨ Features

#### Frontend 📱
* **Dynamic Feed:** `/events` page with pagination, real-time searching, and category filtering.
* **Smooth UX:** `Framer Motion` (AnimatePresence) for slick list transitions.
* **Map View:** Integrated `Leaflet` to visualize event locations geographically.
* **Smart Forms:** Edit and Create routes with robust validation feedback.

| Page | Functionality |
| :--- | :--- |
| `/events` | Main dashboard with search, filters, and sort. |
| `/events/create` | Event submission with field-level validation. |
| `/events/[uuid]` | Detail view, editing, and deletion with safety prompts. |

#### Backend 🧠
* **REST API:** Clean CRUD endpoints for event management.
* **Advanced Queries:** Search by title, description, and location with pagination (`page` & `limit`).
* **Custom Error Handling:** Specialized filters that return field-specific error objects (e.g., `{ "title": "Too short" }`).
* **Optimization:** `NestJS Throttler` for rate-limiting and `@index` on `eventDate` for query performance.

---

### 📊 Database Schema



#### Event Model
| Field | Type | Attributes |
| :--- | :--- | :--- |
| `id` | `String` | `@id`, `uuid()` |
| `title` | `String` | - |
| `location` | `String` | - |
| `description` | `String` | - |
| `eventDate` | `DateTime` | `@@index` |
| `category` | `Enum` | Default: `CONFERENCE` |
| `createdAt` | `DateTime` | `now()` |
| `updatedAt` | `DateTime` | `updatedAt` |

#### Categories
`CONFERENCE` • `MEETUP` • `WORKSHOP` • `WEBINAR` • `SOCIAL`

---

### 🚦 Getting Started

#### 1. Clone & Install
```bash
git clone [https://github.com/your-username/repo-name.git](https://github.com/your-username/repo-name.git)

```

#### 2. Backend (Port 3000)

```bash
cd backend
npm install
# Set DATABASE_URL in .env
npx prisma migrate dev
npm run start:dev
```

#### 3. Frontend (Port 3001)

```bash
cd frontend
npm install
npm run dev
```