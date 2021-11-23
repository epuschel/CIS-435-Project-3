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
const app = express();              //Get an express object
const cors = require('cors');       //Avoid taht nasty CORS error
const bodyParser = require('body-parser');
const fs = require("fs").promises;

const portNum = 3000;

//Take care of CORS situation
app.use(cors({origin: '*'}));

//Allow body parsing
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
    res.send(JSON.stringify({
                                message : 'Username : ' + req.query.user_name + ' ' + req.query.note
                        }));
                        
    //Read the filename (username.txt) and see if it exists in the Notes folder
    fs.readFile(`G:/VSCode/CIS 435 Project 3/CIS 435 Project 3/Notes/${user_name}.txt`, function (err, html) {
        //If the note does not exist, create one
        if (err) {
            fs.writeFile(`G:/VSCode/CIS 435 Project 3/CIS 435 Project 3/Notes/${user_name}.txt`, note, err => {
                if (!err) {
                    return res.send("Note successfully created!");
                }
            });
        }
    });
});

app.post('/add-note', (req, res) => {
    console.log('\n\nON THE SERVER');
    console.log('writing to file: ' + req.body.userName + ' ' + req.body.uNote);
    console.log('sending response to client from /add-note ...');
    fs.writeFile(``)
    res.send(JSON.stringify({message: 'Successfully wrote to file'}));
});

//Make server listen on a port
app.listen(portNum, () => {
    console.log(`listening on port ${portNum}`);
});