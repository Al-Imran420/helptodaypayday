// JavaScript Document

//footer nav menu start
    // DOM ready
    $(function() {
    
    // Create the dropdown base
    $("<select />").appendTo("#fff");
    
    // Create default option "Menu"
    $("<option />", {
    "selected": "selected",
    "value"   : "",
    "text"    : "Menu"
    }).appendTo("#fff select");
    
    // Populate dropdown with menu items
    $("#fff a").each(function() {
    var el = $(this);
    $("<option />", {
    "value"   : el.attr("href"),
    "text"    : el.text()
    }).appendTo("#fff select");
    });
    
    $("#fff select").change(function() {
    window.location = $(this).find("option:selected").val();
    });
    
    });
//footer nav menu end
