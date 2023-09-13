//Variables & Data
var saveButton = document.querySelector('save-button');
var newIdeaTitle = document.querySelector('#idea-title');
var newIdeaBody = document.querySelector('#idea-body');

var ideas = []


//Event Listeners

saveButton.addEventListener('click', displayIdea)

//Functions

function createIdea(title, body) {
    var idea = {}
    idea.title = title.value;
    idea.body = body.value;
    idea.id = Date.now();
    ideas.push(idea);
}

function displayIdea(event) {
    var tempIdea = {}
    event.preventDefault();
    tempIdea = createIdea(newIdeaTitle.value, newIdeaBody.value);
}