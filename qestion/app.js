const questionBtn= document.querySelectorAll(".question-btn")

questionBtn.forEach(function (btn) {
    btn.addEventListener("click",function (e) {
        const event=e.currentTarget.parentElement.parentElement
        
        event.classList.toggle("show-text")
    })
    
});