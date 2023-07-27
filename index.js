let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
let slides = document.getElementsByClassName('Slider-child');
  console.log(slides)
function showSlides(n) {
  console.log('showslide')
  let i;

  
  if(n > slides.length){

    slideIndex = 1
  }

  if(n < 1){
    slideIndex = slides.length
  }

  for (i=0 ; i< slides.length ; i++){
    slides[i].style.display = 'block';
  }

  slides[slideIndex-1].style.display = 'flex';
}