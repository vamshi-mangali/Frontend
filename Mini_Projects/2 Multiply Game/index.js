<<<<<<< HEAD

const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2 ;

let score = JSON.parse( localStorage.getItem("score") );

if( !score) score = 0;

scoreEl.innerText = `score: ${score}`;

formEl.addEventListener("submit", ()=> {
    const userAns = +inputEl.value;

    if(userAns == correctAns)  score++;
    else  score--;

    updateLocalStorage();  
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}




=======
<<<<<<< HEAD

const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2 ;

let score = JSON.parse( localStorage.getItem("score") );

if( !score) score = 0;

scoreEl.innerText = `score: ${score}`;

formEl.addEventListener("submit", ()=> {
    const userAns = +inputEl.value;

    if(userAns == correctAns)  score++;
    else  score--;

    updateLocalStorage();  
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}




=======

const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2 ;

let score = JSON.parse( localStorage.getItem("score") );

if( !score) score = 0;

scoreEl.innerText = `score: ${score}`;

formEl.addEventListener("submit", ()=> {
    const userAns = +inputEl.value;

    if(userAns == correctAns)  score++;
    else  score--;

    updateLocalStorage();  
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}




>>>>>>> a7a9ec0 (New changes made)
>>>>>>> cc4ae32 (changes updated)
