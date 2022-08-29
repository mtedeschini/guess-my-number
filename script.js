'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;
const displayMessage = message => document.querySelector('.message').textContent = message;

document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
        if(score > 1){

            //When there is no input
            if(!guess){ 
                displayMessage("⛔ No number");

            //When is too high or low
            }else if(guess !== secretNumber){
                displayMessage(guess > secretNumber ? "Lower..." : "Higher...");
                score--;
            
            //When player wins
            }else if(guess === secretNumber){
                document.querySelector('body').style.backgroundColor = "#60b347";
                displayMessage("🎉 Correct Number!");
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('.number').style.width = "30rem";
                if(score > highscore){
                    highscore = score;
                    document.querySelector('.highscore').textContent = highscore;
                }
            }
            document.querySelector('.score').textContent = score;
                    
        //When player lose
        }else{
            document.querySelector('body').style.backgroundColor = "red";
            displayMessage(`💥 You failed! Correct number was ${secretNumber}`);
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.check').disabled = true;
            document.querySelector('.check').textContent = "You Lost!";
            document.querySelector('.score').textContent = 0;
        }
    }
)

document.querySelector('.again').addEventListener
('click', function(){
    score = 5;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = "#222";
    displayMessage(`Start guessing...`);
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('.check').disabled = false;
    document.querySelector('.check').textContent = "Check!";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width="15rem";
    }
)