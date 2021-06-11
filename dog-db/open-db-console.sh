#!/bin/sh
docker exec -it dog-db_mongo_1 \
mongo -u admin -p fullstack --authenticationDatabase admin breeddog