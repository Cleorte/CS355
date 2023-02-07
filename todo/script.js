'use strict'

const mainDiv = document.getElementById("main");
const todoTextInput = document.getElementById("todoContent");
const todoAddButton = document.getElementById("todoButton");

function addClickableDiv(place){
    var d = document.createElement('div');
    mainDiv.appendChild(d);
    d.innerHTML = todoTextInput.value;
    d.addEventListener('click', function(){
        d.classList.add ( 'completed') ;
    });
    todoTextInput.value="";
}

todoAddButton.addEventListener('click', addClickableDiv);