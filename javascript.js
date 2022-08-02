window.onscroll = function () {
  stickyTop();
};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyTop() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
}
function closeBanner() {
  var banner = document.getElementById("banner");
  banner.classList.remove("d-flex");
  banner.classList.add("d-none");
}


function changeClass(){
  const boxes = document.querySelectorAll('.box');

  for(const box of boxes){
    box.classList.add("primary");
    box.classList.remove("secondary");
  }
}

var btnTop = document.getElementById("pushToTop");

function toTheTop() {
  document.documentElement.scrollTop = 0;
}