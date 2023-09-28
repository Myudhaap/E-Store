const menuBtn = document.getElementById('menu-btn')
const searchEl = document.querySelector('.search-form')
const shoppingEl = document.querySelector('.shopping-cart')
const userEl = document.querySelector('.user-form')
const menuEl = document.querySelector('.menu')
menuBtn.onclick = () => {
  menuEl.classList.toggle("active");
  searchEl.classList.remove("active");
  shoppingEl.classList.remove("active");
  userEl.classList.remove("active");
}

const searchBtn = document.getElementById('search-btn')
searchBtn.onclick = () => {
  menuEl.classList.remove("active");
  searchEl.classList.toggle("active");
  shoppingEl.classList.remove("active");
  userEl.classList.remove("active");
}

const shoppingBtn = document.getElementById('shopping-btn')
shoppingBtn.onclick = () => {
  menuEl.classList.remove("active");
  searchEl.classList.remove("active");
  shoppingEl.classList.toggle("active");
  userEl.classList.remove("active");
}

const userBtn = document.getElementById('user-btn')
userBtn.onclick = () => {
  menuEl.classList.remove("active");
  searchEl.classList.remove("active");
  shoppingEl.classList.remove("active");
  userEl.classList.toggle("active");
}

var swiper = new Swiper(".products-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  loop: true,
  centerSlides: true,
  autoPlay: {
    delay: 7500,
    disableOnInteraction: false
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});