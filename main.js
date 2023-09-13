//Variables & Data
var form = document.querySelector("form");
var saveButton = document.querySelector('.save-button');
var newIdeaTitle = document.querySelector('#idea-title');
var newIdeaBody = document.querySelector('#idea-body');
var cardField = document.querySelector('.card-field');


var ideas = [];


//Event Listeners

form.addEventListener("submit", displayIdea);



//Functions
function displayIdea(event) {
    var tempIdea = {}
    tempIdea = createIdea(newIdeaTitle.value, newIdeaBody.value);
    createIdeaCard(ideas);
    event.preventDefault();
}

function createIdea(title, body) {
    var idea = {}
    idea.title = title;
    idea.body = body;
    idea.id = Date.now();
    ideas.push(idea);
    return idea;
}

function createIdeaCard(ideas) {
    cardField.innerHTML='';
    for(i = 0; i<ideas.length; i++) {
        cardField.innerHTML+=`<article class='card-instance' id=${ideas[i].id}>
        <header class='card-header'>
          
          <button  class='delete-button' value=${ideas[i].id} ></button>
        </header>
        <p>${ideas[i].title}</p>
        <p>${ideas[i].body}</p>
        </article>`
    }
    var deleteButton = document.querySelector('.delete-button');
    var saveButton = document.querySelector('.save-button'); 
    deleteButton.addEventListener('click', deleteCard);
}

function deleteCard(value) {
    console.log('I run');
    console.log(value);
    for(i = 0; i<ideas.length; i++) {
        if(ideas[i].id == value) {
            ideas.splice(i, 1);
            console.log(ideas);
            creadIdeaCard(ideas);
        }
    }
}