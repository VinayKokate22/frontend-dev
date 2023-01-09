const inputBtn=document.getElementById("input-btn")

let myLeads=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
inputBtn.addEventListener("click", function(){
    
    console.log("helo")
    myLeads.push(inputEl.value)
    if (inputEl.value!="") {
        inputEl.value=""
    }
    renderleads()
})

function renderleads(){
    let listItems=""
for (let i = 0; i < myLeads.length; i++) {
    listItems+= "<li><a href='#' target='_blank'>"+myLeads[i]+"</a></li>";
    
}
ulEl.innerHTML=listItems
}