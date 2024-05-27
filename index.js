let rock="rock";
let scissors="scissors";
let paper="paper";
// Generate random number to randomly return rock sissores paper
function randomNumberGenerator(){
    return Number(Math.floor(Math.random()*3));
}

function getComputerChoice(){
    let randomNumber=randomNumberGenerator();

    if (randomNumber===2){
        return rock;
    }else if(randomNumber===1){
    return paper;
    }else{
        return scissors;
    }
}

function getHumanChoice() {
    let humanChoice;
    // Prompt the user for input
    humanChoice = prompt("Let's play Rock Scissors and Paper with me!");
    // Return the user's input
    return humanChoice;
}
// Log the result of the function to the console

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let validHumanChoice;
    validHumanChoice=humanChoice.toLowerCase();
    if((validHumanChoice==="rock"&&computerChoice==="scissors") || (validHumanChoice==="scissors"&&computerChoice==="paper")||(validHumanChoice==="paper"&&computerChoice==="rock")){
        console.log(`You win! ${validHumanChoice} beats ${computerChoice}`);
        return humanScore++;
    }else if(validHumanChoice===computerChoice){
        console.log("It's tie! ");
        //when it's not tie or win, then the only case left is "computer Win"
    }else{
        console.log(`You lose! ${computerChoice} beats ${validHumanChoice}`);
        return computerScore++;
    }
}



function playAnotherRound(){
    const computerSelection=getComputerChoice();
    const humanSelection=getHumanChoice();
    playRound(humanSelection, computerSelection);
    console.log("Computer Score:",computerScore);
    console.log("Your Score:", humanScore);
}

function playFiveRounds(){
    playAnotherRound();
    playAnotherRound();
    playAnotherRound();
    playAnotherRound();
    playAnotherRound();
}

playFiveRounds();