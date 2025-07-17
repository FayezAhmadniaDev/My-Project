let menu = document.getElementById("menu");
let menuItem = document.getElementById("menuItem");
let items = document.querySelectorAll(".items");
let changeIcon = document.querySelector(".menu i");

menu.addEventListener("click", function() {
    if (menuItem.classList.contains("show-menu")) {
        menuItem.classList.remove("show-menu");
        menuItem.classList.add("hide-menu");
    } else {
        menuItem.classList.remove("hide-menu");
        menuItem.classList.add("show-menu");
    }

    menu.classList.toggle("clicked-menu");

    if (changeIcon.classList.contains("fa-bars")) {
        changeIcon.classList.remove("fa-bars");
        changeIcon.classList.add("fa-times");
    } else {
        changeIcon.classList.remove("fa-times");
        changeIcon.classList.add("fa-bars");
    }
});
