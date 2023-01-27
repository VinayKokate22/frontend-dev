const questionBtn= document.querySelectorAll(".question-btn")

questionBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const event = e.currentTarget.parentElement.parentElement;
        document.querySelectorAll('.show-text').forEach(function (elem) {
            elem.classList.remove('show-text');
        });
        event.classList.add('show-text');
    });
});



