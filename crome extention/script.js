let myLeads=[]
const inputBtn=document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn")

const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const leadsFromlocalstorage=JSON.parse(localStorage.getItem("myleads"))
inputBtn.addEventListener("click", function(){
    
    console.log("helo")
    myLeads.push(inputEl.value)
    if (inputEl.value!="") {
        inputEl.value=""
    }

    renderleads()
})

deleteBtn.addEventListener("click",function () {
    localStorage.clear()
    myLeads=[]
    renderleads()
})

function renderleads(){
    let listItems=""
for (let i = 0; i < myLeads.length; i++) {
    listItems+= "<li><a href='#' target='_blank'>"+myLeads[i]+"</a></li>";
    
}
ulEl.innerHTML=listItems
}