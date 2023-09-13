//Variables & Data
var form = document.querySelector("form");
var saveButton = document.querySelector('.save-button');
var newIdeaTitle = document.querySelector('#idea-title');
var newIdeaBody = document.querySelector('#idea-body');

var ideas = [];


//Event Listeners

form.addEventListener("submit", displayIdea);

//Functions
function displayIdea(event) {
    var tempIdea = {}
    tempIdea = createIdea(newIdeaTitle.value, newIdeaBody.value);
    event.preventDefault();
}

function createIdea(title, body) {
    var idea = {}
    idea.title = title;
    idea.body = body;
    idea.id = Date.now();
    ideas.push(idea);
    console.log(idea);
    return idea;
}

function createIdeaCard(ideas) {

}

//Complete Card format
{/* <article>
<header>
  <button></button>
  <button></button>
</header>
<p>Title</p>
<p>Body</p>

</article> */}