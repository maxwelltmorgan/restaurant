const renderMenu = () => {
  const container = document.getElementById("content");
  const div = document.createElement("div");
  const menuTitle = document.createElement("h2");
  menuTitle.classList.add("menu-title");
  const menuList = document.createElement("ul");
  menuList.classList.add("menu-list");

  const recipes = ["soup","salad","steak","fish","pancakes","desert"];
  const recipeImages = ["soup.jpeg","salad.jpeg","steak.jpeg","fish.jpeg","pancakes.jpeg","desert.jpeg"];

  menuTitle.innerHTML = "Menu"

  for(let i = 0; i < recipes.length; i++){

      let menuItem = document.createElement("li");
      menuItem.classList.add("menu-item");

      let menuInner = document.createElement("div");
      menuInner.classList.add("menu-inner");

      let menuImage = document.createElement("img");
      menuImage.src = recipeImages[i];
      menuInner.appendChild(menuImage);

      let menuDescription = document.createElement("h4");
      menuDescription.innerHTML = recipes[i];
      menuInner.appendChild(menuDescription);

      menuItem.appendChild(menuInner);
      menuList.appendChild(menuItem);
  };

  div.appendChild(menuTitle);
  div.appendChild(menuList);
  div.classList.add("menu-container");
  container.appendChild(div);
};

export { renderMenu }
