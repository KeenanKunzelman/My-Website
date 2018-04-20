function checkDisplay(title, desc) {
  
  if ($("#actualskill").css('display') === 'none') {
    $("#actualskill").append(`<h1 class="display-4 text-info" >${title}</h1>`);
    $("#actualskill").append(`<p id="skillDesc" class="col-8 offset-2 lead" >${desc}</p>`);
    $("#actualskill").slideDown();
   
  }else{
  
    $("#actualskill").fadeOut("slow" ,function() {
      $("#actualskill").empty();
      $("#actualskill").append(`<h1 class="display-4 text-info" >${title}</h1>`);
      $("#actualskill").append(`<p id="skillDesc" class="col-8 offset-2 lead" >${desc}</p>`);
      $("#actualskill").fadeIn('slow');
    });
  
   
  }
}


$( document ).ready(function() {
  $(".fontawesomebtn").click(function(){
    checkDisplay("Font Awesome", "This site along with many others I have built are constructed using Boostrap 4 along with Font Awesome. I love developing with Bootstrap because of how easy it is to develop a completly responsive design.");
  });

  $(".pythonbtn").click(function(){
    checkDisplay("Python", "I began learning python back in 2016 and have built many projects since. One of my favorite Python programs I named class-cancelations. The program alerted me through text when I had a canceled class at school using data scraped from the university's website.");
  })

  $(".htmlbtn").click(function(){
    checkDisplay("HTML", "HTML along with COBOL are the first to 'programming' languages I was ever introduced then. As you may have guessed I haven't touched COBOL since the class I had to take on it, but I definetly use HTML on a daily basis to build websites and web apps.");
  })

  $(".jsbtn").click(function(){
    checkDisplay("JavaScript", "If i had to choose one language to be my favorite, hands down it would be JavaScript. I have been learning and applying JavaScript along with a few frameworks over the past few years. The language is so powerful in todays day in age and can truly do anything.");
  })

  $(".fccbtn").click(function(){
    checkDisplay("Free Code Camp", "This isn't exactly a skill but I have been diligently working towards completing Free Code Camps Front End Developer Certification. I am over 60% through the coursework and have learned alot about how to develop responsive web applications.");
  })

  $(".linuxbtn").click(function(){
    checkDisplay("Linux", "I have my amazing professor Stephen Legget to thank for introducing me to linux. I have gone From attending a basic Data Communications class with labs taught on Ubuntu to running a highly customized distrobution of Fedora linux as a daily computer. I love the open source community and all it has done for technology");
  })

  $(".githubbtn").click(function(){
    checkDisplay("Git Hub", "Shortly after begining my programming career I realized that I needed some sort of version control software to manage my projects. I soon after learned Git and began pushing all my code to GitHub. Although I have not really contributed to any open source projects I would really love to and plan to do so in the future.");
  })
  $(".nodebtn").click(function(){
    checkDisplay("node.js", "I use font awesome to make my website cool");
  })
  

  // $("#icon").click(function(){
  //   $("#actualskill").fadeOut()
  //   $("#actualskill").empty()
  //   $("#actualskill").append("<h1>title</h1>")
  //   $("#actualskill").append("<p>description</p>")
  //   $("#actualskill").fadeIn()
  // })
});


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
