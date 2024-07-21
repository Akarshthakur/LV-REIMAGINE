// GSAP and ScrollTrigger initialization
gsap.registerPlugin(ScrollTrigger);

// CUSTOMISED CURSOR 
const cursorOuter = document.querySelector(".cursor--large"),
      cursorInner = document.querySelector(".cursor--small");

function updateCursor(e) {
  gsap.set([cursorInner, cursorOuter], {
    x: e.clientX,
    y: e.clientY,
  });
}

document.addEventListener("mousemove", updateCursor);


// adding the loader screen 



var w1 = gsap.timeline()

w1.from("#loader h1 , #loader img" , {
  x:90,
  opacity:0,
  duration:2,
  stagger:0.3,
    
})

w1.to("#loader",{
  opacity:0,
 
})

w1.to("#loader",{
  display:"none",
 
})



w1.from(" #stagger",{
  y:30,
  opacity:0,
  duration:1,
  stagger:0.1
  
})



// Navbar Animation
ScrollTrigger.create({
    start: 'top -20%',
    end: 99999,
    toggleClass: { className: 'scrolled', targets: '#navbar' }
});

// Navbar Animation on Scroll
gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

// nav bar hamburger animation 


    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('#Hanm');
        const mobileMenu = document.querySelector('.mobile-menu');

        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
        });
    });






// Page 2 Image Container Animation
const imageContainer = document.querySelector(".image-container");
const img = imageContainer.querySelector(".img");

imageContainer.addEventListener("mousemove", (evt) => {
    let rect = imageContainer.getBoundingClientRect();
    let x = evt.clientX - rect.left;
    let y = evt.clientY - rect.top;
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(1.8)";
    img.style.filter = "brightness(1.2)";
    imageContainer.style.cursor = "zoom-in";
});

imageContainer.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
    img.style.filter = "brightness(1)";
    imageContainer.style.cursor = "default";
});

// Page 2 Ripple Animation
      
document.getElementById('btn-ripple').addEventListener('click', function(e) {
    gsap.fromTo('.ripples' , {
      border: '1px solid #fff',
      left: e.offsetX,
      top: e.offsetY,
      height: 0,
      width: 0,
      opacity: 1,
    }, {
      border: '0px solid #fff',
      height: 60,
      width: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
  })


  document.getElementById('btn-ripplea').addEventListener('click', function(e) {
    gsap.fromTo('.ripplesa' , {
      border: '1px solid #fff',
      left: e.offsetX,
      top: e.offsetY,
      height: 0,
      width: 0,
      opacity: 1,
    }, {
      border: '0px solid #fff',
      height: 60,
      width: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
  })

// Page 8 Scroll Animation
document.getElementById('forward-page8').addEventListener('click', () => {
    document.getElementById('rignt-page8').scrollBy({
        left: 400,
        behavior: 'smooth'
    });
});

document.getElementById('back-page8').addEventListener('click', () => {
    document.getElementById('rignt-page8').scrollBy({
        left: -400,
        behavior: 'smooth'
    });
});


// Page 7 Scroll Trigger Animation
let page7 = document.querySelector('#page7');
let dogR = document.querySelector('.d_right');
let dogL = document.querySelector('.d_left');

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: page7,
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 0.2
    }
});

tl3.to(dogR, {
    translateX: "60vw",
    rotation: "45",
    duration: 1.5
});

tl3.to(dogL, {
    translateX: "-60vw",
    rotation: "-45",
    duration: 1.5
}, '-=1.5');


// adding gsap to all the remaing page 

/*
gsap.from(".image-container , #details-page2 , #price-section , #about-page2   ",{
    y: 190,
  opacity: 0,
  delay:0.3,
  duration: 4,
  yoyo: true,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2,

  },
  })
  
/*
  gsap.from(" .cardpg3  ",{
    y: 190,
  
  opacity: 0,
  delay:0.3,
  duration: 4,
  scrollTrigger: {
    trigger: "#page8",
    scroller: "body",
    stagger:0.15,
    // markers:true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
  
  },
  })




*/



  gsap.from(" .inner-03 , .row-03 ",{
    y: 190,
  
  opacity: 0,
  delay:0.3,
  duration: 4,
  scrollTrigger: {
    trigger: ".testinomials-03",
    scroller: "body",
    stagger:0.15,
    // markers:true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
  
  },
  })


  // museenter and mouse leave function 



  // page5 animation 


  
  const tlvideo = gsap.timeline({
    scrollTrigger: {
      trigger: ".orangeWrapper",
      scrub: true,
      pin: true,
      
      start: "50% 50%",
      end: "+=200%"
    }
  })
  
  .from(".orange", {
    scale: 0.5, 
    ease: "none"
  })
  
  .from(".line-2", {
    scaleX:0,
    ease:"none",
    transformOrigin:"left top"
  }, 0)
  
  
  const video = document.getElementById('myVideo');
  const playPauseBtn = document.getElementById('playPauseBtn');
  
  video.pause(); 
  
  playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
          video.play();
          playPauseBtn.textContent = 'Pause';
          playPauseBtn.classList.remove('blink');
      } else {
          video.pause();
          playPauseBtn.textContent = 'Play';
          playPauseBtn.classList.add('blink');
      }
  });
  

// page10 animation 


    
    

    
window.addEventListener("DOMContentLoaded", () => {
       
  ultraSliderAnimation();
});


const ultraSliderAnimation = () => {
  const section = document.querySelector(".ultra-slider-section");
  const container = document.querySelector(".ultra-slider-container");

  ScrollTrigger.create({
    animation: gsap.to(".ultra-slider-container", {
      x: () => -(container.scrollWidth - section.offsetWidth) + "px",
      ease: "none",
    }),
    trigger: section ,
    start: "top top",
    end: () => "+=" + (container.scrollWidth - section.offsetWidth),
    scrub: 1,
    pin: true,
    anticipatePin: 1
  });
};

