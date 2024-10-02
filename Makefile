init:
	git config core.hooksPath .githooks
	docker-compose run --rm app npm install