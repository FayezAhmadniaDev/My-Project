const floatContainer = document.querySelector(".float-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const showContainer = document.getElementById("showContainer");
const slider = document.querySelector(".slider");

const showPhotos = ["img/ver1.webp", "img/ver3.webp", "img/ver2.webp"];
const sliderPhotos = ["img/3.webp", "img/2.webp", "img/1.webp"];
let currentIndex = 0;

const mainImage = document.createElement("img");
mainImage.src = showPhotos[currentIndex];
mainImage.className = "img-fluid rounded-4";
mainImage.style.opacity = "1";
showContainer.appendChild(mainImage);

function renderSliderImages() {
  slider.innerHTML = "";

  const ordered = sliderPhotos.map((src, i) => {
    const index = (currentIndex + i) % sliderPhotos.length;
    return { src: sliderPhotos[index], originalIndex: index };
  });

  ordered.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "col-auto";
    div.innerHTML = `<img src="${item.src}" alt="thumb-${i}" class="img-fluid rounded-4">`;

    setTimeout(() => div.classList.add("show"), i * 100);

    div.addEventListener("click", () => {
      if (currentIndex !== item.originalIndex) {
        currentIndex = item.originalIndex;
        updateMainImage();
        resetAutoSlide();
      }
    });

    slider.appendChild(div);
  });
}

function updateMainImage() {
  mainImage.style.opacity = "0";

  setTimeout(() => {
    mainImage.src = showPhotos[currentIndex];
    mainImage.style.opacity = "1";
    renderSliderImages();
  }, 600);
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % showPhotos.length;
  updateMainImage();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + showPhotos.length) % showPhotos.length;
  updateMainImage();
  resetAutoSlide();
});

let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % showPhotos.length;
  updateMainImage();
}, 3000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % showPhotos.length;
    updateMainImage();
  }, 3000);
}

renderSliderImages();

function positionFloatContainer() {
  const screenWidth = window.innerWidth;
  
    const shift = screenWidth * (-0.054);

    floatContainer.style.position = "absolute";
    floatContainer.style.bottom = "105px";
    floatContainer.style.left = "50%";
    floatContainer.style.transform = `translateX(calc(-50% + ${shift}px))`;
  
}
positionFloatContainer();
window.addEventListener("resize", positionFloatContainer);