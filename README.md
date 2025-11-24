# 🚀 MSG Portal API Service

A clean, production‑ready **Node.js + TypeScript + Express + Prisma** API microservice.

## ✨ Features
- **Prisma ORM** (MySQL/PostgreSQL)
- **Clean layered architecture** (Controller → Service → Repository)
- **Joi validations**
- **Global error handling**
- **Async wrapper middleware**
- **Type-safe route handling**
- **Nodemon + ts-node development workflow**

---

## 📂 Project Structure
```
msg-portal-api-service
│
├── prisma
│   ├── migrations
│   └── schema.prisma
│
└── src
    ├── config
    │   └── prisma.ts
    ├── controllers
    │   └── restaurants.controller.ts
    ├── repositories
    │   └── restaurants.repository.ts
    ├── services
    │   └── restaurants.service.ts
    ├── validations
    │   └── restaurants.validation.ts
    ├── middleware
    │   ├── asyncHandler.ts
    │   ├── validate.ts
    │   └── errorHandler.ts
    ├── routes
    │   └── restaurants.routes.ts
    ├── app.ts
    └── server.ts
```

---

## ⚙️ Installation
### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Generate Prisma client
```bash
npm run prisma:generate
```

### 3️⃣ Apply migrations (dev)
```bash
npm run prisma:dev
```

### 4️⃣ Start the development server
```bash
npm run dev
```

---

## 🚀 Running in Production
### 1. Build TypeScript → JavaScript
```bash
npm run build
```

### 2. Start server
```bash
npm start
```

