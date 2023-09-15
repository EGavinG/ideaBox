//Variables & Data
var form = document.querySelector("form");
var saveButton = document.querySelector(".save-button");
var newIdeaTitle = document.querySelector("#idea-title");
var newIdeaBody = document.querySelector("#idea-body");
var cardField = document.querySelector(".card-field");

var ideas = [];

//Event Listeners

form.addEventListener("submit", displayIdea);
cardField.addEventListener("click", clickEvent);

//Functions
function displayIdea(event) {
  var tempIdea = {};
  tempIdea = createIdea(newIdeaTitle.value, newIdeaBody.value);
  createIdeaCard(ideas);
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

function createIdeaCard(ideas) {
  cardField.innerHTML = "";
  for (i = 0; i < ideas.length; i++) {
    cardField.innerHTML += `<article class='card-instance' id=${ideas[i].id}>
              <header class='card-header'>
                  <div class='button-field'>
                      <button class='fav-button' value=${ideas[i].favorite}>
                          <svg class='fav-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.06 15.65">
                              <defs><style>.cls-1{fill:#fff;}</style></defs>
                              <g id="background">
                                  <polygon class="cls-1" points="8.02 2.48 9.64 5.77 13.27 6.29 10.64 8.85 11.26 12.47 8.02 10.76 4.77 12.47 5.39 8.85 2.76 6.29 6.39 5.77 8.02 2.48"/>
                              </g>
                          </svg>
                      </button>
                      <button class='delete-button' data-id=${ideas[i].id}>
                          <svg class='delete-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.18 17.72">
                              <defs><style>.cls-1{fill:#fff;}</style></defs>
                              <g id="background">
                                  <polygon class="cls-1" points="13.13 5.87 12.43 5.16 8.97 8.61 5.53 5.16 4.82 5.87 8.27 9.32 4.82 12.77 5.53 13.48 8.97 10.03 12.43 13.48 13.13 12.77 9.68 9.32 13.13 5.87"/>
                              </g>
                          </svg>
                      </button>
                  </div>
              </header>
              <div class='card-text'>
                  <p>${ideas[i].title}</p>
                  <p>${ideas[i].body}</p>
              </div>
          </article>`;
  }
}

function clickEvent(e) {
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
      createIdeaCard(ideas);
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
  //iterate through ideas array. and use createCard function on
  //only objects with favorite set to true.
}
