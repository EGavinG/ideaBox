//Variables & Data
var form = document.querySelector("form");
var showFavoriteButton = document.querySelector(".starred-idea-button");
var saveButton = document.querySelector(".save-button");
var newIdeaTitle = document.querySelector("#idea-title");
var newIdeaBody = document.querySelector("#idea-body");
var cardField = document.querySelector(".card-field");

var ideas = [];
var showFavorite = false;
//Event Listeners

showFavoriteButton.addEventListener("click", toggleFavoriteCards);
form.addEventListener("submit", displayIdea);
cardField.addEventListener("click", clickEvent);

//Functions
function displayIdea(event) {
  var title = newIdeaTitle.value;
  var body = newIdeaBody.value;

  if (title !== "" && body !== "") {
    if (ideas.length >= 3) {
      alert(
        "You can only create a maximum of three cards. Please delete one before creating a new one."
      );
    } else {
      var tempIdea = createIdea(title, body);
      createIdeaCards(ideas);
    }
  } else {
    alert("Please enter both a title and a body for your idea.");
  }

  event.preventDefault();
}

function createIdea(title, body) {
  var idea = {};
  idea.title = title;
  idea.body = body;
  idea.favorite = false;
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
                      <button class='fav-button ${
                        ideas[i].favorite ? "active" : ""
                      }'>
                          <svg class='fav-icon' xmlns="http://www.w3.org/2000/svg" id=${i}>
                              <defs><style>.cls-1{fill:#fff;}</style></defs>
                          </svg>
                      </button>
                      <button class='delete-button'>
                          <svg class='delete-icon' xmlns="http://www.w3.org/2000/svg" id=${i}>
                              <defs><style>.cls-1{fill:#fff;}</style></defs>
                          </svg>
                      </button>
                  </div>
              </header>
              <div class='card-text'>
                  <p class= "idea-title">${ideas[i].title}</p>
                  <p class= "idea-body">${ideas[i].body}</p>
              </div>
          </article>`;
  return card;
}

function createFavoriteCards() {
  cardField.innerHTML = "";
  for (i = 0; i < ideas.length; i++) {
    console.log(ideas[i].favorite);
    if (ideas[i].favorite) {
      cardField.innerHTML += createIdeaCard(i);
    }
  }
}
function clickEvent(e) {
  if (e.target.classList.contains("delete-icon")) {
    deleteCard(e);
  } else if (e.target.classList.contains("fav-icon")) {
    favoriteCard(e);
  }
}

function deleteCard(event) {
  var position = event.target.id;
  ideas.splice(position, 1);
  createIdeaCards();
}

function favoriteCard(event) {
  var position = event.target.id;
  var favButton = event.target;

  if (ideas[position].favorite) {
    ideas[position].favorite = false;
    favButton.classList.remove("active");
    return;
  } else {
    ideas[position].favorite = true;
    favButton.classList.add("active");
  }
}

var showFavorite = false;
function toggleFavoriteCards() {
  showFavorite = !showFavorite;
  if (showFavorite) {
    createFavoriteCards();
    showFavoriteButton.textContent = "Show All Ideas";
  } else {
    createIdeaCards();
    showFavoriteButton.textContent = "Show Starred Ideas";
  }
}
