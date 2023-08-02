


// setInterval(function() {prev()}, 6000);
// setInterval(function() {next()}, 3000);



var carousel = document.querySelector('.carousel')
var firstImageCard = document.querySelectorAll('.Image-Card')[0]
var ImageCard = document.querySelectorAll('.Image-Card')
const prev = () => carousel.scrollLeft -= firstImageCard.clientWidth + 28

const firstItem = carousel.children[0];
const clonedFirstItem = firstItem.cloneNode(true);
console.log(clonedFirstItem);
carousel.appendChild(clonedFirstItem);

console.log(ImageCard.length)
const next = () => {
   
   
    while(ImageCard.length <= 4 ){
        carousel.scrollLeft += firstImageCard.clientWidth + 28 

    }

    const firstItem = carouselSlide.children[0];
    const clonedFirstItem = firstItem.cloneNode(true);
    carousel.appendChild(clonedFirstItem);
    carousel.removeChild(firstItem);
    
}
  

