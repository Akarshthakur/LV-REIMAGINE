let dogR = document.querySelector('.d_right');
let dogL = document.querySelector('.d_left');
let container = document.querySelector('.container6');

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    pin: true,
    start: "top top",
    end: "+=500",
    scrub: 0.2,
  },

});

tl.to(dogR, {
  translateX: "60vw",
  rotation: "45",
  duration: 1.5,
})
tl.to(dogL, {
  translateX: "-60vw",
  duration: 1.5,
  rotation: "-45",
}, '-=1.5')




