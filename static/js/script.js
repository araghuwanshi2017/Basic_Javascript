//challenge 1: Your Age in Days

function ageInDays(){
    var birthYear = prompt('What year were you born.... Good Friend?');
    var ageInDayss = (2018 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageInDayss);
    
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat Generator

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice){
    var humanChoice , botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice:',botChoice);
    results = decideWinner(humanChoice , botChoice); //[0 , 1] human_Lost | bot_Won
    message = finalMessage(results); //'{message: 'You_Won, 'color': 'green'} 
    console.log(message);
    rpsFrontEnd(yourChoice.id , botChoice , message);  
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice , computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    
    var yourScore , computerScore;
    yourScore = rpsDatabase[yourChoice][computerChoice];
    computerScore = rpsDatabase[computerChoice][yourChoice];

return [yourScore, computerScore]; 
}

function finalMessage(results){
    if(results[0] > results[1]) 
        return {'message': 'You won!', 'color': 'green'};
    else if(results[0] < results[1])
        return {'message': 'You lost!', 'color': 'red'};

    return {'message': 'You tied!', 'color': 'yellow'};
    
}
 
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    //Let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src = '" + imagesDatabase[humanImageChoice] + "' height = 150  width = 150 style=' box-shadow: 0px 10px 50px rgba(37 , 50, 233, 1);' >";
    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src = '" + imagesDatabase[botImageChoice] + "' height = 150  width = 150 style=' box-shadow: 0px 10px 50px rgba(243, 38, 24 , 1);' >";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

//Challenge 4: Change the Color of All Buttons!
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for(let i = 0;i < all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

// console.log(copyAllButtons);
function buttonColorChange(buttonThingy){
    if(buttonThingy.value == 'red'){
        buttonsRed();
    }
    else if(buttonThingy.value =='green'){
        buttonsGreen();
    }
    else if(buttonThingy.value == 'reset'){
        buttonsColorReset();
    }
    else
        randomColors();
}

function buttonsRed(){
    for(let i = 0;i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for(let i = 0;i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsColorReset(){
    for(let i = 0;i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    // console.log(choices);
    for(let i = 0;i < all_buttons.length;i++){
        let randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

//Challenge 5: Blackjack


let blackjackGame = {
    'you': {'scoreSpan': '#your-blackJack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackJack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2C', '2D', '2H','2S', '3C', '3D', '3H','3S', '4C', '4D', '4H','4S', '5C', '5D', '5H','5S', '6C', '6D', '6H','6S', '7C', '7D', '7H','7S', '8C', '8D', '8H','8S', '9C', '9D', '9H','9S', '10C', '10D', '10H','10S', 'AC', 'AD', 'AH','AS', 'JC', 'JD', 'JH','JS', 'QC', 'QD', 'QH','QS', 'KC', 'KD', 'KH','KS'],
    'cardsMap': {
        '2C':2, '2D':2, '2H':2,'2S':2,
        '3C':3, '3D':3, '3H':3,'3S':3,
        '4C':4, '4D':4, '4H':4,'4S':4,
        '5C':5, '5D':5, '5H':5,'5S':5,
        '6C':6, '6D':6, '6H':6,'6S':6,
        '7C':7, '7D':7, '7H':7,'7S':7,
        '8C':8, '8D':8, '8H':8,'8S':8,
        '9C':9, '9D':9, '9H':9,'9S':9,
        '10C': 10, '10D': 10, '10H': 10,'10S': 10,
        'AC': [1,11], 'AD': [1,11], 'AH': [1,11],'AS': [1,11],
        'JC': 10, 'JD': 10, 'JH': 10,'JS': 10,
        'QC': 10, 'QD': 10, 'QH': 10,'QS': 10, 
        'KC': 10, 'KD': 10, 'KH': 10,'KS': 10,
    },
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function blackjackHit(){
    if(blackjackGame['isStand'] == false){
        let card =randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*52);
    return blackjackGame['cards'][randomIndex];
    
}
 
function showCard(card, activePlayer){
    if(activePlayer['score'] <= 21) {

        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.jpg`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }  
}

function blackjackDeal(){
    if(blackjackGame['turnsOver'] == true){

        blackjackGame['isStand'] = false;
        // showResult(computeWinner());
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        console.log(yourImages);
        for(let i = 0;i < yourImages.length;i++)
            yourImages[i].remove();

        for(let i = 0;i < dealerImages.length;i++)
            dealerImages[i].remove();
    
        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';
    
        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = 'black';

        blackjackGame['turnsOver'] = false;

    }
    
}

function updateScore(card, activePlayer){
    if(card == "AC" || card == "AD" || card == "AS"|| card == "AH"){
    //If adding 11 keeps me below 21, add 11, Otherwise, add 1
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }
        else
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }
    else
        activePlayer['score'] += blackjackGame['cardsMap'][card];
}

function showScore(activePlayer) {
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic(){
    blackjackGame['isStand'] = true;

    while(DEALER['score'] < 16 && blackjackGame['isStand'] == true){

        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000 ); 
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

//Compute Winner and return who just won
//Update the wins, draws and losses
function computeWinner(){
    let winner;

    if(YOU['score'] <= 21){
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21)
        {
            console.log('You won!');
            winner = YOU;
            blackjackGame['wins']++;
        }
        else if(YOU['score'] < DEALER['score'])
        {
            console.log('You lost!');
            winner = DEALER;
            blackjackGame['losses']++;
        }
        else if(YOU['score'] == DEALER['score'])
        {
            blackjackGame['draws']++;
            console.log('You drew!');
        }
    }
    else if(YOU['score'] > 21 && DEALER['score'] <= 21)
    {
        blackjackGame['losses']++;
        console.log('You lost!');
        winner = DEALER;
    }
    else if(YOU['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['draws']++;
        console.log('You drew!');
    }

    console.log('Winner is',winner);

    return winner; 
}

function showResult(winner){ 

    let message, messageColor;
    if(blackjackGame['turnsOver'] == true){
        if(winner == YOU)
        {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        }
        else if(winner == DEALER)
        {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();        
        }
        else
        {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black';        
        }

        console.log(blackjackGame);
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}

