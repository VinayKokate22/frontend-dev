const burger=document.querySelector(".burger")
const navbar=document.querySelector(".navbar")
const navlist=document.querySelector(".nav-list")
const rightnav=document.querySelector(".rightnav")

burger.addEventListener("click", function () {
    // console.log("hello")
    navbar.classList.toggle("navbar-height")
    navlist.classList.toggle("navbar-visibility")
    rightnav.classList.toggle("navbar-visibility")
})