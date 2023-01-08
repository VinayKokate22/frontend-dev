let messageEl=document.getElementById("message-el")
let cardEl=document.getElementById("card-el")
let sumEl=document.getElementById("sum-el")
let firstcard=randomnumber()
let message=""
let secondcard=randomnumber()
let checker=1
let sum=firstcard+secondcard
let cards=[firstcard,secondcard]

let player={
    profilename:"vinay",
    chip:200
}
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.profilename+": $"+player.chip
function rendergame()
{
    
    
   let cardsmessage=""
    
    for (let int = 0; int < cards.length; int++) {
        cardsmessage+= cards[int]+"  "
        
    }
    cardEl.textContent="Cards: " +cardsmessage
    sumEl.textContent="Sum:"+sum
    if (sum<=20) {
        message="Do you want a new card?"
        checker=1
    }
    else if (sum===21) {
        message="You have got blackjack !!"
        checker=0
    }
    else{
        message="You are out of the game"
        checker=0;
    }
    messageEl.textContent=message

}
function randomnumber()
{
    let number=Math.floor(Math.random()*13+1)
    if (number===1) {
        number=11
    }
    else if(number===11 || number===12 ||number===13)
    {
        number=10
    }
    return number
}

function newcard()
{
    console.log(checker)
    if (checker==0) {
        return
    }
    
    let card=randomnumber()
    cards.push(card)
    sum+=card;
    rendergame()
    
}
function newgame()
{
    firstcard=randomnumber()
    secondcard=randomnumber()
    sum=firstcard+secondcard;
    cards=[firstcard,secondcard]
    messageEl.textContent="Click START GAME to play"
    cardEl.textContent="Cards: "
    sumEl.textContent="Sum: "

    
}