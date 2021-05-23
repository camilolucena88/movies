build:
	npm install

up:
	npm run start
	json-server --watch src/movie.mock-data.json --port 4000