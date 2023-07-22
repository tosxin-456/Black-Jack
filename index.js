let player = {Name:"Tosin",
chips:150, 
SayHello: function(){
console.log("helloworld")
}
}

player.SayHello()
let sumOfCards = 0
let hasBlackjacked = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message")
let sumParagraph = document.getElementById("sumButton")
let cardsValue = document.getElementById("cardsChecker")
let newCardValue = document.getElementById("newCards")
let cards = []
let playerCurrentValue = document.getElementById("priceMoney")
playerCurrentValue.textContent = player.Name + ": $" +player.chips



function startGame(){
  isAlive = true 
  let firstCard  = getRandomCards()
  let secondCard = getRandomCards()
  cards = [firstCard, secondCard]
  sumOfCards = firstCard + secondCard
  renderGame()
}

function renderGame(){
  
  cardsValue.textContent = "Cards: " 
  for(let i = 0; i<cards.length; i++ ){
   cardsValue.textContent += cards[i] + " "
  }

  sumParagraph.textContent = "Sum: " + sumOfCards 
if (sumOfCards <= 20) {
    message = "Do you want to draw a new card? 😊"
    isAlive = true
}
else if (sumOfCards === 21){
    message = "You got a Blackjack!!, whopee 🥳"
    hasBlackjacked = true
    priceRightNow.textContent = playerValues.Name + "$" + playerValues.amountGotten
  }
  else {
    message = "You have lost the game 😭"
    isAlive = false
  }

   messageEl.textContent = message
  }
  function newCard(){
   if (isAlive === true && hasBlackjacked === false){
    let newCards = getRandomCards()
    sumOfCards += newCards
   cards.push(newCards)
    renderGame()
   }
      }


function getRandomCards(){
  let randomValues = Math.floor(Math.random() *13) +1
  if(randomValues === 1){
    return 11
  }
  else if(randomValues > 10){
    return 10
  }
  else{
    return randomValues
  }

  }