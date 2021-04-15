const menyuBtn = document.querySelector('.menu-btn');
const menyuPhone = document.querySelector('.menyu-phone');
const cancelBtn = document.querySelector('.cancel-btn')

menyuBtn.addEventListener('click',()=>{
    menyuPhone.style.top = '0'
})

cancelBtn.addEventListener('click',()=>{
    menyuPhone.style.top = '-100vh'
})

// swiper 
var swiper = new Swiper('.swiper-container', {
    effect: 'flip',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.next2',
      prevEl: '.next1',
    },
  });