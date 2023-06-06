const init = function() {
 document.documentElement.className = "dark";
}

const changeTheme = function() {
  const rootHTML = document.documentElement;
  const newTheme = rootHTML.className === "dark" ? "light" : "dark";
  rootHTML.className = newTheme;
}

init();

const changeThemeButton = document.getElementById("change-theme");
changeThemeButton.addEventListener("click", changeTheme);
