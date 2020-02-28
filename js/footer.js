$( document ).ready(function() { 

    getFooter();

});


function getFooter() {
    $.get( "/html/footer.html", function( data ) {
        $( ".footer" ).html( data );
        setFooterCreatedBy();
    });
}


function setFooterCreatedBy() {
    var date = new Date();
    var year = date.getFullYear();

    $(".footer_created_by").html("Design © Dzmitry Kasinets " + year);
}
