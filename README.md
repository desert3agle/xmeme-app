# Xmeme


Xmeme is a simple MERN stack web-app. which lets users to post, edit, delete and scroll through alot of fun memes.



You can:
  - Put your name, meme caption and meme url and post it for everyone
  - Edit or Delete meme
  - Check swagger-ui API documentation 
  
### Public Deployment 

Frontend : [https://xmeme-app-hv.netlify.app]

Backend : [https://xmeme.harsh-vardhan.codes]


## Frontend 


### Tech

Xmeme frontend uses : 

* [ReactJS] - 	frontend framework
* [Bootstrap] - for css styling

### Installation

You'll need to have Node >= 8.10 and npm >= 5.6 on your machine. 

Install the dependencies  and start the server.

```sh
$ cd xmeme-frontend
$ npm install or yarn install
$ npm start or yarn start 
```
server will run on port : 3000

### Deployment

Sign up for Netlify and install Netlify CLI

```sh
$ npm run build

$ npm install netlify-cli -g
$ netlif login

$netlify deploy --dir=public --prod
```

## Backend 

### Tech

Xmeme backend uses : 

* [NodeJS] -  evented I/O for the backend
* [Express] - framework for backend
* [Mongoose] -ODM
* [MongoDB] - Database

### Installation

This project was setup in Node 12.xx so to install it:

```sh
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

To install and start mongodb locally:
```sh
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

For installing dependencies
```sh
$ cd xmeme-backend
$ npm install
$ npm start
```
environment variables (.env)

- server will run on port : 8081

- swagger-ui will run on port : 8080

- MongoDB LOCAL_URI: mongodb://localhost/&lt;DB-name&gt;

### Deployment

Backend is deployed on  AWS ubuntu 18.04 EC2 instance with 

 * [PM2] -  	process manger
 * [nginx] - 	web server and reverse proxy
 * [Let's Encrypt and Certbot] -  for HTTPS deployment
 * [name.com] - for domain name provider










