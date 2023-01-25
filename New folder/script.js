
const aboutSkills= document.querySelector(".aboutskills")
const aboutExp= document.querySelector(".aboutexp")
const aboutEdu= document.querySelector(".aboutedu")
const tabLinks= document.querySelector(".tab-links-skills")
const tabLinksExp= document.querySelector(".tab-links-exp")
const tabLinksEdu= document.querySelector(".tab-links-edu")


tabLinks.addEventListener("click",function () {
    aboutSkills.classList.add("active-tab")
    aboutExp.classList.remove("active-tab")
    aboutEdu.classList.remove("active-tab")

})
tabLinksExp.addEventListener("click",function () {
    aboutExp.classList.add("active-tab")
    aboutEdu.classList.remove("active-tab")
    aboutSkills.classList.remove("active-tab")


})
tabLinksEdu.addEventListener("click",function () {
   aboutEdu.classList.add("active-tab")
   aboutExp.classList.remove("active-tab")
   aboutSkills.classList.remove("active-tab")


})