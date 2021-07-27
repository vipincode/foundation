// ==============================================================
// STICKY NAVBAR
// ==============================================================

import Swiper from 'swiper/bundle';

const slVolunteer = new Swiper(".slVolunteer", {
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
        slidesPerView: 1,
        spaceBetween: 24,
    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 24,
        slidesPerGroup: 2,
    },
  }
});

// ==============================================================
// STICKY NAVBAR
// ==============================================================

const navbar = document.querySelector(".navbar__bottom");
const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

if(navbar) {
    window.onscroll = function() {stickyNavbar()};
}

// ==============================================================
// JQUERY
// ==============================================================
import $ from 'jquery';

var body = $('body');
var menuTrigger = $('.hamburger');
var mainOverlay = $('.js__main--overlay');

menuTrigger.on('click', function() {
    $(this).toggleClass('is-active');
    body.toggleClass('menu__is--active');
});

mainOverlay.on('click', function() {
    menuTrigger.removeClass('is-active');
    body.removeClass('menu__is--active');
});

// ===================================================================
//                     BOOTSTRAP MODAL
// ===================================================================

import 'bootstrap/js/src/modal';


// ===================================================================
//                ANIME JS TO MAKE TEXT EFFECT
// ===================================================================

import anime from 'animejs/lib/anime.es.js';
let textWrapper = document.querySelector('.anime-text .letters');
if(textWrapper) {
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

anime.timeline({loop: true})
  .add({
    targets: '.anime-text .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.anime-text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });