/*
Name: lightbox.js
Authors: Isabel S
Date: 11/11/15
Purpose: This is a javascript function that activates, populates, and deactivates
the lightbox.  This lightbox is used in the "Media" page to display photos
clicked on by the user.
*/

/* this function uses "this" to show the clicked on image in the lightbox */
function openLightboxImage() {
    var bigsrc = $(this).attr("data-bigsrc");
    var alt = $(this).attr("data-alt");
    $("#lightboxbig img")
        .attr("src",bigsrc)
        .attr("alt",alt);
    $("#lightboxbig").show();
}

$("#photos1 figure").click(openLightboxImage);

$("#photos2 figure").click(openLightboxImage);

/* this function uses the click handler to close the lightbox when the user
clicks on the photo again */
function closeLightboxImage() {
    $("#lightboxbig").hide();
}

$("#lightboxbig").click(closeLightboxImage);
