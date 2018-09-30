const renderMenu = () => {
  const container = document.getElementById("content");
  const div = document.createElement("div");
  const menuTitle = document.createElement("h2");
  const menuList = document.createElement("ul");
  menuList.classList.add("menu-list");

  const recipes = ["soup","sandwich","salad","pasta","steak","desert"];
  const recipeImages = ["soup.jpeg","salad.jpeg","steak.jpeg","fish.jpeg","pancakes.jpeg","desert.jpeg"];

  menuTitle.innerHTML = "Menu"

  for(let i = 0; i < recipes.length; i++){
      let menuItem = document.createElement("li");
      menuItem.classList.add("menu-item");
//      menuItem.innerHTML = recipes[i];

      let menuImage = document.createElement("img");
      menuImage.src = recipeImages[i];
      menuItem.appendChild(menuImage);

      menuList.appendChild(menuItem);
  };

  div.appendChild(menuTitle);
  div.appendChild(menuList);
  div.classList.add("menu-container");
  container.appendChild(div);
};

export { renderMenu }
