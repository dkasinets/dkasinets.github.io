$( document ).ready(function() {
    setLoader();
});


function setLoader() {
    $( window ).on("load", function() {
        // hide loader
        $(".loader_first").slideUp();
        setTimeout(() => {$(".loader_second").slideUp();}, 500);

        // make body scrollable
        $("body").css("overflow", "visible");
    });
}
