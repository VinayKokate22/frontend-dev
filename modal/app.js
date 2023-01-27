const modalOverlay=document.querySelector(".modal-overlay")
const closeBtn=document.querySelector(".close-btn")
const modalBtn=document.querySelector(".modal-btn")
console.log("heelo")

modalBtn.addEventListener("click",function () {
    modalOverlay.classList.toggle("open-modal")
})
closeBtn.addEventListener("click",function () {
    modalOverlay.classList.toggle("open-modal")
})