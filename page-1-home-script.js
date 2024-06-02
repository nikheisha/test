// The following slideshow banner code is sourced from Medium
// https://medium.com/illumination/how-to-build-a-slideshow-using-html-css-and-javascript-977ecbdbf48c

let slideIndex = 1;
showSlides(slideIndex);function plusSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function prevSlide() {
  plusSlide(-1);
}

function nextSlide() {
  plusSlide(1);
}