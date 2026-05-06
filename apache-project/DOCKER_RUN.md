# Docker Task Setup (Apache + React)

This project now includes:

- Apache container (`httpd`) with bind-mounted local HTML
- React app container (`vite`) with bind-mounted source code
- Port mapping for both services
- Dockerfile-based builds

## Project Structure

- `docker-compose.yml`
- `apache/Dockerfile`
- `apache/site/index.html`
- `react-app/Dockerfile`
- `react-app/package.json`
- `react-app/src/*`

## How to Run This Project

1. Install Docker Desktop and make sure Docker is running.
2. Open terminal in `apache-project` folder.
3. Build and start both containers:

```bash
docker compose up --build
```

4. Open in browser:
   - Apache: `http://localhost:8080`
   - React: `http://localhost:5173`

5. To run in background:

```bash
docker compose up -d --build
```

## How You Can Work On It

### 1) Edit code locally

- Apache page file: `apache/site/index.html`
- React files: `react-app/src/*`

### 2) See changes in running containers

- Apache: refresh browser manually
- React (Vite): hot reload usually updates automatically

### 3) Restart if required

If dependency or Dockerfile changes are made:

```bash
docker compose up --build
```

## How Local Changes Persist

- Apache uses bind mount:
  - Local: `./apache/site`
  - Container: `/usr/local/apache2/htdocs`
- React uses bind mount:
  - Local: `./react-app`
  - Container: `/app`

This means your code stays on local machine and container reads from it.

## Verify Live Update

1. Edit `apache/site/index.html`
2. Refresh `http://localhost:8080`
3. Edit `react-app/src/App.jsx`
4. Refresh `http://localhost:5173` (or hot reload)

## Stop Containers

```bash
docker compose down
```

## Useful Commands

```bash
# Show running containers
docker compose ps

# View logs
docker compose logs -f

# Stop + remove containers
docker compose down

# Stop + remove containers, networks, and volumes
docker compose down -v
```

## Troubleshooting

- If ports are busy, change ports in `docker-compose.yml`.
- If Docker is not recognized, install/restart Docker Desktop.
- If React does not update, restart containers with `docker compose up --build`.
