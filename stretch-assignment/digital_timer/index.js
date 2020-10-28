let startButton = document.createElement('button');
startButton.textContent = "START";
startButton.style.fontSize = "2em";
document.querySelector('body').prepend(startButton);

let digits = document.querySelectorAll(".digit");
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


function myTimer () {
    
    startButton.disabled = true;

    function final () {
        clearInterval(msTenstimer);
        clearInterval(msHundredstimer);
        clearInterval(secondOnestimer);
        clearInterval(secondTenstimer);
        msHundreds.textContent = 0;
        msTens.textContent = 0;
        digits.forEach(digit => digit.style.color = 'red');
        startButton.disabled = false;
    }
    

    secondTens.textContent = 0;
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;

    let msTenstimer = setInterval(timer, 10, msTens);
    let msHundredstimer = setInterval(timer, 100, msHundreds);
    let secondOnestimer = setInterval(timer, 1000, secondOnes);
    let secondTenstimer = setInterval(timer, 10000, secondTens);

    setInterval(final, 10000);
}

startButton.addEventListener('click', myTimer);


