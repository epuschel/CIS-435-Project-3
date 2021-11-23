let outputSpan;     //Globally available to all functions


function handleViewButton() {
    const userName = document.querySelector('#user_name').value;
    const uNote = document.querySelector('#note').value;

    const url = "http://localhost:3000";
    const params = `?user_name=${userName}&user_note=${uNote}`;

    const fetchObject = {
        method: 'GET',
        headers: {
            'Content-Type' : 'text/html'
        }
    };

    //Perform fetch on URL with parameters (query string on GET)
    fetch(url + params, fetchObject)
        .then(response => response.json())              //Obtain JSON object sent from server
        .then(jsonObject => {                           //User jsonObject & get its message properly
            console.log(jsonObject.message);
            outputSpan.innerHTML = jsonObject.message;  //Set innerHTML of span to message sent in jsonObject
        });
}

function handleAddButton() {
    console.log("add button clicked");
    const userName = document.querySelector('#user_name').value;
    const uNote = document.querySelector('#note').value;

    const url = "http://localhost:3000/add-name";

    const dataObject = { 
        userName: userName, 
        uNote: uNote 
    };

    const fetchObject = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataObject)
    };

    fetch(url, fetchObject)
        .then(response => response.json())
        .then(jsonObject => {
            outputSpan.innerHTML = jsonObject.message;
            console.log(jsonObject.message);
        });
}

function start() {
    console.log("server started");
    const addButton = document.querySelector('#btn_add');
    const viewButton = document.querySelector('#btn_view');
    
    const editButton = document.querySelector('#btn_edit');
    const deleteButton = document.querySelector('#btn_delete');
    //const submitButton = document.querySelector('#btn_submit');

    addButton.onClick = handleAddButton();
    viewButton.onClick = handleViewButton();
    //ATTENTION: Need to add onClick functions for the edit and delete buttons.
    //we also need submit button onclick and intialization

    outputSpan = document.querySelector('#output');
}

window.onload= start();