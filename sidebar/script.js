const navbar = document.querySelector(".navbar")
const burgerButton= document.querySelector(".menu-button")
const navbarLeftlist= document.querySelector(".navbar-leftlist")
const Logo= document.querySelector(".logo")
const navbarRightlist= document.querySelector(".navbar-rightlist")

burgerButton.addEventListener("click",function () {
    console.log("hello")
    navbar.classList.toggle("navbar-after-hidden")
    navbarLeftlist.classList.toggle("hidden")
    Logo.classList.toggle("after-hidden")
    navbarRightlist.classList.toggle("hidden")
})
