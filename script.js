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






// Page 1 Animation
gsap.from(".page1 h1, .page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".page1 h1",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
});

gsap.to(".page1 video", {
    width: "90%",
    scrollTrigger: {
        trigger: ".page1 h1",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
});

gsap.to("#main", {
    backgroundColor: "#fff",
    scrollTrigger: {
        trigger: ".page1 h1",
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
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



  document.addEventListener("mousemove" , function(dets){

   
  })
  

  let nextButton = document.getElementById('next');
  let prevButton = document.getElementById('prev');
  let carousel = document.querySelector('.carousel');
  let listHTML = document.querySelector('.carousel .list');
  let seeMoreButtons = document.querySelectorAll('.seeMore');
  let backButton = document.getElementById('back');
  
  nextButton.onclick = function(){
      showSlider('next');
  }
  prevButton.onclick = function(){
      showSlider('prev');
  }
  let unAcceppClick;
  const showSlider = (type) => {
      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';
  
      carousel.classList.remove('next', 'prev');
      let items = document.querySelectorAll('.carousel .list .item');
      if(type === 'next'){
          listHTML.appendChild(items[0]);
          carousel.classList.add('next');
      }else{
          listHTML.prepend(items[items.length - 1]);
          carousel.classList.add('prev');
      }
      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(()=>{
          nextButton.style.pointerEvents = 'auto';
          prevButton.style.pointerEvents = 'auto';
      }, 2000)
  }
  seeMoreButtons.forEach((button) => {
      button.onclick = function(){
          carousel.classList.remove('next', 'prev');
          carousel.classList.add('showDetail');
      }
  });
  backButton.onclick = function(){
      carousel.classList.remove('showDetail');
  }


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
    trigger: section,
    start: "top top",
    end: () => "+=" + (container.scrollWidth - section.offsetWidth),
    scrub: 1,
    pin: true,
    anticipatePin: 1
  });
};

