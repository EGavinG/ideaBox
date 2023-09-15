//Variables & Data
var form = document.querySelector("form");
var showFavoriteButton = document.querySelector(".starred-idea-button");
var saveButton = document.querySelector(".save-button");
var newIdeaTitle = document.querySelector("#idea-title");
var newIdeaBody = document.querySelector("#idea-body");
var cardField = document.querySelector(".card-field");

var ideas = [];

//Event Listeners

showFavoriteButton.addEventListener("click", showFavoriteCards);
form.addEventListener("submit", displayIdea);
cardField.addEventListener("click", clickEvent);

//Functions
function displayIdea(event) {
  var tempIdea = {};
  tempIdea = createIdea(newIdeaTitle.value, newIdeaBody.value);
  createIdeaCards(ideas);
  event.preventDefault();
}

function createIdea(title, body) {
  var idea = {};
  idea.title = title;
  idea.body = body;
  idea.favorite = "false";
  idea.id = Date.now();
  ideas.push(idea);
  return idea;
}

function createIdeaCards() {
  cardField.innerHTML = "";
  for (i = 0; i < ideas.length; i++) {
    cardField.innerHTML += createIdeaCard(i);
  }
}

function createIdeaCard(i) {
  var card = `<article class='card-instance' id=${ideas[i].id}>
              <header class='card-header'>
                  <div class='button-field'>
                      <button class='fav-button' value=${ideas[i].favorite}>
                          <svg class='fav-icon' xmlns="http://www.w3.org/2000/svg" value= "fav-icon">
                              <defs><style>.cls-1{fill:#fff;}</style></defs>
                          </svg>
                      </button>
                      <button class='delete-button' data-id=${ideas[i].id}>
                          <svg class='delete-icon' xmlns="http://www.w3.org/2000/svg" value= "delete-icon">
                              <defs><style>.cls-1{fill:#fff;}</style></defs>
                          </svg>
                      </button>
                  </div>
              </header>
              <div class='card-text'>
                  <p>${ideas[i].title}</p>
                  <p>${ideas[i].body}</p>
              </div>
          </article>`;
  return card;
}
function createFavoriteCards() {
  cardField.innerHTML = "";
  for (i = 0; i < ideas.length; i++) {
    if (ideas[i].favorite === "true") createIdeaCard(i);
  }
}
function clickEvent(e) {
  console.log(e.target.value);
  if (e.target.classList.contains("delete-button")) {
    deleteCard(e);
  } else if (e.target.classList.contains("fav-button")) {
    favoriteCard(e);
  }
}

function deleteCard(event) {
  for (i = 0; i < ideas.length; i++) {
    if (ideas[i].id.toString() === event.target.value) {
      ideas.splice(i, 1);
      createIdeaCards();
    }
  }
}

function favoriteCard(event) {
  if (event.target.value === "true") {
    event.target.value = "false";
    //change color to white
    return;
  }
  {
    event.target.value = "true";
    //change color orange
  }
}

function showFavoriteCards() {
  createFavoriteCards();
}
