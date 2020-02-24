$( document ).ready(function() {
    getHeader();
});


function getHeader() {
    // TODO: To update Relative File Path later 
    $.get( "/personal-website-v2/html/header.html", function( data ) {
        $( ".header" ).html( data );
    });
}
