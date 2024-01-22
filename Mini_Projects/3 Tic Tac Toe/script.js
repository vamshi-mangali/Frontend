<<<<<<< HEAD


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgcnt = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,7],
    [3,4,5],
    [6,7,8]  
]


resetBtn.addEventListener("click", () => { 
    msgcnt.style.display = "none";
    enableBoxes();
})

const enableBoxes = () => {
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const showWinner = (winner) => {
    msgcnt.style.display = "block";
    msg.innerText = `The winner is : ${winner}`;
    // msgcnt.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns){
       let pos1Val = boxes[pattern[0]].innerText ; 
       let pos2Val = boxes[pattern[1]].innerText ;
       let pos3Val = boxes[pattern[2]].innerText ;

       if (pos1Val != "" && pos2Val != ""  && pos3Val != "" ){
         if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            disableBoxes();
         }
       }
    }  
}

=======
<<<<<<< HEAD


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgcnt = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,7],
    [3,4,5],
    [6,7,8]  
]


resetBtn.addEventListener("click", () => { 
    msgcnt.style.display = "none";
    enableBoxes();
})

const enableBoxes = () => {
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const showWinner = (winner) => {
    msgcnt.style.display = "block";
    msg.innerText = `The winner is : ${winner}`;
    // msgcnt.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns){
       let pos1Val = boxes[pattern[0]].innerText ; 
       let pos2Val = boxes[pattern[1]].innerText ;
       let pos3Val = boxes[pattern[2]].innerText ;

       if (pos1Val != "" && pos2Val != ""  && pos3Val != "" ){
         if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            disableBoxes();
         }
       }
    }  
}

=======


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgcnt = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,7],
    [3,4,5],
    [6,7,8]  
]


resetBtn.addEventListener("click", () => { 
    msgcnt.style.display = "none";
    enableBoxes();
})

const enableBoxes = () => {
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const showWinner = (winner) => {
    msgcnt.style.display = "block";
    msg.innerText = `The winner is : ${winner}`;
    // msgcnt.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns){
       let pos1Val = boxes[pattern[0]].innerText ; 
       let pos2Val = boxes[pattern[1]].innerText ;
       let pos3Val = boxes[pattern[2]].innerText ;

       if (pos1Val != "" && pos2Val != ""  && pos3Val != "" ){
         if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            disableBoxes();
         }
       }
    }  
}

>>>>>>> a7a9ec0 (New changes made)
>>>>>>> cc4ae32 (changes updated)
