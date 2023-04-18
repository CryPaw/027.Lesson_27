let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');

document.querySelector('.slider-next').addEventListener('click', function() {
 offset += 256;
 if (offset > 512) {
    offset = 512;
 }
 if (offset == 512) {
   sliderNext.style.opacity = 0;
 }
 if (offset > 255) {
    sliderPrev.style.opacity = 1;
 }
 if (offset == 0) {
    sliderPrev.style.opacity = 0;
 }
 sliderLine.style.left = -offset + 'px';
});


document.querySelector('.slider-prev').addEventListener('click', function() {
    offset -= 256;
    if (offset < 0) {
       offset = 0;
    }
    if (offset < 512) {
      sliderNext.style.opacity = 1;
    }
    if (offset == 0) {
      sliderPrev.style.opacity = 0;
   }
    sliderLine.style.left = -offset + 'px';
   });