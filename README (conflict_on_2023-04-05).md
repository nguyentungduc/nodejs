# Final project nodejs



# Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/) >=v16
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone git@github.com:nguyentungduc/nodejs.git
```
- Install docker sync mount volume from host and container.
```
sudo gem install docker-sync
```
- Run docker sync start
```
docker-sync start
```
- Create folder save data mount with docker
```bash
# create the logs directory
mkdir -p nginx/logs
# change the permission to mount
sudo chown -R $(whoami) ./nginx/logs
```
- Create a .env file(if not) from the .env.example file
```
cp .env.example .env
```
- Build docker
```
docker-compose up --build
```
