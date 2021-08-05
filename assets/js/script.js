$(document).ready(function() {
    $(".header_burger").click(function(event){
        $(".header_burger, .header_menu").toggleClass("active");  
        // $(".header").toggleClass("header_fixed");
        $("body").toggleClass("lock");
    });
});