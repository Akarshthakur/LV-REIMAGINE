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

// Marquee Animation
  
let direction = 1;
let duration = 2;

let tl = gsap.timeline({});

tl.to(".marquee > span", {
    repeat: -1,
    yoyo: false,
    yPercent: -100,
    ease: "linear",
    duration: duration
});

let scroll = ScrollTrigger.create({
    onUpdate(self) {
        if (self.direction !== direction) {
            direction *= 1;
            gsap.to(tl, {timeScale: direction});
        }
        
        tl.timeScale(duration * self.getVelocity() / 350);
        gsap.to(tl, {timeScale: direction, overwrite: true});
    }
});



 
let directions = 1;
let durations = 2;

let tls = gsap.timeline({});

tls.to(".marquee2 > span", {
    repeat: +1,
    yoyo: false,
    yPercent: -100,
    ease: "linear",
    duration: duration
});

let scrolls = ScrollTrigger.create({
    onUpdate(self) {
        if (self.directions !== directions) {
            directions *= -1;
            gsap.to(tls, {timeScale: directions});
        }
        
        tls.timeScale(duration * self.getVelocity() / 350);
        gsap.to(tls, {timeScale: directions, overwrite: true});
    }
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

document.getElementById('forward-page8l').addEventListener('click', () => {
    document.getElementById('rignt-page8l').scrollBy({
        left: 400,
        behavior: 'smooth'
    });
});

document.getElementById('back-page8l').addEventListener('click', () => {
    document.getElementById('rignt-page8l').scrollBy({
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
