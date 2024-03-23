const express = require('express');
const path = require('path');
const envFile = require('dotenv');
const bodyParser = require('body-parser');

const router1 = require('./routes/rootRoute');
const router2 = require('./routes/userRoute');
const page404 = require('./controllers/404Controller');


const app = express()
envFile.config({ path: './config/.env' });


const publicPath = path.join(__dirname, 'public');
let port = process.env.port;


app.set('view engine', 'ejs');

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', router1);
app.use('/api', router2);
app.get('*', page404);

app.listen(port, (err) => {
    if (err) { console.log(err) }
    console.log(`server start at ${port}`);
});
