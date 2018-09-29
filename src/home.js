const renderHome = () => {
  const container = document.getElementById("content");
  const div = document.createElement("div");
  const title = document.createElement("h1");
  const text = document.createElement("p");

  text.innerHTML = "Welcome to Fresh Plate: A place where hunger and healthy choices cooperate."
  title.innerHTML = "Eating well is your only option"

  div.appendChild(title);
  div.appendChild(text);
  div.classList.add("landing");
  container.appendChild(div);
};

export { renderHome }
