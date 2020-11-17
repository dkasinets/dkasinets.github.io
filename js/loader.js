
$( ".loader_wrapper" ).ready(function() {
    getLoader();
    getLoaderOnLoad();
    getLoaderOnBeforeunload();
});


function getLoaderOnBeforeunload() {
    $( window ).on('beforeunload', function(){
        console.log("beforeunload: " + Date.now() + " exists: " + $( ".spinner" ).length)
        $(".spinner").fadeOut("fast");
        $(".loader_wrapper").css("background-color", "transparent");
        // hide loaders
        $(".loader_first").slideUp(onFirstAnimationComplete);
    });
}


function getLoaderOnLoad() {
    $( window ).on("load", function() {
        console.log("load: " + Date.now() + " exists: " + $( ".spinner" ).length)
        $(".spinner").fadeOut("fast");
        $(".loader_wrapper").css("background-color", "transparent");
        // hide loaders
        $(".loader_first").slideUp(onFirstAnimationComplete);
    });
}


function getLoader() {
    console.log("getLoader: " + Date.now() + " Exists: " + $( ".loader_wrapper" ).length);

    $.get( "/html/loader.html")
    .done(function( data ) {
        $( ".loader_wrapper" ).html( data );
        // getLoaderOnLoad();
    })
    .fail(function( data ){
        onLoaderAnimationFinished();
    });
}


function onFirstAnimationComplete() {
    $(".loader_second").slideUp(onLoaderAnimationFinished);
}


function onLoaderAnimationFinished() {
    console.log("onLoaderAnimationFinished: " + Date.now() + " Exists: " + $( ".loader_wrapper" ).length);

    // make body scrollable
    $("body").css("overflow", "visible");
    // hide loader overlay
    $(".loader_wrapper").css("display", "none");
}