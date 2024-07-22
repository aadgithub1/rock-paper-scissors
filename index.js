let humanScore = 0;
let compScore = 0;
let selectDiv = document.querySelector('.select-div')
let selectorBtns = document.querySelectorAll('button')

selectorBtns.forEach((btn) => btn.addEventListener('click', function(){
    playRound(btn.textContent, getCompChoice())
}))

//


// Display the running score, and announce a winner of the game once one player reaches 5 points


function getCompChoice(){
    //generate a random number from 1 to 3
    let randomSelector = Math.floor(Math.random() * 3) + 1;

    if (randomSelector === 1){
        return "rock"
    }
    else if (randomSelector === 2){
        return "paper"
    }
    else if (randomSelector === 3){
        return "scissors"
    }
    //result: return rock, paper, or scissors
}


function playRound(humanChoice, compChoice){
    if (humanChoice !== compChoice){
        switch(humanChoice.toLowerCase()){
            case 'rock':
                if (compChoice === 'paper'){
                    printHumanLosesMsgAndIncScore(humanChoice, compChoice);
                } else if (compChoice === 'scissors'){
                    printHumanWinsMsgAndIncScore(humanChoice, compChoice);
                }
                break
            case 'paper':
                if (compChoice === 'rock'){
                    printHumanWinsMsgAndIncScore(humanChoice, compChoice);
                } else if (compChoice === 'scissors'){
                    printHumanLosesMsgAndIncScore(humanChoice, compChoice);
                }
                break
            case 'scissors':
                if (compChoice === 'rock'){
                    printHumanLosesMsgAndIncScore(humanChoice, compChoice);
                } else if (compChoice === 'paper'){
                    printHumanWinsMsgAndIncScore(humanChoice, compChoice);
                }
                break
        }
    } else{
        printTieMessage();
    }

//result: log win, loss, or tie message
}

function printHumanWinsMsgAndIncScore(humanChoice, compChoice){
    let msg = document.createElement('h2')
    msg.textContent = `You won! ${humanChoice} beats ${compChoice}`
    selectDiv.appendChild(msg)

    humanScore++;
}
function printHumanLosesMsgAndIncScore(humanChoice, compChoice){
    let msg = document.createElement('h2')
    msg.textContent = `You won! ${humanChoice} beats ${compChoice}`
    selectDiv.appendChild(msg)

    compScore++;
}
function printTieMessage(){
    console.log('Great minds think alike, it\'s a tie!');
}
