'use strict';

// Call this function when the page loads (the "ready" event)
//$(document).ready(function() {
//    initializePage();
//})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // add any functionality and listeners you want here
    $(".testButton").click(function(e){
        gtag('event', 'click', {
            'event_category': 'testBtn',
            'event_label': 'user clicked tester',
            'value': 1
        });
        window.location.href="/routing/"+ document.getElementById('origin-input-path').value+"/"+document.getElementById('destination-input-path').value;
    });
}

function clearTextStart()  
{
    document.getElementById('origin-input').value = "";
}  

function clearTextDest()  
{
    document.getElementById('destination-input').value = "";
}  