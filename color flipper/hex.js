const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click" , function() {
    
    console.log("hello")

    let hexcolor="#"
    for (let i = 0; i < 6   ; i++) {
    const randomnumber=getrandomnumber()

        hexcolor+=hex[randomnumber]      
    }
    document.body.style.backgroundColor=hexcolor;
    color.textContent=hexcolor
    color.style.color=colors[randomnumber]

})

function getrandomnumber()
{
    return Math.floor( Math.random() * hex.length)
}
