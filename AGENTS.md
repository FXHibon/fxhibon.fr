# AI Agent Developer Handbook (`AGENTS.md`)

Welcome, AI Agent! This repository is designed to be highly agent-friendly. This document provides all the context, technical architecture, and operational guidelines you need to develop, build, and maintain this application effectively.

---

## 🛠 Tech Stack Overview

- **Frontend Core:** React 19 (Functional Components, Hooks)
- **Language:** TypeScript (Strict Mode)
- **Build System:** Vite 6
- **Styling:** Tailwind CSS v4 (using the `@tailwindcss/vite` compiler plugin)
- **Icons:** Lucide React (`lucide-react`)
- **Animations:** Motion (`motion`)
- **AI SDK:** `@google/genai` (V2.4+)
- **Production Web Server:** Nginx Alpine (configured as a lightweight SPA static server)
- **CI/CD:** GitHub Actions (for automated Docker builds and image publishing on tag releases)

---

## 📂 Repository Layout

```
.
├── .github/
│   └── workflows/
│       └── docker-publish.yml  # GitHub Actions CI/CD (triggers on v*.*.* tags)
├── src/
│   ├── components/            # Reusable React components
│   ├── App.tsx                # Main Application entry and UI logic
│   ├── main.tsx               # React DOM rendering
│   └── index.css              # Global styles & Tailwind imports
├── assets/                    # Static assets & images
├── .dockerignore              # Excludes files from Docker build context
├── .gitignore                 # Standard comprehensive Git ignore rules
├── Dockerfile                 # Multi-stage production build configuration
├── nginx.conf                 # Custom Nginx SPA configuration & caching
├── package.json               # Dependencies and npm scripts
├── tsconfig.json              # TypeScript compilation rules
├── vite.config.ts             # Vite configuration with Tailwind plugin
└── README.md                  # Human-facing project documentation
```

---

## ⚙️ Development Guidelines & Rules

### 1. Styling with Tailwind CSS v4
- **No Utility Redundancies:** Tailwind v4 is integrated directly through the Vite compiler (`@tailwindcss/vite`). Do not add `@tailwind base;` imports in arbitrary files; use the centralized `src/index.css`.
- **Responsive Design:** Always build mobile-first. Use `sm:`, `md:`, `lg:`, and `xl:` prefixes.
- **Modern CSS Features:** Utilize standard Tailwind CSS custom properties and variables where applicable.

### 2. TypeScript Best Practices
- **Strict Typing:** Avoid `any` at all costs. Write explicit interfaces for component props, state, and API payloads.
- **Imports:** Use paths alias mapping `@/` to reference the root workspace if needed (configured in `tsconfig.json` and `vite.config.ts`).

### 3. API Integrations (Gemini API)
- The application uses the new `@google/genai` SDK.
- Always retrieve the API key from environment variables. Do not hardcode the key.
- SDK instantiation should be clean and reusable.

---

## 🐳 Dockerization Details

To serve this full frontend application, we use a custom Nginx configuration wrapped in a multi-stage Docker build.

### 1. Multi-Stage Dockerfile (`Dockerfile`)
- **Stage 1 (Build):** Uses `node:20-alpine` to run `npm install` and `npm run build`. This generates static production files in the `/app/dist` folder.
- **Stage 2 (Serve):** Uses `nginx:alpine` for minimum image size. Copies the compiled assets into `/usr/share/nginx/html` and installs `nginx.conf`.

### 2. Custom Nginx Server (`nginx.conf`)
- **SPA Routing:** Configured to handle Single Page Application (SPA) client-side routing. Any direct request or page refresh fallback to `/index.html` via the `try_files` directive.
- **Caching Headers:** Static assets (`.css`, `.js`, images) are cached aggressively using:
  ```nginx
  expires 1M;
  add_header Cache-Control "public";
  ```

---

## 🚀 CI/CD & GitHub Actions

The workflow is located in [docker-publish.yml](file:///.github/workflows/docker-publish.yml).

- **Triggers:** On pushing tags matching the pattern `v*.*.*` (e.g. `git tag -a v1.0.0 -m "Release v1.0.0" && git push origin v1.0.0`).
- **Target Registry:** Docker Hub (`fxhibon/fxhibon.fr`).
- **Required Repository Secrets:**
  - `DOCKER_USERNAME`: Your Docker Hub username (`fxhibon`).
  - `DOCKER_PASSWORD`: Your Docker Hub Personal Access Token (PAT).
- **Caching:** Implements Actions Cache (`type=gha`) to drastically speed up image generation.

---

## 📋 Commands Quick Reference

| Command | Action | Description |
| :--- | :--- | :--- |
| `npm run dev` | Local Dev | Starts the Vite hot-reloading development server on port 3000 |
| `npm run build` | Compile | Compiles TypeScript and builds production assets into `dist/` |
| `npm run lint` | Type Check | Executes `tsc --noEmit` to verify type safety |
| `docker build -t fxhibon/fxhibon.fr:latest .` | Docker Build | Builds the local Docker image including Nginx server |
| `docker run -d -p 8080:80 fxhibon/fxhibon.fr:latest` | Docker Run | Runs the Docker container locally on port 8080 |
| `git tag -a v1.0.0 -m "v1.0.0"` | Create Tag | Creates a semver version release tag |
| `git push origin v1.0.0` | Push Tag | Pushes the tag and triggers the GitHub Action runner |

---

*Note: Please ensure you maintain the structural integrity of the project and preserve comments when performing code modifications.*
