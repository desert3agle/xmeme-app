# Xmeme


Xmeme is a simple MERN stack web-app. which lets users to post, edit, delete and scroll through alot of fun memes.

**Public Deployment - [Xmeme](https://xmeme-app-hv.netlify.app)** 

**API Documentation - [Docs](https://xmeme-app-hv.herokuapp.com/swagger-ui/)**


You can:
  - Put your name, meme caption and meme url and post it for everyone
  - Edit or Delete meme
  - Check swagger-ui for API documentation 
  
## Frontend 


### Tech


* [ReactJS](https://reactjs.org/docs/getting-started.html) - frontend framework
* [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - for css styling

### Local Run

You'll need to have Node >= 8.10 and npm >= 5.6 on your machine. 

Install dependencies 

```sh
$ cd xmeme-frontend
$ npm install
```

Set up environment variables 

```sh
$ cp .env.template .env.development
```

Provide correct values in .env.development and proceed with local run 

```sh
$ npm start
```


### Deployment

Similar to .env.development, create a .env.production file with necessary variables.

Make a production build of the Project 

```sh
$ npm run build
```

Sign up for Netlify and install Netlify CLI 

```sh
$ npm install netlify-cli -g
```

Login to Netlify and deploy 

```sh
$ netlif login
$ netlify deploy --dir=build --prod
```


## Backend 

### Tech


* [NodeJS](https://nodejs.org/en/docs/) -  evented I/O for the backend
* [Express](https://expressjs.com/) - framework for backend
* [Mongoose](https://mongoosejs.com/) - ODM
* [MongoDB](https://www.mongodb.com/) - Database
* [Swagger](https://swagger.io/) - API Documentation

### Local Run

Install dependencies 

```sh
$ cd xmeme-backend
$ npm install
```

Set up environment variables 

```sh
$ cp .env.template .env
```

Provide correct values in .env and proceed with local run 

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

#### AWS (ubuntu 18.04 EC2) Deployment

 * [PM2](https://www.npmjs.com/package/pm2) -  	process manger
 * [nginx](https://www.nginx.com/) - 	web server and reverse proxy
 * [UFW](https://en.wikipedia.org/wiki/Uncomplicated_Firewall) - 	firewall
 * [Let's Encrypt and Certbot](https://letsencrypt.org/) -  for HTTPS deployment
 * [name.com](https://name.com) - for domain name provider

Refer to [this](https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896) gist by [bradtraversy](https://github.com/bradtraversy) for elaborate aws/nginx/ssl deployment procedure.


#### Heroku Deployment

```sh
$ heroku login -i
$ heroku plugins:install heroku-builds
$ heroku builds:create -a <name_of_your_app>
```

## Authors

* **Harsh Vardhan** - *Initial work* - [desert3agle](https://github.com/desert3agle)







