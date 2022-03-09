//import 'bootstrap';
import "../scss/styles.scss";

// you can use app's unique identifier here
const LOCAL_STORAGE_KEY = "toggle-bootstrap-theme";
const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
// you can change this url as needed
const darkTheme = "https://bootswatch.com/4/cyborg/bootstrap.min.css";
const darkLink = document.getElementById("dark-theme-style");
const themeToggler = document.getElementById("theme-toggler");
let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark;
// check if user has already selected dark theme earlier
if (isDark) {
  enableDarkTheme();
} else {
  disableDarkTheme();
}

function toggleColor() {
  if (darkLink.getAttribute('href') === darkTheme) {
    disableDarkTheme()
  } else {
    enableDarkTheme()
  }
}

function enableDarkTheme() {
  darkLink.setAttribute("href", darkTheme);
  themeToggler.innerHTML = "Dark";
}

function disableDarkTheme() {
  darkLink.setAttribute("href", "");
  themeToggler.innerHTML = "Light";
}

//carousel
$('.carousel').carousel();

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip()
})