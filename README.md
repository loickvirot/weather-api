# Weather API

[![CI/CD](https://github.com/loickvirot/weather-api/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/loickvirot/weather-api/actions/workflows/ci-cd.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=loickvirot_weather-api&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=loickvirot_weather-api)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=loickvirot_weather-api&metric=coverage)](https://sonarcloud.io/summary/new_code?id=loickvirot_weather-api)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=loickvirot_weather-api&metric=bugs)](https://sonarcloud.io/summary/new_code?id=loickvirot_weather-api)

## Install

### Docker

You can use Docker to install and use application:

```bash
docker run \
  -p 3000:3000 \
  -e BASE_URL='http://localhost:3000' \
  -e WEATHERBIT_APIKEY='<Weatherbit API key>' \
  europe-west1-docker.pkg.dev/weather-api-437916/weather-api/weather-api:latest
```

## Develop

First of all, init project with Make:

```bash
make init
```

You can now launch docker containers with docker compose:

```bash
docker-compose up -d
```

Then, you can check the API works by going to https://localhost:3000

## Run node commands

To run node commands, you need to use the app container:

```bash
docker-compose run --rm app <my-command>

# example
docker-compose run --rm app npm install
```
