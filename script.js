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
