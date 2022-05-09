// header menu

function myfunction() {
    var x = document.getElementById("menu");
    if (x.style.display == "block") {
      x.style.display = "none";
    }
     else {
      x.style.display = "block";
    }
  }

  



// nav scroll

window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
})


// testimonial slider
let flag = 0;
function controller(x){
  flag = flag + x;
  slideshow(flag);
}

slideshow(flag);

function slideshow(num){
  let slides = document.getElementsByClassName('item-box');

  if(num == slides.length){
    flag = 0;
    num = 0;
  }
  if(num < 0){
    flag = slides.length-1;
    num = slides.length-1;
  }
  
 for(let y of slides){
   y.style.display = "none";
 }

  slides[num].style.display = "block";
}

// search btn cancle

function myclearFunction() {
  document.getElementById("mysearchinput").reset();
}

// search hide

