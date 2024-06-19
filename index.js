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


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if((humanChoice==="rock"&&computerChoice==="scissors") || 
    (humanChoice==="scissors"&&computerChoice==="paper")||
    (humanChoice==="paper"&&computerChoice==="rock")){
        resultMessage.textContent=`You win! ${humanChoice} beats ${computerChoice}`;
        document.body.appendChild(resultMessage);
        return humanScore++;
    }else if(humanChoice===computerChoice){
        resultMessage.textContent="It's tie! ";
        document.body.appendChild(resultMessage);
        //when it's not tie or win, then the only case left is "computer Win"
    }else{
        resultMessage.textContent=`You lose! ${computerChoice} beats ${humanChoice}`;
        document.body.appendChild(resultMessage);
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

const rockBtn=document.querySelector('#rockButton');
const paperBtn=document.querySelector('#paperButton');
const scissorsBtn=document.querySelector('#scissorsButton');

const resultMessage=document.createElement('div');

const scores=document.createElement('div');

const btnsContainer=document.querySelector('.buttonContainer');
btnsContainer.addEventListener('click',(event)=>{
    scores.textContent='';
    let humanChoice=(event.target.textContent).toLowerCase();
    playRound(humanChoice,getComputerChoice());
    scores.textContent=`Your Score:${humanScore} Computer Score:${computerScore}`;
    document.body.appendChild(scores);

    winnerAnnounce();
})

function winnerAnnounce(){
    if(humanScore===5){
        scores.textContent='You won 5 rounds! Congratulations!'
        humanScore=0;
        computerScore=0;
    }else if(computerScore===5){
        scores.textContent='Computer got 5 rounds! You lost by computer! Keep it up!'
        computerScore=0;
        humanScore=0;
    }
}
