// Facts and images 

const facts = [
    'Won the F1 Drivers Championship in 2022, 2023, and 2024',
    'Considered the lead driver for Mercedes',
    'Has won seven times in his F1 career',
    'Maiden win in Miami',
    'Jules Bianchi god son',
    'Won his first F1 champisonship at the age of 23',
    'Did not have his drivers license when annouced as a new F1 driver',
    'First ever Grand Prix was in 2001',
]

let factCard = facts;
console.log(factCard);

const images = [
    '../assets/images/verstappen.jpg',
    '../assets/images/russel.jpg',
    '../assets/images/piastri.jpg',
    '../assets/images/norris.jpg',
    '../assets/images/le-clerc.jpg',
    '../assets/images/hamilton.jpg',
    '../assets/images/antonelli.jpg',
    '../assets/images/alonso.jpg',
]

let imageCard = images;
console.log(imageCard);

let cardSet = factCard.concat(imageCard); // Combine the two arrays containing the image and facts to be matched
console.log(cardSet); // Log the combined arrays 


// Wait for the DOM to finish loading before running the game
// get the button elements and add event listeners
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "start") {
                shuffleCards();
                console.log("Time to shuffle")
            }
        });
    }
});

function shuffleCards() {}

/**
 * Check user answer 
 */

function checkAnswer() {

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementMatchedCards() {

}

function reduceAttemptsLeft() {

}

function displayCard() {

}