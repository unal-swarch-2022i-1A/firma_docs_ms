# firma_docs_ms
```bash
docker rm -f docs_ms
docker build -t docs_ms .
docker run -it --name docs_ms -v $(pwd)/src:/usr/src/app/src -p 3000:3000 -d docs_ms 
```