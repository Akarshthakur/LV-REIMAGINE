





let next = document.querySelector('.next')



let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

// yha pe maximum 6 page hi use krna hai...

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})

document.getElementById('btn-ripple').addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripples');
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.fromTo(ripple, {
        left: x,
        top: y,
        height: 0,
        width: 0,
        opacity: 1,
    }, {
        height: size,
        width: size,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => ripple.remove()
    });
});



// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});




let dogR = document.querySelector('.dog_right');
let dogL = document.querySelector('.dog_left');
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
}, '-=1.5') ; 



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
