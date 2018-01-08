/*Name: imageGallery.js
Authors: Christine T
Purpose: The purpsoe of this JS is to have a clickable gallery on the homepage.
using ths gallery we are able to display 4 different pictures and users are able to click
into images that will display in the larger image on left. 
Date: Nov 2015*/

//Event Handler that will be attached to each thumbnail on the homepage- it should cause the larger image to be dispaleyd in the figure
function enlargeGalleryClick(){
    var bigsrc=$(this).attr('data-bigsrc');
    $('#large img').attr('src', bigsrc);
}
//Attach the eventhandler to each thumbnail in the gallery
$('#gallery img').click(enlargeGalleryClick);
