'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
   initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // add any functionality and listeners you want here
    setTimeout(function () {
        var viewheight = $(window).height();
        var viewwidth = $(window).width();
        var viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
    }, 300);
    console.log("here1");
}

function clearTextStart()  
{
    document.getElementById('origin-input').value = "";
}  

function clearTextDest()  
{
    document.getElementById('destination-input').value = "";
}  