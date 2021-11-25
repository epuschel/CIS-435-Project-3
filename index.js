/*
Make sure to run on terminal:
    npm i express
    npm i cors
    npm i body-parser (optional)
    
    make sure to also do 
    npm i http-server -g (to install server globally)
otherwise these modules won't work!
*/
"use strict";
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require("fs");

const portNum = 3000;

app.use(cors({origin: '*'}));

app.use(express.json());

/*
2nd argument is a callback function.
This is the function that will be called when there's an 
HTTP GET request for this endpoint
*/
app.get('/', (req, res) => {
    console.log('\n\nON THE SERVER');
    console.log('Received from client: ' + req.query.user_name + ' ' + req.query.note);
    
    console.log('Sending response to the client from / ...');
    res.send(JSON.stringify({message : 'Username : ' + req.query.user_name + ' ' + req.query.note}));
    
    fpath = `./${req.query.first_name}.txt`;
    console.log(fpath);
    fs.readFile(fpath, 'utf8', (err, content) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(content);
        console.log("I read the file");
    })
});

app.post('/add-note', (req, res) => {
    console.log('\n\nON THE SERVER');
    console.log('writing to file: ' + req.body.userName + ' ' + req.body.uNote);
    console.log('sending response to client from /add-note ...');
    res.send(JSON.stringify({message: 'Successfully wrote to file'}));
    
    const fpath = `./${req.body.userName}.txt`;
    const content = uNote;
    fs.writeFile(fpath, content, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(fpath + " written successfully!");
    })
});

//Make server listen on a port
app.listen(portNum, () => {
    console.log(`listening on port ${portNum}`);
});

