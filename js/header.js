$( document ).ready(function() {
    getHeader();
});


function getHeader() {
    // TODO: To update Relative File Path later 
    $.get( "/html/header.html", function( data ) {
        $( ".header" ).html( data );
    });
}
