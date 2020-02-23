$( document ).ready(function() {
    addLoader();
});


function addLoader() {
    $( window ).on("load", function() {
        $(".loader_first").slideUp();
        setTimeout(() => {$(".loader_second").slideUp();}, 500);
    });
}
