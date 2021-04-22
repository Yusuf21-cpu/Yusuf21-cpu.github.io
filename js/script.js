$(document).ready(function () {
  new WOW().init();
});

VanillaTilt.init(document.querySelectorAll(".about-card"), {
  max: 25,
  speed: 500,
  glare: true,
  "max-glare": 1,
});
VanillaTilt.init(document.querySelectorAll(".flipInX"), {
  max: 25,
  speed: 500,
  glare: true,
  "max-glare": 1,
});

var textWrapper = document.querySelector('.font .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.font .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 1500
  }).add({
    targets: '.font .letters',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 2000,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.font',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
