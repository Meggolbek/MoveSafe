$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // add any functionality and listeners you want here
    console.log("here1");
    $(".testButton").click(function(e){
        e.preventDefault();
        console.log("here2");
        gtag('event', 'click', {
            'event_category': 'testBtn',
            'event_label': 'user clicked tester',
            'value': 1
        });
    });
}
