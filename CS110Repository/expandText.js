/*Name: expandText.js
Authors: Christine T
Purpose: This javascript function uses "this" to detect a hover in the user's
mouse.  If the user is hovering over the link "JOIN", then the function
animates the text to widen.  When the user hovers away, the function animates
the text to close.
Date: 11/11/15*/

//inspired by code from stackoverflow

    var hover = true;

    function hoverOver(){
        $(this).stop().animate({letterSpacing:'10px'}, 1000);
    }
    //.stop is necessary to cancel out the animation that already occurs with the <a> tag
    //("JOIN" is a link)
    function hoverOut(){
        $(this).stop().animate({letterSpacing:'0px'}, 1000);
    }
    $("#join h1 a").hover(hoverOver, hoverOut);
