# Xmeme


Xmeme is a simple MERN stack web-app. which lets users to post, edit, delete and scroll through alot of fun memes.



You can:
  - Put your name, meme caption and meme url and post it for everyone
  - Edit or Delete meme
  - Check swagger-ui for API documentation 
  
### Public Deployment 

Frontend : [https://xmeme-app-hv.netlify.app]

Backend : [https://xmeme.harsh-vardhan.codes]


## Frontend 


### Tech

Xmeme frontend uses : 

* [ReactJS] - 	frontend framework
* [Bootstrap] - for css styling

### Local Run

You'll need to have Node >= 8.10 and npm >= 5.6 on your machine. 

Install dependencies :

```sh
$ cd xmeme-frontend
$ npm install
```

Set up environment variables :

```sh
$ cp .env.template .env.development
```

Provide correct values in .env.development and proceed with local run :

```sh
$ npm start
```


### Deployment

Similar to .env.development, create a .env.production file with necessary variables.

Make a production build of the Project :

```sh
$ npm run build
```

Sign up for Netlify and install Netlify CLI : 

```sh
$ npm install netlify-cli -g
```

Login to Netlify and deploy : 

```sh
$ netlif login
$ netlify deploy --dir=build --prod
```


## Backend 

### Tech

Xmeme backend uses : 

* [NodeJS] -  evented I/O for the backend
* [Express] - framework for backend
* [Mongoose] -ODM
* [MongoDB] - Database

### Local Run

Install dependencies :

```sh
$ cd xmeme-backend
$ npm install
```

Set up environment variables :

```sh
$ cp .env.template .env
```

Provide correct values in .env and proceed with local run :

```sh
$ npm start
```


Alternatively, you can install requirements and run through script

```sh
$ cd xmeme-backend
$ chmod +x install.sh
$ chmod +x server_run.sh
$ ./install.sh
$ ./server_run.sh

```


### Deployment

Backend is deployed on  AWS ubuntu 18.04 EC2 instance with 

 * [PM2] -  	process manger
 * [nginx] - 	web server and reverse proxy
 * [UFW] - 	firewall
 * [Let's Encrypt and Certbot] -  for HTTPS deployment
 * [name.com] - for domain name provider










