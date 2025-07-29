const leftContainer = document.querySelector(".left");
const rightContainer = document.querySelector(".right");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const logoIcon = document.querySelector(".fa-globe");
const menuIcon = document.querySelector(".fa-bars");
const dropdownMenu = document.getElementById("dropdownMenu");

function toggleClasses(elements, className) {
  elements.forEach(el => el.classList.toggle(className));
}

function addHoverToggle(element, toggleFunc) {
  element.addEventListener("mouseenter", toggleFunc);
  element.addEventListener("mouseleave", toggleFunc);
}

addHoverToggle(leftContainer, () => {
  toggleClasses([logo, logoIcon], "show");
  toggleClasses([logoIcon], "text-[3.5rem]");
});

addHoverToggle(rightContainer, () => {
  toggleClasses([menu, menuIcon], "show");
  toggleClasses([menuIcon], "text-[3.5rem]");
});

menuIcon.addEventListener("click", () => {
  dropdownMenu.classList.toggle("drop-show");
  rightContainer.classList.toggle("right");
  leftContainer.classList.toggle("left-width");

  const isMenu = menuIcon.classList.contains("fa-bars");

  menuIcon.classList.toggle("fa-bars", !isMenu);
  menuIcon.classList.toggle("fa-times", isMenu);
  menu.textContent = isMenu ? "Close" : "Menu";
});
