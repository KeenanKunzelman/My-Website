
$( document ).ready(function() {
  var extractedRepos = [];
  var url = 'https://api.github.com/users/KeenanKunzelman/repos';
  $.ajax({
    url
  }).done(function(data){
    for (var i = 0; i < data.length; i++) {
      extractedRepos.push({
        name: data[i].name,
        description: data[i].description,
        url: data[i].html_url,
        language: data[i].language
      });
    }
    var currRow = 0;
    var tailRepos = extractedRepos.length % 3;
    $("#portfolio").append(`<div class="projRow0 row"></div>`);
    for (var i = 0; i < extractedRepos.length; i++) {
      if ((i % 3) === 0) {
        currRow += 1;
        $("#portfolio").append(`<div class="projRow${currRow} row"></div>`)
      }
      if (i === extractedRepos.length - tailRepos) {
        if (tailRepos === 1) {
          $(`.projRow${currRow}`).append(`<div class="col-md-4 project"></div>`)

          $(`.projRow${currRow}`).append(`<div class="col-md-4 project">
            <h2 class="display-5 text-center"><a class="text-info" href="${extractedRepos[i].url}">${extractedRepos[i].name}</a></h2>
            <p class="lead text-center">${extractedRepos[i].description}</p>
          </div>`)
          $(`.projRow${currRow}`).append(`<div class="col-md-4 project"></div>`)
        }else if (tailRepos === 2) {
          $(`.projRow${currRow}`).append(`<div class="col-md-2 project"></div>`);
          $(`.projRow${currRow}`).append(`<div class="col-md-4 project">
            <h2 class="display-5 text-center"><a class="text-info" href="${extractedRepos[i].url}">${extractedRepos[i].name}</a></h2>
            <p class="lead text-center">${extractedRepos[i].description}</p>
          </div>`);
          $(`.projRow${currRow}`).append(`<div class="col-md-4 project">
            <h2 class="display-5 text-center"><a class="text-info" href="${extractedRepos[i + 1].url}">${extractedRepos[i + 1].name}</a></h2>
            <p class="lead text-center">${extractedRepos[i + 1].description}</p>
          </div>`);
          $(`.projRow${currRow}`).append(`<div class="col-md-2 project"></div>`);
          break;
        }
      }else {
        $(`.projRow${currRow}`).append(`<div class="col-md-4 project">
          <h2 class="display-5 text-center"><a class="text-info" href="${extractedRepos[i].url}">${extractedRepos[i].name}</a></h2>
          <p class="lead text-center">${extractedRepos[i].description}</p>
        </div>`)
      }
      }
  })
});

$(function() {
  var contactpos = $("#contact").offset();
  var portfoliopos = $("#portfolio").offset();
  var skillspos = $("#skills").offset();
  var certpos = $("#certs").offset();

function scroll(button, positon) {
  $(button).on("click", function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: positon}, 'swing');
  });
}
    scroll("#btn","0px");
    scroll("#btn2", contactpos.top - 59);
    scroll("#btn3",  portfoliopos.top - 59);
    scroll("#btn4", skillspos.top - 59);
    scroll("#btn5", certpos.top - 59);
});
