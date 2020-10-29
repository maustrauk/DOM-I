let startButton = document.createElement('button');
let resetButton = document.createElement('button');
startButton.textContent = "START";
startButton.style.fontSize = "2em";
resetButton.textContent = "RESET";
resetButton.style.fontSize = "2em";
document.querySelector('body').prepend(startButton);
document.querySelector('body').append(resetButton);

let digits = document.querySelector(".digits");
let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');

function timer (element) {
    let counter = parseInt(element.textContent);
    if (counter === 9) {
        counter = -1;
    }
    element.textContent = counter + 1;
}

function timerTimeOut (timer1, timer2, timer3, timer4) {
    console.log("timerOut");
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 1;
    digits.style.color = 'red';
    startButton.style.background = 'red';
}

let timer1;
let timer2;
let timer3;
let timer4;
let globalTimer;

startButton.addEventListener('click', () => {
    startButton.style.background = "green";
    digits.classList.add('counter-on');
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
    timer1 = setInterval(timer, 10, msTens);
    timer2 = setInterval(timer, 100, msHundreds);
    timer3 = setInterval(timer, 1000, secondOnes);
    timer4 = setInterval(timer, 10000, secondTens);
    globalTimer = setTimeout(timerTimeOut, 10000, timer1, timer2, timer3, timer4);
});

resetButton.addEventListener('click', () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearTimeout(globalTimer);
    startButton.style.background = "yellow";
    resetButton.style.background = "yellow";
    digits.classList.remove('counter-on');
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
})


