const mainImage = document.querySelector('.main-img');
const thumbnails = document.querySelectorAll('.side-bg img');
const imageSources = Array.from(thumbnails).map(img => img.getAttribute('src'));
let currentIndex = 0;


let autoSlide = setInterval(function () {
    currentIndex = (currentIndex + 1) % imageSources.length;
    mainImage.src = imageSources[currentIndex];

    thumbnails.forEach(function (thumb, i) {
        thumb.parentElement.classList.toggle('active', i === currentIndex);
    });
}, 3000);


thumbnails.forEach(function (thumb, index) {
    thumb.addEventListener('click', function () {
        mainImage.src = imageSources[index];
        currentIndex = index;

        thumbnails.forEach(function (t, i) {
            t.parentElement.classList.toggle('active', i === currentIndex);
        });

        clearInterval(autoSlide);
        autoSlide = setInterval(function () {
            currentIndex = (currentIndex + 1) % imageSources.length;
            mainImage.src = imageSources[currentIndex];

            thumbnails.forEach(function (thumb, i) {
                thumb.parentElement.classList.toggle('active', i === currentIndex);
            });
        }, 3000);
    });
});


document.querySelector('.left-arrow').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    mainImage.src = imageSources[currentIndex];

    thumbnails.forEach(function (thumb, i) {
        thumb.parentElement.classList.toggle('active', i === currentIndex);
    });

    clearInterval(autoSlide);
    autoSlide = setInterval(function () {
        currentIndex = (currentIndex + 1) % imageSources.length;
        mainImage.src = imageSources[currentIndex];

        thumbnails.forEach(function (thumb, i) {
            thumb.parentElement.classList.toggle('active', i === currentIndex);
        });
    }, 3000);
});

document.querySelector('.right-arrow').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % imageSources.length;
    mainImage.src = imageSources[currentIndex];

    thumbnails.forEach(function (thumb, i) {
        thumb.parentElement.classList.toggle('active', i === currentIndex);
    });

    clearInterval(autoSlide);
    autoSlide = setInterval(function () {
        currentIndex = (currentIndex + 1) % imageSources.length;
        mainImage.src = imageSources[currentIndex];

        thumbnails.forEach(function (thumb, i) {
            thumb.parentElement.classList.toggle('active', i === currentIndex);
        });
    }, 3000);
});
