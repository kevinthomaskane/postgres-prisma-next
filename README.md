# 🧠 Full-Stack Auth App with Next.js, Prisma, and PostgreSQL

This project is a full-stack application built using the **Next.js App Router**, **PostgreSQL**, and **Prisma ORM**, with authentication features powered by **bcrypt** and **JWT**.

---

## 🛠 Tech Stack

- **Next.js (App Router)** — frontend and API routes
- **PostgreSQL** — relational database
- **Prisma ORM** — type-safe database access
- **bcrypt** — password hashing
- **JWT** — token-based authentication (coming soon)

---

## 📦 Setup Instructions

### 1. Clone & install dependencies

```bash
git clone <your-repo-url>
cd your-project-name
npm install
```

### 2. Configure PostgreSQL

Make sure PostgreSQL is running locally or remotely. Create a database, e.g., `my_app_db`.

### 3. Create `.env` file

```env
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/my_app_db"
```

> ⚠️ If your password includes special characters (like `?`, `&`, `@`), make sure to **URL-encode** them.

---

## 🔧 Prisma Overview

### What is Prisma?

Prisma is a next-generation ORM for Node.js and TypeScript. It:

- Maps your database schema to a **typed client**
- Allows you to write **type-safe database queries** in JavaScript/TypeScript
- Handles **migrations** and **query generation**

### Common Prisma Files:

| File                                                    | Purpose                               |
| ------------------------------------------------------- | ------------------------------------- |
| `prisma/schema.prisma`                                  | Defines your DB models and datasource |
| `.env`                                                  | Holds the database connection string  |
| `node_modules/@prisma/client` or `app/generated/prisma` | Your generated Prisma client          |

### CLI Commands

Run all Prisma commands with `npx`:

```bash
# Initialize Prisma
npx prisma init

# Create migration and apply it to DB
npx prisma migrate dev --name init

# Generate/update the Prisma client
npx prisma generate

# View DB in browser
npx prisma studio

# View migration status
npx prisma migrate status
```

> 💡 **Why `npx`?** `prisma` is installed as a dev dependency. `npx` temporarily exposes the local binary installed in node_modules without installing it globally.

---

## 🔐 Auth Flow (WIP)

### ✅ Registration (`/api/register`)

- Accepts: `email`, `username`, `password`, `name`
- Hashes password with bcrypt
- Saves user to DB if email/username not taken

### 🚧 Login (`/api/login`)

- Coming next: issue a JWT

---

## 📂 Folder Structure

```
/app
  /login
    page.tsx             ← client-side login form
  /api
    /register
      route.ts           ← registration handler (POST)
    /login
      route.ts           ← login handler (coming soon)
/prisma
  schema.prisma          ← DB schema + generator config
```

---

## 🧪 Testing

Use Postman, Thunder Client, or `curl` to test routes:

```bash
curl -X POST http://localhost:3000/api/register   -H "Content-Type: application/json"   -d '{"email":"test@example.com","username":"testuser","password":"abc123","name":"Test"}'
```

---

## ✅ Next Up

- 🔑 Add JWT-based login
- 🧼 Sanitize input and add validation
- 🧠 Protect routes with middleware

---

## 📚 Resources

- [Prisma Docs](https://www.prisma.io/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
