$( document ).ready(function() {
    getHeader();
});


function getHeader() {
    $.get( "/html/header.html", function( data ) {
        $( ".header" ).html( data );
    });
}
