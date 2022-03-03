const darkTheme = "https://bootswatch.com/4/cyborg/bootstrap.min.css"
const darkLink = document.getElementById("dark-theme")
const toggleTheme = document.getElementById("theme-toggle")

function toggleColor() {
  enableDarkTheme()
}

function enableDarkTheme() {
  darkLink.setAttribute('href', darkTheme)
}

function disableDarkTheme() {
  darkLink.setAttribute('href', '')
}