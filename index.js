let humanScore = 0;
let humanDisplayText = document.querySelector('#human-display-text')
let compScore = 0;
let computerDisplayText = document.querySelector('#computer-display-text')
let result = document.querySelector('.round-result')
let selectDiv = document.querySelector('.select-div')
let selectorBtns = document.querySelectorAll('button')

selectorBtns.forEach((btn) => btn.addEventListener('click', function(){
    let humanSelection = btn.textContent.toLowerCase()
    let computerSelection = getCompChoice()

    let winner = decideWinner(humanSelection, computerSelection) 
    if (winner === 1){
        humanWinsActions()
    } else if (winner === 0){
        compWinsActions()
    } else if (winner === -1){
        tieActions()
    }
    checkScore(5) //checks to see if either player has reached 5
}))
function decideWinner(humanScore, compScore){
    if (humanScore !== compScore){
        switch(humanScore){
            case 'rock':
                if (compScore === 'scissors'){
                    return 1
                }
                return 0
            case 'paper':
                if (compScore === 'rock'){
                    return 1
                }
                return 0
            case 'scissors':
                if (compScore === 'paper'){
                    return 1
                }
                return 0
        }
    }
    return -1
}
function checkScore(maxScore){
    if (humanScore === maxScore || compScore === maxScore){
        selectorBtns.forEach((btn) => btn.disabled = true)
        printFinalResult()
    }
}
function printFinalResult(){
    if (humanScore > compScore){
        return result.textContent = 'You won the whole game!'
    }
    return result.textContent = 'You lost the whole game!'
}
function humanWinsActions(){
    humanScore++
    humanDisplayText.textContent = `Your Score: ${humanScore}`
    result.textContent = 'You won the round!'
}
function compWinsActions(){
    compScore++
    computerDisplayText.textContent = `Computer Score: ${compScore}`
    result.textContent = 'You lost the round!'
}
function tieActions(){
    result.textContent = 'It was a tie'
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
    //result: return rock, paper, or scissors
}