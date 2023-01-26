
const aboutSkills= document.querySelector(".aboutskills")
const aboutExp= document.querySelector(".aboutexp")
const aboutEdu= document.querySelector(".aboutedu")
const tabLinks= document.querySelector(".tab-links-skills")
const tabLinksExp= document.querySelector(".tab-links-exp")
const tabLinksEdu= document.querySelector(".tab-links-edu")

const colorPalet=document.querySelector(".colorpalet")
const colorOption=document.querySelector(".color-option")


const theme=document.querySelector(".theme")
const faMoon=document.querySelector(".fa-moon")

// faMoon.addEventListener("click",function () {
//     theme.classList.add("light")
//     colorPalet.classList.add("hidden")
//     document.documentElement.style.setProperty('--colortheme',"#5793fb")
//     document.documentElement.style.setProperty('--divbackground',"#afdaff")
   
    
    
// })

// faMoon.addEventListener("dblclick",function () {
//     theme.classList.remove("light")
//     colorPalet.classList.remove("hidden")
//     document.documentElement.style.setProperty('--colortheme',"#5067cd")
//     document.documentElement.style.setProperty('--divbackground',"#212121")
    
// })


faMoon.addEventListener("click", function() {
    theme.classList.toggle("light")
    colorPalet.classList.toggle("hidden")
    if (theme.classList.contains("light")) {
      document.documentElement.style.setProperty("--colortheme", "#5793fb")
      document.documentElement.style.setProperty("--divbackground", "#afdaff")
    } else {
      document.documentElement.style.setProperty("--colortheme", "#5067cd")
      document.documentElement.style.setProperty("--divbackground", "#212121")
    }
  })

// 
// 
// 
// 
/


colorPalet.addEventListener("click",function () {
    colorOption.classList.toggle("hidden")
})

// 
// 
// 

// old code

// const Colors=document.querySelector(".red")
// Colors.addEventListener("click",function () {
//             console.log("hello")
//             let color=this.getAttribute('data-color')
//             document.documentElement.style.setProperty('--colortheme',color)
//     colorOption.classList.toggle("hidden")

//         })

//         const Colors2=document.querySelector(".blue")
//         Colors2.addEventListener("click",function () {
//                     console.log("hello")
//                     let color=this.getAttribute('data-color')
//                     document.documentElement.style.setProperty('--colortheme',color)
//     colorOption.classList.toggle("hidden")

//                 })  
                
//                 const Colors3=document.querySelector(".green")
// Colors3.addEventListener("click",function () {
//             console.log("hello")
//             let color=this.getAttribute('data-color')
//             document.documentElement.style.setProperty('--colortheme',color)
//     colorOption.classList.toggle("hidden")

//         })

const colorOptions = document.querySelectorAll(".colortheme")
colorOptions.forEach(colorOption => {
  colorOption.addEventListener("click", function() {
    let color = this.getAttribute("data-color")
    document.documentElement.style.setProperty("--colortheme", color)
    // colorOption.classList.toggle("hidden")
  })
})


// tabLinks.addEventListener("click",function () {
//     aboutSkills.classList.add("active-tab")
//     aboutExp.classList.remove("active-tab")
//     aboutEdu.classList.remove("active-tab")

// })
// tabLinksExp.addEventListener("click",function () {
//     aboutExp.classList.add("active-tab")
//     aboutEdu.classList.remove("active-tab")
//     aboutSkills.classList.remove("active-tab")


// })
// tabLinksEdu.addEventListener("click",function () {
//    aboutEdu.classList.add("active-tab")
//    aboutExp.classList.remove("active-tab")
//    aboutSkills.classList.remove("active-tab")


// })

tabLinks.addEventListener("click", function(event) {
    if (event.target.classList.contains("tab-links-skills")) {
      aboutSkills.classList.add("active-tab")
      aboutExp.classList.remove("active-tab")
      aboutEdu.classList.remove("active-tab")
    } else if (event.target.classList.contains("tab-links-exp")) {
      aboutExp.classList.add("active-tab")
      aboutEdu.classList.remove("active-tab")
      aboutSkills.classList.remove("active-tab")
    } else if (event.target.classList.contains("tab-links-edu")) {
      aboutEdu.classList.add("active-tab")
      aboutExp.classList.remove("active-tab")
      aboutSkills.classList.remove("active-tab")
    }
  })
  


function sendemail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "prathamvahuja@gamil.com",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
