// hero slider
$(".intro_slider")
  .slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    lazyLoad: "progressive",
    arrows: false,
    dots: true,
  })
  .slickAnimation();

$(".slick-nav").on("click touch", function (e) {
  e.preventDefault();
  var arrow = $(this);
  if (!arrow.hasClass("animate")) {
    arrow.addClass("animate");
    setTimeout(() => {
      arrow.removeClass("animate");
    }, 1600);
  }
});
// end hero slider

// product slider
$(".products-slider")
  .slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    lazyLoad: "progressive",
    arrows: true,
    dots: false,
  })
  .slickAnimation();

$(".slick-nav").on("click touch", function (e) {
  e.preventDefault();
  var arrow = $(this);
  if (!arrow.hasClass("animate")) {
    arrow.addClass("animate");
    setTimeout(() => {
      arrow.removeClass("animate");
    }, 1600);
  }
});
// end product slider

// summer sale slider
$(".summer-sale .products").slick({
  autoplay: true,
  slidesToShow: 2,
  autoplaySpeed: 3000,
  speed: 800,
  margin: 0,
  lazyLoad: "progressive",
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
// end summer sale slider

// color wise filter
$("div[id^=color-items] .color-item").click(function () {
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
});
// end color wise filter

// price filter
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
// end price filter
