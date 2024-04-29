"use strict";

window.onload = init;


function init() {
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetUserBtnClicked;
    console.log('index.js init() executed');

}

function onGreetUserBtnClicked() {
    const nameField = document.getElementById("nameField");
    let name = nameField.value;

    alert('Hello ' + nameField.value);

    console.log('index.js init() executed');
    
}

