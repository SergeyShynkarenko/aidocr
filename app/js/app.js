// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".header__top-hamburger")
    .addEventListener("click", function () {
      document
        .querySelector(".hamburger--slider")
        .classList.toggle("is-active");
      document
        .querySelector(".nav__list")
        .classList.toggle("nav__list--active");
      document.querySelector("body").classList.toggle("hidden__body");
    });
});
