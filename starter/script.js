'use strict';
/*
console.log(document.querySelector(".message").textContent);
 = 'Correct Number';
console.log(document.querySelector(".message").textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber  = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = Number(document.querySelector('.highscore').textContent);
//document.querySelector('.number').textContent = secretNumber;


document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random() * 20);
    highScore = Number(document.querySelector('.highscore').textContent);
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor= 'black';
    document.querySelector('.score').textContent = 20;
    score =20;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';

})
document.querySelector('.check').addEventListener
('click', function(){
   
const guess = Number(document.querySelector('.guess').value);


// when there is no input
if(!guess){
    document.querySelector('.message').textContent = 'No Number';
}else if(guess === secretNumber){
    document.querySelector('body').style.backgroundColor = 'rgb(34, 218, 28)';
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber;



    document.querySelector('.message').textContent = 'Correct Number';

    if(score > highScore)
    document.querySelector('.highscore').textContent = score;
   // when guess is too high
}else if(guess !== secretNumber){
    if(score > 0){

        document.querySelector('.message').textContent = guess > secretNumber?'Too High!': 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    }
    }else{
        document.querySelector('.message').textContent = 'You Lost the game!';
    }
    
})





