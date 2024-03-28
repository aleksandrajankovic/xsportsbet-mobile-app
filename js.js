
/*SWIPER FOOTER*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 10,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },

    640: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6.5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 10,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
    800: {
      slidesPerView: 6.5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 10.5,
      spaceBetween: 20,
    },
  },
});

// Kreiranje MobileDetect objekta
var md = new MobileDetect(window.navigator.userAgent);

// Funkcija za izvršavanje redirekcije
function redirectToApp() {
  var currentUrl = window.location.href; // Dobijanje trenutnog URL-a
  if (md.is("AndroidOS")) {
    window.location.href =
      "https://coupons.joker.co.rs/~android/ke/app-ke-release.apk";
  } else {
    // Ako uređaj nije prepoznat, redirektuj na osnovnu LP
    currentUrl;
  }
}

// Pozivanje funkcije za izvršavanje redirekcije
redirectToApp();