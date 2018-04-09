
var buttonBet = document.getElementById("ButtonBet");

var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");

var status = document.getElementById("status");
var balance = document.getElementById("balance");
var turnCount = document.getElementById("turnCount");
var money = 5;
var turn = 0;

var winStatus = "You have won!";
var loseStatus = "You have lost...";

function buttonClicked(){
    var ranNum1 = Math.floor(Math.random() * 6) + 1;
    var ranNum2 = Math.floor(Math.random() * 6) + 1;
    
    switch(ranNum1){
        case 1:
            image1.src = "./images/dice-1.jpg";
            break;
        case 2:
            image1.src = "./images/dice-2.jpg";
            break;
        case 3:
            image1.src = "./images/dice-3.jpg";
            break;
        case 4:
            image1.src = "./images/dice-4.jpg";
            break;
        case 5:
            image1.src = "./images/dice-5.jpg";
            break;
        case 6:
            image1.src = "./images/dice-6.jpg";
            break;
    }
    
    switch(ranNum2){
        case 1:
            image2.src = "./images/dice-1.jpg";
            break;
        case 2:
            image2.src = "./images/dice-2.jpg";
            break;
        case 3:
            image2.src = "./images/dice-3.jpg";
            break;
        case 4:
            image2.src = "./images/dice-4.jpg";
            break;
        case 5:
            image2.src = "./images/dice-5.jpg";
            break;
        case 6:
            image2.src = "./images/dice-6.jpg";
            break;
    }
    
    if(ranNum1 === ranNum2){
        Win();
    }
    else if((ranNum1 + ranNum2) === 7 || (ranNum1 + ranNum2) === 11){
        Win();
    }
    else{
        Lose();
    }
}

function Win(){
    money++;
    balance.innerHTML = money;
    status.innerHTML = winStatus;
    turn++;
    turnCount.innerHTML = turn;
}

function Lose(){
    money--;
    balance.innerHTML = money;
    status.innerHTML = loseStatus;
    turn++;
    turnCount.innerHTML = turn;
    
    if(money <= 0){
        status.innerHTML += "The game is now over, thanks for playing!";
        buttonBet.style.display = "block";
    }
}


