//this code allows a user to play roc, paper, scissors
//against the computer

//explain the problem

//plan

//UI? --> all console

//what are the inputs? where are we getting them? where are we storing them? --> create values in getCompScore and taking using input from prompt()

//what is the desired output? --> the computer's choice, the result of the game, the current score

//what steps are needed to get from inputs to outputs? (pseudocode)

let humanScore = 0;
let compScore = 0;

function getHumanChoice(){

    let answerIsValid = false

    while (!answerIsValid){
        //get user input and store in the var "user input"
        let userInput = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();

        //check to see whether the user input is valid - needs to be 'rock', 'paper', or 'scissors'
        answerIsValid = (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')

        //return the validated input
        if (answerIsValid){
            return userInput
        }

        //if not valid
        //warn. let user re-enter input
        console.warn('input is not valid');
    }
    //result: return "rock", "paper", "scissors"
}

function getCompChoice(){
    //generate a random number from 1 to 3
    let randomSelector = Math.floor(Math.random() * 3) + 1;

    //if random number is 1
        //return rock
    if (randomSelector === 1){
        return "rock"
    }
    //if random number is 2
        //return paper
    else if (randomSelector === 2){
        return "paper"
    }
    //if random number is 3
        //return scissors
    else if (randomSelector === 3){
        return "scissors"
    }
    //result: r, p, s is randomly returned
}

//create a function to play a game
//keep a count of the number of games
//while less than 5 games have been played keep playing

function playGame(){

    while (humanScore < 5 && compScore < 5){
        playRound(getHumanChoice(), getCompChoice());
        printCurrentScore();
    }

    printFinalScore(humanScore, compScore);
}

//create a helper function print the score each round and has a difference message for the final round
function printCurrentScore(){
    console.log(`The current score is You: ${humanScore} Computer: ${compScore}`);
}


//helper function to print the final score
//determine who has more points; print appropriate message

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

//compare compChoice and humanChoice
//if the two choices are different
    //if human wins, log human win msg; increment humanScore 
    //else log human lose msg; increment compScore
        //decide victor function:
        //create cases for all possible decisions for human
        //compare possible, different comp choices in each case
        //log appropriate message and increment appropriate score using helper function
//else log a tie message

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


//create helper function to print a message when human wins and increment human score
function printHumanWinsMsgAndIncScore(humanChoice, compChoice){
    console.log(`You win! ${humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1)} beats ${compChoice}!`); //correct sentence capitalization

    humanScore++;
}
//create helper function to print a message when human loses and increment comp score
function printHumanLosesMsgAndIncScore(humanChoice, compChoice){
    console.log(`You lose! ${compChoice.slice(0,1).toUpperCase() + compChoice.slice(1)} beats ${humanChoice}!`); //correct sentence capitalization

    compScore++;
}
//create helper function to print a message when human and comp tie
function printTieMessage(){
    console.log('Great minds think alike, it\'s a tie!');
}

playGame();