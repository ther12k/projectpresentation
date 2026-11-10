# Deployment — pp.halotec.my.id

Verified working 2026-11-10.

## Target

| What | Value |
|---|---|
| Public URL | https://pp.halotec.my.id (also answers on halotec.my.id / www) |
| Server | halotec.my.id — 149.129.48.59 (SSH: `ssh rizky@halotec.my.id`, key `~/.ssh/id_rsa` on Rizky's laptop) |
| Runtime | Docker container `project-presentation`, port `8551 -> 80`, `--restart always`, no volumes |
| Image | `project-presentation:latest` — built **on the server** from this repo (Dockerfile: npm ci + vite build + nginx) |
| TLS | terminates upstream of port 8551; as long as 8551 serves, the public URL works |

Note: the Docker Hub image `ther12k/m2mhalotec` referenced by `docker-compose.yml` is **stale (2025-10) and unused** — real deploys build on the server.

## Steps

```bash
# 1. Sanity-check the build locally first
npm ci && npm run build

# 2. Ship source to the server
rsync -az --delete \
  --exclude node_modules --exclude .git --exclude dist \
  -e "ssh -i $HOME/.ssh/id_rsa -o IdentitiesOnly=yes" \
  ./ rizky@halotec.my.id:project-presentation/

# 3. Build the image on the server
#    (DOCKER_CONFIG workaround: ~/.docker/buildx is root-owned on the server)
ssh -i ~/.ssh/id_rsa -o IdentitiesOnly=yes rizky@halotec.my.id '
  mkdir -p ~/.docker-rizky &&
  cd ~/project-presentation &&
  DOCKER_CONFIG=~/.docker-rizky docker build -t project-presentation:latest .'

# 4. Swap the container (same name / port / restart policy)
ssh -i ~/.ssh/id_rsa -o IdentitiesOnly=yes rizky@halotec.my.id '
  docker stop project-presentation && docker rm project-presentation &&
  docker run -d --name project-presentation --restart always -p 8551:80 project-presentation:latest'

# 5. Verify
curl -s https://pp.halotec.my.id/ | grep -o 'assets/[^"]*'   # should show the fresh bundle hash
```

Vite content-hashes assets, so the bundle filename in the served `index.html` must match your local `dist/assets/` — if it does, the deploy is byte-identical to what you tested locally.

## Gotchas

- **Never** edit only the running container (`docker cp` etc.) — changes are lost on the next swap, and that is how the Sep 2026 UI update almost got lost (deployed from an uncommitted working tree, never pushed).
- Always commit + push **before or right after** deploying, so git matches production.
- On Rizky's laptop, `vite` is shadowed by a TeX binary — use `node_modules/.bin/vite` or `npm run build`.
