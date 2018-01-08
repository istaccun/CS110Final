/*Name: dropDown.js
Authors: Isabel S and Christine T
Purpose: This is the JS for the dropdown menu that is attached to the code in menu.part.
The JS here hides all of the menus on load of the document and toggles them when hovered over.
Users will be able to click into different links once the menu drops down revealing the links from
this JS. 
Date: 11/11/15*/

$(document).ready(hideAll);

function toggleabout() {
    var child = $("#about ul");
    var display = child.css("display");
    if( display == "none" ) {
        child.show();
    } else {
        child.hide();
    }
}

$("#about").hover(toggleabout);

function togglefirstgen() {
    var child = $("#firstgen ul");
    var display = child.css("display");
    if( display == "none" ) {
        child.show();
    } else {
        child.hide();
    }
}

$("#firstgen").hover(togglefirstgen);

function toggleinvolved() {
    var child = $("#getinvolved ul");
    var display = child.css("display");
    if( display == "none" ) {
        child.show();
    } else {
        child.hide();
    }
}

$("#getinvolved").hover(toggleinvolved);

function toggleresources() {
    var child = $("#resources ul");
    var display = child.css("display");
    if( display == "none" ) {
        child.show();
    } else {
        child.hide();
    }
}

$("#resources").hover(toggleresources);

function hideAll() {
    console.log("hiding all submenus");
    $(".submenu").hide();
}
