const burgerbutton=document.querySelector(".burger-button")
const hidden=document.querySelector("#hidden") 
const higthofnavBar=document.querySelector(".heightofnavbar") 

burgerbutton.addEventListener("click",function () {
    hidden.classList.toggle("hidden")
    higthofnavBar.classList.toggle("h-52")
})