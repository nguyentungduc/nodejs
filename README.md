# Final project nodejs



# Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/) >=v16
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)
- Install [Rancher](https://github.com/rancher-sandbox/rancher-desktop/releases)
- Install [Colima](https://github.com/abiosoft/colima) (rancher or colima)


# Getting started
- Clone the repository
```
git clone git@github.com:nguyentungduc/nodejs.git
```
- Create link from file docker.sock in $HOME/.rd to /var/run/docker.sock. User can use socket Docker don't sudo.
```
sudo ln -s $HOME/.rd/docker.sock /var/run/docker.sock
```
- Install docker sync mount volume from host and container.
```
sudo gem install docker-sync
```
- Run docker sync stop and start
```
docker-sync restart
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
