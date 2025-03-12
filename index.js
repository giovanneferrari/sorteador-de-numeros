const asideEl = document.querySelector('aside');
const buttonEl = document.querySelector('button');
const resultContainer = document.querySelector('.result-container');
const numberEl = document.querySelector('#quantity');
const resultNumberEl = document.querySelectorAll('.result-answer-number h2');
const fromEl = document.querySelector('#from');
const toEl = document.querySelector('#to');

console.log(numberEl)

buttonEl.onclick = (event) => {
    event.preventDefault();
    asideEl.style.animation = 'fadeOut 0.3s ease-in-out';
    asideEl.style.display = 'none';
    resultContainer.style.display = 'flex';
    calculateResult();

    for (let i = 0; i < resultNumberEl.length; i++) {
        const numberResultContainer = document.createElement('div');
        numberResultContainer.classList.add('result-answer-number');
        resultContainer.appendChild(numberResultContainer);
        const numberResult = document.createElement('h2');
        numberResultContainer.appendChild(numberResult);

        console.log(resultNumberEl[i])
    }
}

function calculateResult() {
    for (let i = 0; i < numberEl.value; i++) {
        let number = fromEl.value - Math.floor(Math.random() * toEl.value);
        resultNumberEl[i].innerHTML = number;
    }
}

