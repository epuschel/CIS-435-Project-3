let OutputSpan;     //Globally available to all functions

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
            OutputSpan.innerHTML = jsonObject.message;  //Set innerHTML of span to message sent in jsonObject
        });
}

function handleAddButton() {
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
            OutputSpan.innerHTML = jsonObject.message;
        });
}

function start() {
    const addButton = document.querySelector('#btn_add');
    const viewButton = document.querySelector('#btn_view');
    const editButton = document.querySelector('#btn_edit');
    const deleteButton = document.querySelector('#btn_delete');

    addButton.onClick = handleAddButton;
    viewButton.onClick = handleViewButton;
    //ATTENTION: Need to add onClick functions for the edit and delete buttons.
    //we also need submit button onlcik and intialization
}

window.onload= start;