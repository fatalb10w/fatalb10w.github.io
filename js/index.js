new Accordion('.accordion-list', {
    elementClass: 'accordion',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active',
})

let swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1, 
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
})

let burger = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

function() {

    burger.classList.toggle('header__burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el){
    el.addEventListener('click', function() {
        
        burger.classList.remove('.header__burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');
    })
})
