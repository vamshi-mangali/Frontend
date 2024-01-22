

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScoreText = document.getElementById("user-score");
const compScoreText = document.getElementById("comp-score");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id");
        const compChoice = genCompChoice();
        playGame(userChoice, compChoice);
    })
})

const playGame = (userChoice, compChoice) => {

    console.log( `Your choice = ${userChoice}`)
    console.log( `Comp choice = ${compChoice}`)

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true ;
        }
        else {
            userWin = compChoice === "rock" ? false : true ;
        }
        
        showWinner(userWin, userChoice, compChoice) ;
    }

}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

const drawGame = () => {
    console.log("Game was a Draw.");
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Game was a draw. Play Again"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreText.innerText = `${userScore}`;
        console.log("You win!");
        msg.style.backgroundColor = "Green";
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    } 
    else {
        compScore++;
        compScoreText.innerText = `${compScore}`;
        console.log("You lose!");
        msg.style.backgroundColor = "Orange";
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    }
}