setLoader();


function setLoader() {
    $( window ).on("load", function() {
        // hide loaders
        $(".loader_first").slideUp(onFirstAnimationComplete);
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