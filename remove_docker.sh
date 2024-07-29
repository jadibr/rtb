#!/usr/bin/env bash

docker compose down -v

docker image rm rtb-rtb-spa:latest
docker image rm rtb-rtb-api:latest