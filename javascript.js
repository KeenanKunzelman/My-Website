

$(function() {

  var contactpos = $("#contact").offset();
  var portfoliopos = $("#portfolio").offset();
  var skillspos = $("#skills").offset();

function scroll(button, positon) {
  $(button).on("click", function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: positon}, 'swing');
  });
}

    scroll("#btn","0px");
    scroll("#btn2", contactpos.top - 56);
    scroll("#btn3",  portfoliopos.top - 56);
    scroll("#btn4", skillspos.top - 56)


});
