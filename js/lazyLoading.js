document.addEventListener("DOMContentLoaded", function () {
  lazyLoadImages();
  lazyLoadBackgrounds();
});

function lazyLoadImages() {
  const lazyloadImages = document.querySelectorAll(".lazyImages");
  for (let i = 0; i < lazyloadImages.length; i++) {
    lazyloadImages[i].src = lazyloadImages[i].dataset.src;
    lazyloadImages[i].classList.remove(".lazyImages");
  }
}

function lazyLoadBackgrounds() {
  const lazyLoadBackgrounds = document.querySelectorAll(".lazyBackground");
  for (let i = 0; i < lazyLoadBackgrounds.length; i++) {
    lazyLoadBackgrounds[i].classList.remove("lazyBackground");
  }
}
