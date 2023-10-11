(function ($) {
  "use strict";

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar-wrapper").addClass("nav-sticky");
    } else {
      $(".navbar-wrapper").removeClass("nav-sticky");
    }
  });

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(".navbar .navbar-menu").html();
    $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }
  new WOW().init();

  if ($(".account-menu").length) {
    var mobileMenuContent = $(".layout .layout-menu").html();
    $(".account-menu .menu-box .menu-outer").append(mobileMenuContent);
  }
})(jQuery);

/* ======  search ======= */
const appSearch = document.querySelector(".app-search-box");
const searchBtnMobile = document.querySelector(".search-icon");
const searchBackdrop = document.querySelector(".search-backdrop");
const hide_searchbar = document.querySelector(".hide-searchbar");

searchBtnMobile.addEventListener("click", () => {
  appSearch.classList.add("show");
});
searchBackdrop.addEventListener("click", () => {
  appSearch.classList.remove("show");
});
hide_searchbar.addEventListener("click", () => {
  appSearch.classList.remove("show");
});
/* ======  search ======= */
