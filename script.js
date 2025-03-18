let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let newGameBtn2 = document.querySelector("#new-btn2");
let msgContainer = document.querySelector(".msg-container");
let drawContainer = document.querySelector(".draw-container");    
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");

let turnO =  true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            count++;
            
        }else {
            box.innerText = "X";
            turnO = true;
            count++;
            
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = "Congratulations, Winner is " + (winner);
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}; 
const showDraw = () => {
    msg2.innerText = "Its a Draw!";
    drawContainer.classList.remove("hide");
    disableBoxes();

} 

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide"); 
    drawContainer.classList.add("hide");
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if (posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if (posVal1 === posVal2 && posVal1 === posVal3 && posVal2 === posVal3) {
                console.log("Winner", posVal1);
                console.log(count);
                showWinner(posVal1);
            }if(count === 9){
                console.log("Draw");
                showDraw();
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
newGameBtn2.addEventListener("click", resetGame);