$(function() {
  

const games = [
  {
    title: "Super WOW V 2.0",
    link: "https://bcoan2.github.io/scaling-computing-machine-Charlie/", 
    author: "Brody Coan"
  },
  {
    title: "Can You Drag that Dog?",
    link: "https://kaibrysouthern.github.io/legendary-adventure-charlie/", 
    author: "Kaibry Southern"
  },
  {
    title: "Weston's Name Game",
    link: "https://westonhumphries.github.io/studious-carnival-delta/",
    author: "Weston Humphries"
    },
    {
title: "WooWop Game",
link: "https://jacksonthompson1.github.io/jt-lab-charlie/",
author: "Jackson Thompson"
},
{
  title: "Michael Jordan",
  link: "https://connorlbrown.github.io/bingbong-charlie/",
  author: "Connor Brown"
  },
  {
    title: "Move Spaghett (Got Ya)",
    link: "https://mithrandiryeet.github.io/charlie_spaghett_1/",
    author: "Will Wiggins"
    },
    {
      title: "You vs. Elon",
      link: "https://vikasnehra1.github.io/CharlieLab/",
      author: "Vikas Nehra"
      },
      {
        title: "Urban Giggle",
        link: "https://barrycumbie.github.io/urban-giggle/",
        author: "Amanna Waria"
        },
        {
          title: "Cookie Monster",
          link: "https://phenicieaaron.github.io/cookie-monster-charlie/",
          author: "Aaron Phenicie"
          },
          {
            title: "Name Facts",
            link: "https://anhnguyen148.github.io/echolab/pages/delta.html",
            author: "Anh Nguyen"
            },
            {
                title: "Stokeybear's Name Game",
                link: "https://stokeybear.github.io/DeltaLab/",
                author: "Anna Stokes"
                },
                {
                    title: "The Chess Puzzle",
                    link: "https://jconkle5.github.io/loose-juice-charlie/",
                    author: "Jason Conkle"
                    },
                    {
                        title: "Robert's Name Game",
                        link: "https://marcum-lab-delta.catharsis11867.repl.co",
                        author: "Robert Marcum"
                        }
];
// iterate over the JSON array
$.each(games, function (index, item) {
  console.log("Game Title: " + item.title);
  console.log("Game URL: " + item.link);
  console.log("Game Author: " + item.author);

  // create a brand new HTML element JUST with code

var el = `<div class='card text-center mx-auto bg-dark' style="width: 500px"> \
  <button class='cardOpen2 btn btn-outline-light'> ${ item.title } </button> \
   <div class='cardHide'> \
       <br> \
       <a href="${ item.link }" target="_blank" class="link-info" >CLICK HERE TO PLAY</a> \
       <p class="text-white">Created by: ${ item.author } </p> \
       <br> \
   </div>
 </div>`; 

 console.log(el); 


$('#firstCard').append(el);

$('.nav-dropdown').append($(`<li><a href="#!"> ${item.author} </a></li>`));

});


});
