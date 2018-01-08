/*
Name: imageCarousel.js
Authors: Isabel S
Date: 11/11/15
Purpose: This is a javascript function that displays and automatically
rotates the slide images defined in the "slides" array below.  This function is
used to make the image carousel for the splashpage.  It requires no user
interaction.
*/

/* this array defines the images we want in the image carousel */
var slides = ['images/graduation.jpg',
              'images/hugs.jpg',
              'images/pinning.jpg'];

var currentSlideIndex = 0;

/* this function displays the current slide */
function displaySlide() {
    var file = slides[currentSlideIndex];
    $("#carousel img").attr("src",file);
}

/* this function displays the next slide and cycles back to the first when it
reaches the last*/
function nextSlide() {
    currentSlideIndex++;
    if(currentSlideIndex >= 3) {
        currentSlideIndex = 0;
    }
    displaySlide();
}

/* this function invokes the nextSlide function at a rate of once per second
automatically */
setInterval(nextSlide, 2000);
