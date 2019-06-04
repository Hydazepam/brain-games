#Makefile

install:
	npm install

start:
	npx babel-node src/bin/brain-games.js
	npx babel-node src/bin/brain-even.js

publish:
	publish --dry-run

lint:
	npx eslint .