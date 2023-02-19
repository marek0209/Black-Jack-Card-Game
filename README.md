# Black Jack Card Game

##Run localy

In main app folder type this command:

`yarn`

`yarn dev`

## Run in docker

In main app folder type this command:

### `docker build -t black-jack-card-game  . `

This command building docker container

### `docker run -d --rm -p 5173:5173 --name black-jack-card-game black-jack-card-game`

This command running previously built container
