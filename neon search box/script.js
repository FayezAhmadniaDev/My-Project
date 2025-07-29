const leftContainer = document.querySelector(".left");
const rightContainer = document.querySelector(".right");
const centerContainer = document.querySelector(".center");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const logoIcon = document.querySelector(".fa-globe");
const menuIcon = document.querySelector(".fa-bars");
const dropdownMenu = document.getElementById("dropdownMenu");

let showLeftContainerTitle = function () {
  logo.classList.toggle("show");
  logoIcon.classList.toggle("text-[3.5rem]");
};

let showRightContainerTitle = function () {
  menu.classList.toggle("show");
  menuIcon.classList.toggle("text-[3.5rem]");
};

leftContainer.addEventListener("mouseenter", showLeftContainerTitle);
leftContainer.addEventListener("mouseleave", showLeftContainerTitle);
rightContainer.addEventListener("mouseenter", showRightContainerTitle);
rightContainer.addEventListener("mouseleave", showRightContainerTitle);

menuIcon.addEventListener("click", () => {
  dropdownMenu.classList.toggle("drop-show");
  rightContainer.classList.toggle("right")
  leftContainer.classList.toggle(".left-width")
  if (menuIcon.classList.contains("fa-bars")) {
      menuIcon.classList.remove("fa-bars")
     menuIcon.classList.add("fa-times")
     menu.textContent = "Close"
    }else {
        menuIcon.classList.remove("fa-times")
        menuIcon.classList.add("fa-bars")
        menu.textContent = "Menu"
  }
});
