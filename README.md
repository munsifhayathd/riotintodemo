# Horizon Digital - Next.js Dashboard Starter

A modern, responsive dashboard starter built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **NextAuth.js**.

## Features

- 🔐 Authentication with NextAuth.js  
- 🎨 Modern UI with Tailwind CSS  
- 🌙 Dark mode support  
- 📱 Fully responsive design  
- 🔄 Server-side rendering  
- 🚀 API routes for backend functionality  
- 🎭 Framer Motion animations  
- 🔒 Protected routes  
- 📊 Dashboard analytics  
- 🎯 Form validation with Zod  
- 📦 Docker Compose configuration  
- 🛢️ Supports PostgreSQL, MySQL, or SQLite (default for development)

---
## Project Structure
 
```
├── docker
│   ├── docker-compose                  # Docker Compose configuration
│   │   ├── docker-compose.local.yml    # Local environment configuration
│   │   └── docker-compose.poc.yml      # POC environment configuration (WIP)
│   ├── nginx
│   │   ├── site.local.conf             # Local environment configuration
│   │   └── site.poc.conf               # POC environment configuration (WIP)
│   └── node
│       └── Dockerfile
├── docker-compose.yml
├── frontend
│   ├── prisma                          # Next.js 14 App Router
│   │   ├── schema.prisma               # Prisma schema
│   │   └── seed.ts                     # Prisma database seeder
│   ├── public/                         # Public assets
│   ├── src
│   │   ├── app
│   │   │   ├── (auth)
│   │   │   │   ├── forgot-password/    # Forgot password page
│   │   │   │   ├── login/              # Login page
│   │   │   │   └── register/           # Register page
│   │   │   ├── (dashboard)
│   │   │   │   ├── dashboard/          # Main dashboard page
│   │   │   │   └── layout.tsx          # Dashboard layout
│   │   │   ├── api
│   │   │   │   └── auth/               # Auth API endpoints
│   │   │   ├── globals.css             # Global CSS file
│   │   │   ├── layout.tsx              # Root layout
│   │   │   └── page.tsx                # Landing page
│   │   ├── components
│   │   │   ├── dashboard
│   │   │   │   ├── navbar.tsx          # Navigation bar
│   │   │   │   └── sidebar.tsx         # Sidebar navigation
│   │   │   ├── providers
│   │   │   │   └── session-provider.tsx # Session provider
│   │   │   └── ui
│   │   │       ├── avatar.tsx          # Avatar component
│   │   │       ├── button.tsx          # Button component
│   │   │       ├── input.tsx           # Input component
│   │   │       └── logo.tsx            # Logo component
│   │   ├── lib
│   │   │   ├── auth.ts                 # Authentication configuration
│   │   │   ├── db.ts                   # Database client
│   │   │   ├── utils.ts                # Utility functions
│   │   │   └── validations
│   │   │       └── auth.ts             # Authentication validation schema
│   │   ├── middleware.ts               # Middleware configuration
│   │   └── stores
│   │       └── sidebar-store.ts        # Sidebar store
│   ├── tailwind.config.ts              # Tailwind CSS configuration
│   └── tsconfig.json                   # TypeScript configuration
└── tools
   ├── build.sh                        # Docker Build script
   ├── down.sh                         # Docker Down script
   ├── setup.sh                        # Docker Setup script
   └── up.sh                           # Docker Up script
```
---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/horizon-digital.git
cd horizon-digital
```

---

### 2. Configure environment variables

Copy the example `.env` file:

```bash
cp .env.example .env
```

Then update the following in the `.env` file:

- `NEXTAUTH_SECRET` – Generate a secure key:
  ```bash
  openssl rand -base64 32
  ```

- `DATABASE_URL` – Use one of the following formats:

  - **PostgreSQL**:
    ```
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```
  - **MySQL**:
    ```
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```
  - **SQLite (default)**:
    ```
    DATABASE_URL="file:./prisma/dev.db"
    ```

Make sure the database is accessible and running if using PostgreSQL or MySQL.

---

### 3. Install dependencies

We use [Bun](https://bun.sh/docs/installation) for fast JavaScript tooling.

```bash
cd frontend
bun install
```

---

### 4. Set up the Prisma database

⚠️ Make sure `.env` is properly configured **before** running these commands.

```bash
bun run prisma generate
bun run prisma db push
```

(Optionally) Open Prisma Studio to view the database:

```bash
bun run prisma studio
```

---

### 5. Run the development server

```bash
bun dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Configuration Examples - (JUST FOR MORE DETAILED INFORMATION)

### 🔐 Auth Settings (Required for All)

```env
# Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=REPLACE_WITH_SECURE_GENERATED_KEY
```

---

### 🛢 SQLite (Default for Development)

```env
# Database
DATABASE_URL="file:./prisma/dev.db"
```

- ✅ No changes needed in `schema.prisma`
- Prisma provider is already set to `"sqlite"` by default:
  ```prisma
  datasource db {
    provider = "sqlite"
    url      = env("DATABASE_URL")
  }
  ```

---

### 🛢 PostgreSQL

```env
# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

#### ➕ Required Update in `schema.prisma`:

Change the `provider` in the `datasource` block:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

---

### 🛢 MySQL

```env
# Database
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

#### ➕ Required Update in `schema.prisma`:

Change the `provider` in the `datasource` block:

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

---

### ✅ Reminder

After updating `.env` and `schema.prisma`:

1. Generate Prisma Client:
   ```bash
   bun run prisma generate
   ```

2. Push the schema to the selected database:
   ```bash
   bun run prisma db push
   ```

3. Optionally seed your database or open Prisma Studio:
   ```bash
   bun run prisma studio
   ```

---

## Authentication Flow

Powered by **NextAuth.js**:

- Email/password login
- JWT-based sessions
- Protected dashboard routes
- Password reset functionality

---

## Database

Managed with **Prisma ORM**.

Current model(s):
- `User`

Database options:
- SQLite (dev)
- PostgreSQL / MySQL (production-ready)

---

## Styling

- Tailwind CSS for utility-first styling
- Dark mode support
- Custom components via `shadcn/ui`
- Animations with Framer Motion

---

## API Routes

- `/api/auth/*` – Authentication

---

## Docker

### Start the app in Docker:

```bash
./tools/build.sh
./tools/up.sh
```

### Stop the app:

```bash
./tools/down.sh
```

Supports local and POC environments via `docker-compose`.

---

## Deployment

Deployed via **GitHub Actions** to an **AWS EC2 Docker container**.

For POC deployment, required GitHub secrets can be found in Bitwarden:
> Search for **"POC Deployment Git Hub Secrets"**

---

## Contributing

1. Fork the repository  
2. Create a new branch: `git checkout -b feature/your-feature-name`  
3. Commit changes: `git commit -m 'Your message'`  
4. Push to your branch: `git push origin feature/your-feature-name`  
5. Open a Pull Request  

---

## License

MIT License — see the `LICENSE` file for details.

---

## Acknowledgments

- [Next.js](https://nextjs.org/)  
- [NextAuth.js](https://next-auth.js.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Prisma](https://www.prisma.io/)  
- [Framer Motion](https://www.framer.com/motion/)  
