$( document ).ready(function() {
    setLoader();
});


function setLoader() {
    $( window ).on("load", function() {
        // hide loaders
        $(".loader_first").slideUp();
        setTimeout(() => {$(".loader_second").slideUp(onLoaderAnimationFinished);}, 500);
    });
}


function onLoaderAnimationFinished() {
    // make body scrollable
    $("body").css("overflow", "visible");
    // hide loader overlay
    $(".loader_wrapper").css("display", "none");
}