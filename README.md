# Weather API

[![CI/CD](https://github.com/loickvirot/weather-api/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/loickvirot/weather-api/actions/workflows/ci-cd.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=loickvirot_weather-api&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=loickvirot_weather-api)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=loickvirot_weather-api&metric=coverage)](https://sonarcloud.io/summary/new_code?id=loickvirot_weather-api)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=loickvirot_weather-api&metric=bugs)](https://sonarcloud.io/summary/new_code?id=loickvirot_weather-api)

## Features

This app contains and API and a front UI page to obtain weather data:

- Current weather
- 7 Day forecast evolution

## Environments

### Local

- [Front](http://localhost:3001)
- [API Doc](http://localhost:3000/api-docs)

### Staging

- [Front](https://weather-front-staging-951054010171.europe-west1.run.app)
- [API Doc](https://weather-api-staging-951054010171.europe-west1.run.app/api-docs)

### Prod

- [Front](https://weather-front-951054010171.europe-west1.run.app)
- [API Doc](https://weather-api-951054010171.europe-west1.run.app/api-docs)

## Install

You can use make command to initalize and install this app in local (You need to have docker and docker-compose installed) :

```bash
make dotenv@init # Will ask for Weatherbit API Key
make launch
```

## Develop

First of all, initialize development features project with Make:

```bash
make init
```

You can now launch docker containers:

```bash
make launch
```

## Run node commands

To run node commands, you need to use the app container:

```bash
docker-compose run --rm <container_name> <my-command>

# example
docker-compose run --rm app npm install
```
