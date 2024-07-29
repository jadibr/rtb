#!/usr/bin/env bash

docker compose exec rtb-db sh -c "mongosh -u admin -p Jqwt9aQUANSRmW7hx8gT62 --eval \"db.getSiblingDB('rtb').createUser({user:'rtb-api',pwd:'h1b5tCiITpu2knqc8Lm7vo',roles:[{role:'readWrite',db:'rtb'}]})\""
docker compose restart rtb-api