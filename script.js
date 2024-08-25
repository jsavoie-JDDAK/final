// Jamie Savoie - Assignment 2.1: The Building Blocks for Javascript - Functions

let player1Score = 0;
let player2Score = 0;

function battle() 
{
  
    const deck = [
        { name: "Card 1", value: 10, image: "images/j2.png"},
        { name: "Card 2", value: 12, image: "images/k2.png" },
        { name: "Card 3", value: 11, image: "images/q2.png" },
        { name: "Card 4", value: 8, image: "images/8.png" },
        { name: "Card 5", value: 9, image: "images/9.png" }
    ];

    const player1Card = deck[Math.floor(Math.random() * deck.length)];
    const player2Card = deck[Math.floor(Math.random() * deck.length)];

    document.getElementById("player1-card").src = player1Card.image;
    document.getElementById("player2-card").src = player2Card.image;

       let result = "";
    if (player1Card.value > player2Card.value) {
        player1Score++;
        result = "Player 1 Wins!";
    } else if (player2Card.value > player1Card.value) {
        player2Score++;
        result = "Player 2 Wins!";
    } else {
        result = "It's a Draw!";
    }

    document.getElementById("player1-score").textContent = "Score: " + player1Score;
    document.getElementById("player2-score").textContent = "Score: " + player2Score;
    document.getElementById("result").textContent = result;
}
