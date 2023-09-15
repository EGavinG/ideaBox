//Variables & Data
var form = document.querySelector("form");
var saveButton = document.querySelector('.save-button');
var newIdeaTitle = document.querySelector('#idea-title');
var newIdeaBody = document.querySelector('#idea-body');
var cardField = document.querySelector('.card-field');

var ideas = [];

//Event Listeners

form.addEventListener("submit", displayIdea);
cardField.addEventListener('click', clickEvent);

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
    idea.favorite = 'false';
    idea.id = Date.now();
    ideas.push(idea);
    return idea;
}

function createIdeaCard(ideas) {
    cardField.innerHTML='';
    for(i = 0; i<ideas.length; i++) {
        cardField.innerHTML+=
        `<article class='card-instance' id=${ideas[i].id}>
            <header class='card-header'>
                <div class='button-field'>
                    <button class='fav-button' value=${ideas[i].favorite} ></button>
                    <button  class='delete-button' value=${ideas[i].id} ></button>
                </div>
            </header>
            <div class='card-text>
                <p>${ideas[i].title}</p>
                <p>${ideas[i].body}</p>
            </div>
        </article>`
    }
}

function clickEvent(e) {
    if(e.target.classList.contains('delete-button')) {
        deleteCard(e);
    }
    else if(e.target.classList.contains('fav-button')) {
        favoriteCard(e);
    }
}

function deleteCard(event) {
    for(i = 0; i<ideas.length; i++) {
        if(ideas[i].id.toString() === event.target.value) {
            ideas.splice(i, 1);
            createIdeaCard(ideas);
        }
    }
}

function favoriteCard(event) {
    if(event.target.value === 'true') {
        event.target.value = 'false';
        //change color to white
        return
    }
    {
        event.target.value = 'true';
        //change color orange
    }
}

function showFavoriteCards() {
    //iterate through ideas array. and use createCard function on 
    //only objects with favorite set to true.
}