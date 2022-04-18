//1
let baseURL ="https://deckofcardsapi.com/api/deck"

async function drawNewCard(){
    let data = await axios.get(`${baseURL}/new/draw`)
    let suit = data.cards[0].suit
    let value = data.cards[0].value

    console.log(`${value} of ${suit}`)
}

//2
async function drawTwoCards(){
    let firstCard = await axios.get(`${baseURL}/new/draw`)
    let deckID = firstCard.deck_id
    let secondCard = await axios.get(`${baseURL}/${deckID}/draw`)

    let {value,suit} = firstCard.cards[0]
    let {value2,suit2} = secondCard.cards[0]

    console.log(`${value} of ${suit} and ${value2} of ${suit2}`)
}

//3
let cardArea = document.getElementById("cards")
let button = document.querySelector("button")
let newDeck = await axios.get(`${baseURL}/new/draw`)
let deckID = newDeck.deck_id

button.addEventListener("click", async function(){
    let card = await axios.get(`${baseURL}/${deckID}/draw`)
    let newCardElement = document.createElement("li")
    newCardElement.innerHTML = `${card.cards[0].value} of ${card.cards[0].suit}`
    cardArea.appened(newCardElement)
})
