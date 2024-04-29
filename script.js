const nv = document.querySelector(".nv"),
  icBusca = document.querySelector("#icBusca"),
  nvOBt = document.querySelector(".nvOBt"),
  nvFBtn = document.querySelector(".nvFBtn");

icBusca.addEventListener("click", () => {
  nv.classList.toggle("abrirBusca");
  nv.classList.remove("abrirNav");
  if (nv.classList.contains("abrirBusca")) {
    return icBusca.classList.replace("uil-search", "uil-times");
  }
  icBusca.classList.replace("uil-times", "uil-search");
});

nvOBt.addEventListener("click", () => {
  nv.classList.add("abrirNav");
  nv.classList.remove("abrirBusca");
  icBusca.classList.replace("uil-times", "uil-search");
});
nvFBtn.addEventListener("click", () => {
  nv.classList.remove("abrirNav");
});
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}
var spanText = function spanText(text) {
  var string = text.innerText;
  var spaned = '';
  for (var i = 0; i < string.length; i++) {
    if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
    else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
  }
  text.innerHTML = spaned;
}

var headline = document.querySelector("h1");

spanText(headline);

let animations = document.querySelectorAll('.animation');

animations.forEach(animation => {
  let letters = animation.querySelectorAll('span');
  letters.forEach((letter, i) => {
    letter.style.animationDelay = (i * 0.1) + 's';
  })
})
gsap.registerPlugin(ScrollTrigger);
let black = '#0A0A0A';
let offWhite = '#EDEEE9';

// saveStyles is used because GSAP writes inline CSS for styling.
// If we resize our browser, we want the styling of each viewport-based animation to be saved.
ScrollTrigger.saveStyles(".first, .second, .cta, .container");

ScrollTrigger.matchMedia({
  
  // the mobile animations are the same as the desktop, except the font colors are different
  // the scrub is delayed by 1s with relation to the scrollbar (scrub: 1)
  // the animation starts a bit earlier
  "(max-width: 768px)": function() {
    
    let mobileTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".marquee",
        start: "-100% bottom",
        scrub: 1,
      }
    });

    mobileTL.to(".first", {duration: 2, xPercent: -100, color: offWhite})
            .to(".second", {duration: 2, xPercent: 100, color: offWhite},"<")
            .to(".container", {duration: 0.5, backgroundColor: black},"<")
            .to(".cta", {duration: 2, color: offWhite},"<");
  },
  
});


