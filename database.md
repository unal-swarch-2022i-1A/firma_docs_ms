# Database

## Development environment

### Sketch launch
```bash
docker pull mongo
docker run --name my_mongo -d -p 127.0.0.1:27017:27017 mongo
```
### Persistent launch


## Production environment
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/5.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo systemctl start mongod
```