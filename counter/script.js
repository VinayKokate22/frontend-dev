const btnincrease=document.querySelector(".btn-increase")
const btndecrease=document.querySelector(".btn-decrease")
const btnreset=document.querySelector(".btn-reset")


const countEl=document.querySelector(".count-el")
let temp=JSON.parse( countEl.textContent)

btndecrease.addEventListener("click",function () {

    temp=temp-1;
    // console.log(temp)
    renderthecounter(temp)


})
btnincrease.addEventListener("click",function () {

    temp=temp+1;
    
    // console.log(temp)
    renderthecounter(temp)


})
btnreset.addEventListener("click",function () {

    temp=0;
    
    console.log(temp)
    renderthecounter(temp)


})
function renderthecounter(a)
{
    if (a>=0) {
        countEl.style.color="green"
    }
    else{
        countEl.style.color="red"

    }
     countEl.textContent=a
}