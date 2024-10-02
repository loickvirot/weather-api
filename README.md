# NodeJS Boilerplate

A template to create APIs with NodeJS.

## Tools

- Express API
- Linter / Prettier
- Unit tests
- Githooks
- Github CI/CD

## Install

First of all, init project with Make:

```bash
make init
```

You can now launch docker containers:

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
