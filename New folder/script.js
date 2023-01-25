
const aboutSkills= document.querySelector(".aboutskills")
const aboutExp= document.querySelector(".aboutexp")
const aboutEdu= document.querySelector(".aboutedu")
const tabLinks= document.querySelector(".tab-links-skills")
const tabLinksExp= document.querySelector(".tab-links-exp")
const tabLinksEdu= document.querySelector(".tab-links-edu")

const colorPalet=document.querySelector(".colorpalet")
const colorOption=document.querySelector(".color-option")

colorPalet.addEventListener("click",function () {
    colorOption.classList.toggle("hidden")
})

const Colors=document.querySelector(".red")
Colors.addEventListener("click",function () {
            console.log("hello")
            let color=this.getAttribute('data-color')
            document.documentElement.style.setProperty('--colortheme',color)
    colorOption.classList.toggle("hidden")

        })

        const Colors2=document.querySelector(".blue")
        Colors2.addEventListener("click",function () {
                    console.log("hello")
                    let color=this.getAttribute('data-color')
                    document.documentElement.style.setProperty('--colortheme',color)
    colorOption.classList.toggle("hidden")

                })  
                
                const Colors3=document.querySelector(".green")
Colors3.addEventListener("click",function () {
            console.log("hello")
            let color=this.getAttribute('data-color')
            document.documentElement.style.setProperty('--colortheme',color)
    colorOption.classList.toggle("hidden")

        })



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