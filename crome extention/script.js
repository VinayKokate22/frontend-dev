let myLeads=[]
const inputBtn=document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn")

const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const tabBtn=document.getElementById("tab-btn")
const leadsFromlocalstorage=JSON.parse(localStorage.getItem("myleads"))

if (leadsFromlocalstorage) {
    myLeads=leadsFromlocalstorage
    render(myLeads)
}




tabBtn.addEventListener("click",function () {

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myLeads))
        render(myLeads)

    })

   

})
inputBtn.addEventListener("click", function(){
    
    // console.log("helo")
    myLeads.push(inputEl.value)
    if (inputEl.value!="") {
        inputEl.value=""
    }
     
    localStorage.setItem("myleads",JSON.stringify(myLeads))

    render(myLeads)
})

deleteBtn.addEventListener("click",function () {
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

function render( leads){
    let listItems=""
for (let i = 0; i < leads.length; i++) {
    listItems+= "<li><a href='#' target='_blank'>"+leads[i]+"</a></li>";
    
}
ulEl.innerHTML=listItems
}