const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const ngrok = require('ngrok');

const router = require('./routes/routes');
const port = process.env.port || 8092;
const url = 'mongodb://localhost:27017/ChartJS';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// let mainUrl = '';
app.use('/api/v1', router);
// (async function () {
//     mainUrl = await ngrok.connect(port);
//     console.log("mainUrl: ", mainUrl)
// })();
// console.log("mainUrl: ", mainUrl)
mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to Database!! ");
}).catch((err) => {
    console.log('Oops! Error occured', err);
})
app.listen(port, () => {
    console.log(`Server is starting at ${port}
    http://localhost:${port}/api/v1/index`);
})