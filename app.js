
// requiring dependancies
DotEnv = require('dotenv-node');
new DotEnv();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
// might want to use omeda api
const omedaApi = require('omeda-api-client')({
  brandKey: 'EPG Media Central Database', // your Omeda brand/db name
  clientKey: 'client_yourclient', // your Omeda client id
  appId: '1d381ff5-ba0b-47ce-8730-ce91b05f7b54', // your API app-id to access the brand
  inputId: 'XXXXXXX', // the API input-id to write data to the db
  useStaging: false, // default, switch to true to access the staging db
});
const brand = omedaApi.resources.brand;

// defining server side routes
const excel_export = require('./server/routes/excel-export.route.js');
const api = require('./server/routes/api.route.js');

// server back static files
app.use(express.static(path.join(__dirname, './public')));

// initializing body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// handles index file separately
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// omeda API call (need keys to un comment)
// brand.lookup().then().catch()


// server side routes
app.use('/excel_export', excel_export);
app.use('/api', api);



// port listening
app.listen(port, () => {
    console.log('Listening on port: ', port);
});
