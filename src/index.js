const logoBtn = document.querySelector(".logo");
const menuBar = document.querySelector(".menu-bar");
const altLogo = document.querySelector(".alt-logo");

logoBtn.addEventListener("click", function (e) {
  if (menuBar.classList.contains("hidden")) {
    menuBar.className = "menu-bar isOpen";
    altLogo.className = "alt-logo hidden";
  } else {
    menuBar.className = "menu-bar hidden";
    altLogo.className = "alt-logo logo-open";
  }
});

altLogo.addEventListener("click", function (e) {
  menuBar.className = "menu-bar isOpen";
  altLogo.className = "alt-logo hidden";
});
