# 🌌 fxhibon.fr — Immersive Platform Engineer Portfolio

[![Vite](https://img.shields.io/badge/Vite-6.2.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Docker Hub](https://img.shields.io/badge/Docker-Hub-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/r/fxhibon/fxhibon.fr)
[![CI/CD Pipeline](https://img.shields.io/github/actions/workflow/status/fxhibon/fxhibon.fr/ci.yml?branch=master&style=for-the-badge&logo=github-actions&logoColor=white&label=Docker%20Release)](https://github.com/fxhibon/fxhibon.fr/actions)

An ultra-premium, interactive portfolio application built with a high-fidelity **cybernetic space UI** theme. Designed for platform engineers, SREs, and DevOps professionals to showcase high-speed infrastructure credentials, AI-driven integrations, and social pathways.

---

## ✨ Immersive UI Features

- 💫 **Lightspeed Cybernetic Background:** Active, flowing lightspeed trails capturing high-velocity network packet transfers.
- ⚡ **Neon Laser Vectors:** Dynamic glowing lines (`cyan-500` & `blue-500`) shooting across the deep `#020617` obsidian canvas.
- 🧊 **Glassmorphic Toolbar:** An ultra-blur (`backdrop-blur-2xl`) navigation bar with interactive, tactile hover micro-animations.
- 📊 **Autonomous Status Monitor:** High-fidelity terminal-style telemetry tracking system variables and SRE infrastructure integrity.

---

## 🛠 Tech Stack

- **Core & Runtime:** React 19, TypeScript, Vite 6, Node.js 20+
- **Styling & Motion:** Tailwind CSS v4, Motion (`framer-motion` API compatible), Lucide React Icons
- **Production Server:** Nginx Alpine (Custom Single Page App fallback routing)
- **CI/CD & DevOps:** GitHub Actions, Docker (Multi-stage builds)

---

## 🚀 Quick Start (Local Development)

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 20 or higher is recommended).

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy the template to create your local variables:
```bash
cp .env.example .env.local
```
Update `.env.local` with your target configurations (such as your `GEMINI_API_KEY` for Google AI features).

### 3. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🐳 Docker Deployment

The application includes a fully optimized multi-stage `Dockerfile` and a customized `nginx.conf` designed to serve the static frontend efficiently.

### How Nginx Serves the Frontend SPA
Standard React SPAs use client-side routers which break when a user refreshes or visits sub-pages directly (e.g. `/profile`). To fix this, our customized [nginx.conf](file:///nginx.conf) includes:
- **`try_files $uri $uri/ /index.html;`** - Instructs Nginx to route all static requests to `index.html` to allow client-side handling.
- **Aggressive Caching Rules:** Stylesheets, JS code, and static vector graphics are cached for up to **1 month** to deliver lightning-fast initial content paint times.

### 1. Build the Docker Image
```bash
docker build -t fxhibon/fxhibon.fr:latest .
```

### 2. Run the Container
```bash
docker run -d -p 8080:80 --name fxhibon-portfolio fxhibon/fxhibon.fr:latest
```
Visit the server at **[http://localhost:8080](http://localhost:8080)**.

---

## 🤖 CI/CD Pipeline (GitHub Actions)

We use GitHub Actions to automate release builds whenever a semantic tag is pushed to the repository.

### Release Workflow
When a tag matching the pattern **`v*.*.*`** (e.g., `v1.2.0`) is pushed, the [.github/workflows/ci.yml](file:///.github/workflows/ci.yml) workflow:
1. Clones the codebase.
2. Configures Docker Buildx.
3. Authenticates with your Docker Hub registry.
4. Generates standard Docker tags (e.g., `fxhibon/fxhibon.fr:1.2.0`, `fxhibon/fxhibon.fr:1.2`, `fxhibon/fxhibon.fr:latest`).
5. Builds and publishes the compiled image.

### Triggering a Release
To release a new version of your portfolio, run:
```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### Secrets Configuration
To enable the pipeline, configure the following secrets in your GitHub repository (**Settings > Secrets and variables > Actions**):

| Secret Name | Description |
| :--- | :--- |
| `DOCKER_USERNAME` | Your Docker Hub Account username (e.g., `fxhibon`) |
| `DOCKER_PASSWORD` | Your Docker Hub Personal Access Token (PAT) with write/push permissions |

---

## 🤖 AI Agent Guidelines
Are you an AI Coding Assistant working on this repo? Please read the **[AGENTS.md](file:///AGENTS.md)** handbook first for complete architecture mappings, styling rules, and guidelines.
