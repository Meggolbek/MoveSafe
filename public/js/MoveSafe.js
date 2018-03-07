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
}