# Docker

## Development
Para correr con `Dockerfile.dev`:
```bash
docker rm -f firma_docs_dev
docker build -t firma_docs_dev . -f Dockerfile.dev
docker rm -f firma_docs_dev && \
docker run -it -d \
    --name firma_docs_dev \
    -v $(pwd):/usr/src/app \
    -p 8091:8091  \
    --add-host=host.docker.internal:host-gateway \
    firma_docs_dev \
    watch && \
docker logs --tail 1000 -f firma_docs_dev
docker exec -it firma_docs_dev /bin/bash
yarn run watch
```

Reiniciar servidor
```bash
docker exec -it firma_docs_dev /bin/bash
ps aux
ps aux | grep node
PID='PID del node app.js'
kill -2 $PID
```

## Production
Para correr con `Dockerfile`:
### Para correr con RUN
```bash
docker rm -f firma_docs_ms
docker build -t firma_docs_ms . -f Dockerfile
docker run -it -d \
    --name firma_docs_ms \
    -v $(pwd):/usr/src/app \
    -p 8091:8091  \
    --add-host=host.docker.internal:host-gateway \
    firma_docs_ms
docker exec -it firma_docs_ms /bin/bash
```
Comprobamos que desde el contenedor sea accesible el puerto  `27017` de `MongoDB` corriendo en el host ya sea local o desde otro contenedor:
```bash
sudo nsenter -t $(docker inspect -f '{{.State.Pid}}' firma_docs_ms) -n netstat -tulpn | grep 27017
```