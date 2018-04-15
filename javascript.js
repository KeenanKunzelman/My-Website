

var size = $( window ).width();
var appendContent = (repos,row, index) => {
  $(`.projRow${row}`).append(`<div class="col-md-4 col-6 project">
    <h2 class="display-5 text-center"><a  class="text-info projecttitle" href="${repos[index].url}">${repos[index].name}</a></h2>
    <p class="lead text-center projdescription">${repos[index].description}</p>
  </div>`)
}

//ajax rexuest to grab name, desc, url, and language for a users repos
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
    //used to keep track of what row to append the columns to
    var currRow = 0;
    //helps decide how to display remaining repos if they are not divisible by 3
    var tailRepos = extractedRepos.length % 3;
    $("#portfolio").append(`<br><div class="projRow0 row"></div>`);
    var mode;
    if (size <= 900) {
      mode = "mobile"
    }else{
      mode = "desktop"
    }

    var appendRow = (mode, i, currRow) => {
      if (mode === "mobile") {
        if (i % 2 === 0) {
          currRow += 1;
          $("#portfolio").append(`<div class="projRow${currRow} row"></div>`)
        }
      }else if (mode === "desktop") {
        if (i % 3 === 0) {
          currRow += 1;
          $("#portfolio").append(`<div class="projRow${currRow} row"></div>`);
        }
      }
    }

    for (var i = 0; i < extractedRepos.length; i++) {
      appendRow(mode,i,currRow);

      if (i === extractedRepos.length - tailRepos) {
        if (tailRepos === 1) {
          $(`.projRow${currRow}`).append(`<div class="col-md-4 project"></div>`)
          appendContent(extractedRepos,currRow, i);
          $(`.projRow${currRow}`).append(`<div class="col-md-4 project"></div>`)
        }else if (tailRepos === 2) {
          $(`.projRow${currRow}`).append(`<div class="col-md-2 project"></div>`);
          appendContent(extractedRepos,currRow, i)
          appendContent(extractedRepos,currRow, (i + 1))
          $(`.projRow${currRow}`).append(`<div class="col-md-2 project"></div>`);
          break;
        }
      }else {
        appendContent(extractedRepos,currRow, i)
      }
      }
  })






$(function() {
  // var contactpos = $("#contact").offset();
  // var portfoliopos = $("#portfolio").offset();
  // var skillspos = $("#skills").offset();
  // var certpos = $("#certs").offset();


function scroll(button, destination) {
  $(button).on("click", function(e){
  e.preventDefault();
  $(window).scrollTo($(`#${destination}`),1000)
  });
}
    scroll("#btn","top");
    scroll("#btn2", "contact" );
    scroll("#btn3",  "port-sec" );
    scroll("#btn4", "skills" );
    scroll("#btn5", "certs" );
});
