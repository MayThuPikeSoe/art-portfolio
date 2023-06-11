// sticky bar

$(document).ready(function(){
    $(".secrow").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky-nav")
        }
        else{
            $("nav").removeClass("sticky-nav")
        }
    }),{
        offset:'25%'
    }
})

$(document).ready(function(){
    $(".secrow").waypoint(function(direction){
        if(direction=="down"){
            $(".arrow").addClass("arrow-levelup")
        }
        else{
            $(".arrow").removeClass("arrow-levelup")
        }
    }),{
        offset:'25%'
    }
})


function all(){
    document.querySelector("#imgid").src = "i1.webp";
    document.querySelector("#imgid1").src = "i2.webp"
    document.querySelector("#imgid2").src = "i3.webp";
    document.querySelector("#imgid3").src = "i5.webp"
    document.querySelector("#imgid4").src = "i6.webp";
    document.querySelector("#imgid5").src = "i4.webp"

  }

function brand(){
    document.querySelector("#imgid").src = "i5.webp";
    document.querySelector("#imgid1").src = "i3.webp"
    document.querySelector("#imgid2").src = "i4.webp";
    document.querySelector("#imgid3").src = "i2.webp"
    document.querySelector("#imgid4").src = "i6.webp";
    document.querySelector("#imgid5").src = "i1.webp"

  }
  function logo(){
    document.querySelector("#imgid").src = "i4.webp";
    document.querySelector("#imgid1").src = "i2.webp"
    document.querySelector("#imgid2").src = "i3.webp";
    document.querySelector("#imgid3").src = "i5.webp"
    document.querySelector("#imgid4").src = "i6.webp";
    document.querySelector("#imgid5").src = "i1.webp"

  }
  function ui(){
    document.querySelector("#imgid").src = "i2.webp";
    document.querySelector("#imgid1").src = "i4.webp"
    document.querySelector("#imgid2").src = "i1.webp";
    document.querySelector("#imgid3").src = "i5.webp"
    document.querySelector("#imgid4").src = "i6.webp";
    document.querySelector("#imgid5").src = "i3.webp"

  }
  function web(){
    document.querySelector("#imgid").src = "i5.webp";
    document.querySelector("#imgid1").src = "i3.webp"
    document.querySelector("#imgid2").src = "i4.webp";
    document.querySelector("#imgid3").src = "i2.webp"
    document.querySelector("#imgid4").src = "i6.webp";
    document.querySelector("#imgid5").src = "i1.webp"

  }
  
  
 

  $('.slidebtn').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:3
        },
        
    }
})

// for  autoplay
var owl = $('.auto');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
      300:{
          items:2
      },
      600:{
          items:3
      },

       1000:{
          items:4
      },
  }
});



$(window).on('load',function(){
    $('#status').fadeOut(1000);
    $('#preloader').delay(2000).fadeOut(1000);
  });

  let navButton = document.querySelector('.nav-button');
navButton.addEventListener("click",function(){
    let ullist = document.querySelector("ul");
    ullist.classList.toggle("navactive");
    console.log("Ok")
})

let page = document.querySelector('.page');
page.addEventListener("click",function(){
    let plist = document.querySelector(".p");
    let pagelist = document.querySelector(".pagelist");
    pagelist.classList.toggle("pageul");
    plist.classList.toggle("fa-plus");
    plist.classList.toggle("fa-minus");
    console.log("Ok")
})