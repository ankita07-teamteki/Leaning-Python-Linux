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

## Run Steps

1. Install Docker Desktop and start it.
2. Open terminal at project root.
3. Run:

```bash
docker compose up --build
```

## Access URLs

- Apache: `http://localhost:8080`
- React: `http://localhost:5173`

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
