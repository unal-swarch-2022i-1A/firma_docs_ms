# Docker

# Para correr con RUN
```bash
docker rm -f docs_ms
docker build -t docs_ms .
docker run -it --name docs_ms -v $(pwd)/src:/usr/src/app/src -p 8091:3000 -d docs_ms 
```
# Para correr con COMPOSE
```bash
docker-compose --project-name "firma" build
docker-compose --project-name "firma" up --detach
docker exec -it firma_storage_ms /bin/bash
```