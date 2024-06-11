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



// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1.5,
//     centeredSlides: true,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 3500,
//         disableOnInteraction: false,
//       },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     loop: true,
//   });
