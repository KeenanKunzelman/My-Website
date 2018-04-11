
$(function() {
  $('body').scrollspy({ target: '#navbar-example' })
var contactpos = $("#contact").offset();
var portfoliopos = $("#portfolio").offset();
var skillspos = $("#skills").offset();

function scroll(button, positon) {
  
}



    $("#btn").on("click", function(e){
    e.preventDefault();
    $("html, body").animate({ scrollTop: "0px" }, 'swing');
    });

    $("#btn2").on("click", function(e){
    e.preventDefault();

    $("html, body").animate({ scrollTop: (portfoliopos.top - 56) } , 'swing');

    });
    $("#btn3").on("click", function(e){
    e.preventDefault();

    $("html, body").animate({ scrollTop: contactpos.top - 56 }, 'swing');

    });


});
