const supportBtn = document.getElementById("support-btn");
const supportButtonContainer = document.getElementById("support-button-container");
const supportMenu = document.getElementById("support-menu");
const closeBtn = document.getElementById("close-btn");
const supportHeader = document.getElementById("support-header");
const supportItems = document.querySelectorAll(".support-item");
const supportCircleButtons = document.querySelectorAll(".support-circle-btn");

function animateElementsIn() {
  supportMenu.classList.remove("opacity-0", "pointer-events-none");
  supportMenu.classList.add("opacity-100");

  supportHeader.classList.remove("opacity-0");
  supportHeader.classList.add("fade-slide-in");

  supportItems.forEach((el, i) => {
    el.classList.remove("opacity-0");
    el.style.animationDelay = `${i * 150}ms`;
    el.classList.add("fade-slide-in");
  });
}

function animateElementsOut(callback) {
  supportHeader.classList.remove("fade-slide-in");
  supportHeader.classList.add("fade-slide-out");

  supportItems.forEach((el, i) => {
    el.classList.remove("fade-slide-in");
    el.style.animationDelay = `${(supportItems.length - 1 - i) * 150}ms`;
    el.classList.add("fade-slide-out");
  });

  const totalDuration = 300 + (supportItems.length - 1) * 150;
  setTimeout(() => {
    supportHeader.classList.remove("fade-slide-out");
    supportHeader.classList.add("opacity-0");

    supportItems.forEach((el) => {
      el.classList.remove("fade-slide-out");
      el.classList.add("opacity-0");
    });

    supportMenu.classList.remove("opacity-100");
    supportMenu.classList.add("opacity-0", "pointer-events-none");

    callback();
  }, totalDuration);
}

supportBtn.addEventListener("click", () => {
  supportButtonContainer.style.display = "none";
  supportBtn.style.transform = "scale(0.5)";

  animateElementsIn();
});

closeBtn.addEventListener("click", () => {
  animateElementsOut(() => {
    supportButtonContainer.style.display = "flex";
    supportButtonContainer.classList.remove("show");

    setTimeout(() => {
      supportBtn.style.transform = "scale(1)";
      supportBtn.style.transition = "transform 0.3s ease-out";
    }, 50);
  });
});

supportCircleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    supportCircleButtons.forEach((b) => {
      b.classList.remove("active");
    });
    btn.classList.add("active");
  });
});