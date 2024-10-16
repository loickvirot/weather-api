WEATHERBIT_API_KEY ?= $(shell bash -c 'read -p "Weatherbit API KEY: " apikey; echo $$apikey')

dev@init:
	git config core.hooksPath .githooks

dotenv@init:
	cp .env.example .env
	echo WEATHERBIT_API_KEY=$(WEATHERBIT_API_KEY) >> .env

launch:
	docker-compose run --rm app npm install
	docker-compose run --rm front npm install
	docker-compose up -d 
