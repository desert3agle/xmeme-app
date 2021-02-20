const express = require('express');
const mongoose = require("mongoose");
const app = express();
const memesRoute = require('./routes/memes');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//swagger
const swaggerApp = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

//Defaults as per project requirements

const swaggerPort = process.env.SWAGGER_PORT || 8080;
const PORT = process.env.PORT || 8081;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/xmemedatabase";


//middleweres******************/

//swagger middlewere
swaggerApp.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//cors
app.use(cors());

//bodyparser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//routes
app.use('/memes', memesRoute);

//***********************************/

//server home
app.get('/', (req, res) => {
    res.send('server is up and running');
})

//-------------------------------

//DB Connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB is connected');
});

//swagger port deployment
swaggerApp.listen(swaggerPort, () => {
    console.log(`swagger is running on port ${swaggerPort}`);
})

//server port deployment
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});



