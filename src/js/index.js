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

const teamSlider = new Swiper(".team-slider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
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

// ===================================================================
//                    LIGHTBOX
// ===================================================================

import GLightbox from 'glightbox';
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true
});

// ===================================================================
//                  FULL SCREEN VIDEO
// ===================================================================

import '../../node_modules/vide/dist/jquery.vide';

// $('.banner__video').vide({
//   mp4: '../../../images/banner.mp4',
//   poster: '../../../images/poster.jpg'
// }, {
//   volume: 1,
//   playbackRate: 1,
//   muted: true,
//   loop: true,
//   autoplay: true,
//   position: '50% 50%', 
//   posterType: 'jpg', 
//   resizing: true, 
//   bgColor: 'transparent', 
//   className: 'vipin'
// })

// ===================================================================
//                  AOS ANIMATION
// ===================================================================

import AOS from 'aos';

AOS.init();

// ===================================================================
//                  LITY JS
// ===================================================================

import Lity from 'lity';