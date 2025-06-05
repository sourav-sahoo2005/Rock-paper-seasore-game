let compscore = 0;
let yourscore = 0;

const choices = document.querySelectorAll('.icon');
const displaymsg = document.getElementById("msg");
const ysc = document.getElementById("ysc");
const csc = document.getElementById("csc");
const restartbtn = document.getElementById("restartbtn");

restartbtn.addEventListener("click", () => {
    ysc.innerText = 0;
    csc.innerText = 0;
    compscore = 0;
    yourscore = 0;
    displaymsg.innerText = "Enjoy your turn";
    displaymsg.style.backgroundColor = "black";
})
const compChoice = () => {
    let item = ["rock", "paper", "scissors"];
    let itemidx = Math.floor(Math.random() * 3);
    return item[itemidx];
}
const playGame = (userchoice) => {
    // console.log("Userchoice is", userchoice);

    let compchoice = compChoice();
    // console.log("Computer choice is ", compchoice);

    if (compchoice == userchoice) {

        displaymsg.innerText = "Game Drow Please Play Again";
        displaymsg.style.backgroundColor = "blue";


    } else if (userchoice == "rock" && compchoice == "paper") {
        displaymsg.innerText = "You Lose! paper bits your rock";
        displaymsg.style.backgroundColor = "red";

        compscore++;
        csc.innerText = compscore;

    } else if (userchoice == "paper" && compchoice == "scissors") {
        displaymsg.innerText = "You Lose! scissors bits your paper";
        displaymsg.style.backgroundColor = "red";

        compscore++
        csc.innerText = compscore;

    } else if (userchoice == "scissors" && compchoice == "rock") {
        displaymsg.innerText = "You Lose! rock bits your scissors";
        displaymsg.style.backgroundColor = "red";

        compscore++
        csc.innerText = compscore;


    } else if (userchoice == "rock" && compchoice == "scissors") {
        displaymsg.innerText = "You Won! rock bits comp scissors"
        displaymsg.style.backgroundColor = "green"

        yourscore++
        ysc.innerText = yourscore;

    } else if (userchoice == "paper" && compchoice == "rock") {
        displaymsg.innerText = "You Won! paper bits comp rock"
        displaymsg.style.backgroundColor = "green"

        yourscore++;
        ysc.innerText = yourscore;

    } else if (userchoice == "scissors" && compchoice == "paper") {
        displaymsg.innerText = "You Won! scissors bits comp paper";
        displaymsg.style.backgroundColor = "green";

        yourscore++;
        ysc.innerText = yourscore;

    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})