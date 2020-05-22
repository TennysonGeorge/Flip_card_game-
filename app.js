document.addEventListener('DOMContentloaded', () => {

// I see that we are having to create a function and conditional statement, 
// nested a variable in the  function that we created, so why are we doing this?
// all images for the card option selection are put in an array, now that array can be called on in a JS function 

    const cardArray = [

            {
                name: '' ,
                img: 'images/.png'
            },

            
            {
                name: '' ,
                img: 'images/.png'
            },

            
            {
                name: '' ,
                img: 'images/.png'
            },


            {
                name: '' ,
                img: 'images/.png'
            },



            {
                name: '' ,
                img: 'images/.png'
            },



            {
                name: '' ,
                img: 'images/.png'
            },



            {
                name: '' ,
                img: 'images/.png'
            },


            {
                name: '' ,
                img: 'images/.png'
            },
    ]
})


// so this part with the math.random method is confusing to me 
// the code below this line is confusing to me and I need help understanding it

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardChosen = []
var cardChosenId = []
var cardWon = []



// creating the function part of the board 
// I don't understand what she is doing here
// what are the createElement?
// what are the setAttribute? 
// I think that this is the function part that make it able to select the pictures and be able to match them. 
// What's up with the grid.appendChild(card)?

function createBoard() {

    for (let i = 0; i < cardArray.length; i++) { 
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)

        // I think that she tried to do "on click" functional event to be able to fliped the cards when you click on it. 
        //She tried to used the code below but it didn't work. I might be able to troubleshoot this. 
        // card.addEventListemer('click', flipcard) trying to flip the card when you click on them. 
        //she already troubleshoot it. 


    
    }
}
 // She wrote a function to check for the matching of the cards
 // why did she make this variable?

function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionOneId = cardChosenId[1]
    

        if (cardChosen[0] === cardChosen[1]){
            
                // on the defult, we would put an "alert( 'You found a match')" 
                // But with our new found method of "readline-sync"
                // We can prompt our user in manny ways

                //alert('You found a match'). This code here is just one of manny way to prompt user 
            
            
                // So I'm still lost on this setattribute method
                card[optionOneId].setAttribute('src', 'images/white.png')
                card[optionTwoId].setAttribute('src', 'images/white.png')
                // why didn't start with 0 and 1? Because she put one and two, I think this might be a bug in her code
            
            
                // on the defult, we would put an "alert( 'Sorry, try again')" but with readline-sync...
                // We can do what every we want... so prompt your user
                // 
                
            
            cardWon.push(cardsChosen)
        }

        else {
            
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            // on the defult, we would put an "alert( 'Sorry, try again')" but with readline-sync...
            // We can do what every we want... so prompt your user
            
            // alert( 'Sorry, try again'). This code here is just one of manny way to prompt user 
        }


    // IDK why she put this code here but ok...... find out what this code does 
    // I think this code here is for after the player have chosen a card, or correct cards
    // what do we want the user to see or computer to display 
    // we set the var for each of this choess listed below 
    // This is a prompt for the end result for when the player beat the game 
      

    cardsChosen = []
    cardsChosenId = []
    resultDisplay = []
}

// she made this code to make functional part to fliped the card 
// so here we used the push method to minulatpulate the array
// var cardId = this.getAttribute('data-id') this part was confusing

function flipcard() {
var cardId = this.getAttribute('data-id')
cardChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)

//
}