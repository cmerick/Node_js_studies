<!-- command line para a imagem do postgres no docker -->


docker run --name postgres -e POSTGRES_USER=erickcastilho -e POSTGRES_PASSWORD=soldado01 -e POSTGRES_DB=herois -p 5432:5432 -d postgres

docker ps
docker exec -it postgres /bin/bash

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer


<!-- command line para imagem do mongodb no docker -->

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo:4

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb mongo --host localhost -u admin -p admin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'erickcastilho', pwd: 'soldado01', roles: [{role: 'readWrite', db: 'herois'}]})"