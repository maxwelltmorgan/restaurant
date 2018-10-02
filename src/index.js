import { renderHome } from './home'
import { renderContact } from './contact'
import { renderMenu } from './menu'

renderHome();

const resetContent = () => {
  const container = document.getElementById("content");
  const body = document.getElementsByTagName("body")[0]
  body.removeChild(container);
  const newContainer = document.createElement("div");
  newContainer.id = "content";
  body.appendChild(newContainer);
};

const tabHome = document.getElementById('home');
tabHome.addEventListener("click", function(event) {
    resetContent();
    renderHome();
});

const tabContact = document.getElementById('contact');
tabContact.addEventListener("click", function(event) {
    resetContent();
    renderContact();
});

const tabMenu = document.getElementById('menu');
tabMenu.addEventListener("click", function(event) {
    resetContent();
    renderMenu();
});
