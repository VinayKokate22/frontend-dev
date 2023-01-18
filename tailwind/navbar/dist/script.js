const burgerbutton=document.querySelector(".burger-button")
const hidden=document.querySelector(".hidden") 
const higthofnavBar=document.querySelector(".header") 

burgerbutton.addEventListener("click",function () {
    console.log("function is working");
    hidden.classList.toggle("hidden")
    higthofnavBar.classList.toggle("h-16")
})