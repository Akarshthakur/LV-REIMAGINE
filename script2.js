

// animation of the nav bar 

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    start: 'top -20%',
    end: 99999,
    toggleClass: {className: 'scrolled', targets: '#navbar'}
});

// Animation on scroll
gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
});

// Fade-in effect for content
const content = document.querySelectorAll('.content');
content.forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => section.classList.add('active'),
    });
});

// page1 gsap animation 



document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  // GSAP animation for text
  gsap.from(".headline", {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: "power4.out",
  });

  gsap.from(".subheadline", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      delay: 0.5,
      ease: "power4.out",
  });

  // Scroll-triggered animations
  const contentSections = document.querySelectorAll('.fade-in');
  contentSections.forEach(section => {
      ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          onEnter: () => section.classList.add('active'),
      });
  });
});


// code the page 7 


let page7 = document.querySelector('#page7')
let dogR = document.querySelector('.d_right');
let dogL = document.querySelector('.d_left');
let container = document.querySelector('.container6');

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: page7,
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

;


// js for the upper part of the page 8

document.getElementById('forward-page8').addEventListener('click', function() {
    var scrollContainer = document.getElementById('rignt-page8');
    scrollContainer.scrollBy({
        top: 0,
        left: 400, // Amount to scroll by (change as needed)
        behavior: 'smooth' // Smooth scrolling
    });
});
document.getElementById('back-page8').addEventListener('click', function() {
    var scrollContainer = document.getElementById('rignt-page8');
    scrollContainer.scrollBy({
        top: 0,
        left: -400, // Amount to scroll by (negative value for left direction)
        behavior: 'smooth' // Smooth scrolling
    });
});


// js for the lower part of the page 8

document.getElementById('forward-page8l').addEventListener('click', function() {
    var scrollContainer = document.getElementById('rignt-page8l');
    scrollContainer.scrollBy({
        top: 0,
        left: 400, // Amount to scroll by (change as needed)
        behavior: 'smooth' // Smooth scrolling
    });
});
document.getElementById('back-page8l').addEventListener('click', function() {
    var scrollContainer = document.getElementById('rignt-page8l');
    scrollContainer.scrollBy({
        top: 0,
        left: -400, // Amount to scroll by (negative value for left direction)
        behavior: 'smooth' // Smooth scrolling
    });
});


// adding customise curser to the page 


const cursorOuter = document.querySelector(".cursor--large"),
      cursorInner = document.querySelector(".cursor--small");

function updateCursor(e) {
  gsap.set([cursorInner, cursorOuter], {
    x: e.clientX,
    y: e.clientY,
  });
}

document.addEventListener("mousemove", updateCursor);


// animating the first page 



