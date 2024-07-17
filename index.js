let humanScore = 0;
let compScore = 0;

function getHumanChoice(){

    let answerIsValid = false

    while (!answerIsValid){
        let userInput = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();

        answerIsValid = (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')

        //return the validated input
        if (answerIsValid){
            return userInput
        }
        //if not valid
        console.warn('input is not valid');
    }
    //result: return "rock", "paper", "scissors"
}

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
    //result: rock, paper, or scissors is randomly returned
}

function playGame(){

    while (humanScore < 5 && compScore < 5){
        playRound(getHumanChoice(), getCompChoice());
        printCurrentScore();
    }

    printFinalScore(humanScore, compScore);
}

function printCurrentScore(){
    console.log(`The current score is You: ${humanScore} Computer: ${compScore}`);
}

function printFinalScore(humanScore, compScore){
    if (humanScore > compScore){
        console.log(`You won ${humanScore} - ${compScore}!`);
    } else if (humanScore < compScore){
        console.log(`You lost ${compScore} - ${humanScore}!`);
    } else{
        console.log('It\'s a tie!');
    }
}

//create a function to play a round - args(compChoice, humanChoice)
function playRound(humanChoice, compChoice){

    if (humanChoice !== compChoice){
        switch(humanChoice){
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

//result: log 'you (lose/win)! (winning choice) beats (losing choice)!' or if the choice is the same output 'Great minds think alike, it's a tie!'
}

function printHumanWinsMsgAndIncScore(humanChoice, compChoice){
    console.log(`You win! ${humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1)} beats ${compChoice}!`); //correct sentence capitalization

    humanScore++;
}
function printHumanLosesMsgAndIncScore(humanChoice, compChoice){
    console.log(`You lose! ${compChoice.slice(0,1).toUpperCase() + compChoice.slice(1)} beats ${humanChoice}!`); //correct sentence capitalization

    compScore++;
}
function printTieMessage(){
    console.log('Great minds think alike, it\'s a tie!');
}

playGame();