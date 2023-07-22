// const init = function() {
//  document.documentElement.className = "dark";
// }
// 
// const changeTheme = function() {
//   const rootHTML = document.documentElement;
//   const newTheme = rootHTML.className === "dark" ? "light" : "dark";
//   rootHTML.className = newTheme;
// }
// 
// init();
// 
// const changeThemeButton = document.getElementById("icon--theme-switch");
// changeThemeButton.addEventListener("click", changeTheme);

const root = document.documentElement;
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  // dark mode
  root.className = 'dark';
}
else {
  root.className = 'light';
}

const setTheme = function() {
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
}

document.getElementById('icon--theme-switch').addEventListener('click', setTheme);
