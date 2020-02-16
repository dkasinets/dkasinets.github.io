$( document ).ready(function() { 

    setFooterCreatedBy();

});


function setFooterCreatedBy() {
    var date = new Date();
    var year = date.getFullYear();

    $(".footer_created_by").html("Design © Dzmitry Kasinets " + year);
}
