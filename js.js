

/*CURRENT YEAR*/

let date = new Date();
let curYear = date.getFullYear();
let tekst = `@ ${curYear} All rights reserved | XSPORTBET`;

document.querySelectorAll(".copyright-text").forEach(function(element) {
  element.innerText = tekst;
});



// Kreiranje MobileDetect objekta
var md = new MobileDetect(window.navigator.userAgent);

// Funkcija za izvršavanje redirekcije
function redirectToApp() {
  var currentUrl = window.location.href; // Dobijanje trenutnog URL-a
  if (md.is("AndroidOS")) {
    window.location.href =
      "https://xsportsbet.com/android/app-xsportsbet-release.apk";
  } else {
    // Ako uređaj nije prepoznat, redirektuj na osnovnu LP
    currentUrl;
  }
}

redirectToApp();