$( ".loader_wrapper" ).ready(function() {
    getLoader();
});


$( window ).on("load", function() {
    $(".spinner").fadeOut("fast");
    $(".loader_wrapper").css("background-color", "transparent");
    // hide loaders
    $(".loader_first").slideUp(onFirstAnimationComplete);
});


function getLoader() {
    // TODO: To update Relative File Path later 
    $.get( "/html/loader.html", function( data ) {
        $( ".loader_wrapper" ).html( data );
    });
}


function onFirstAnimationComplete() {
    $(".loader_second").slideUp(onLoaderAnimationFinished);
}


function onLoaderAnimationFinished() {
    // make body scrollable
    $("body").css("overflow", "visible");
    // hide loader overlay
    $(".loader_wrapper").css("display", "none");
}