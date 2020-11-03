document.addEventListener("DOMContentLoaded", () => {

  //swipper-slider
  let mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    spaceBetween: 0,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

  });


  let mySwipers = new Swiper('.swiper-container .swiper-container-popular', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    spaceBetween: 0,

    navigation: {
      nextEl: '.swiper-button-prev .swiper-button-next-popular',
      prevEl: '.swiper-button-prev .swiper-button-prev-popular',
    }

  });

  //end swipper-slider


  //open catalog
  let open = document.querySelector('.bottom-menu--link--yellow')
  let catalogCloseBtn = document.querySelector('.close')
  let catalogMenu = document.querySelector('.catalog__menu')
  open.addEventListener('mouseenter', () => {
    catalogMenu.classList.add('catalog__menu--active')
  })
  
  catalogCloseBtn.addEventListener('click', () => {
    
    catalogMenu.classList.remove('catalog__menu--active')
  })












});