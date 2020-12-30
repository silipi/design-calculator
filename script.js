const buttons = document.querySelectorAll('button');
const visor = document.querySelector('#visor');
const memVisor = document.querySelector('#memoriaVisor');
let visorPrev;
let operation;

const updateVisor = (value) => {
  if (visor.innerText === '0') {
    visor.innerText = '';
  }
  visor.innerText = visor.innerText + value; 
}
// TO-DO
const updateMemoryVisor = () => {

}

const clearVisor = () => {
  visor.innerHTML = '0';
}

const handleOperation = (operation, val1, val2) => {
  switch (operation) {
    case "+":
      return +val1 + +val2;
    case "-":
      return +val1 - +val2;
    case "x":
      return +val1 * +val2;
    case "÷":
      if (+val2 === 0) {
        alert("Não é possível realizar divisão por 0 (zero).");
      }
      return +val1 / +val2;
  }
}

const handlePercentage = (value) => {
  return +value / 100;
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('number')) {
      updateVisor(btn.innerText);
    }

    if (btn.classList.contains('clear')) {
      clearVisor();
    }

    if (btn.classList.contains('operator')) {
      visorPrev = visor.innerText;
      operation = btn.innerText;
      clearVisor();
    }

    if (btn.classList.contains('equals') && visorPrev !== '') {
      visor.innerText = handleOperation(operation, visorPrev, visor.innerText);
    }

    if (btn.classList.contains('dot') && visor.innerText !== '') {
      if (!visor.innerText.includes('.')) {
        visor.innerText = visor.innerText + '.';
      }
    }

    if (btn.classList.contains('percentage') && +visor.innerText !== 0) {
      visor.innerText = handlePercentage(visor.innerText);
    }

    if (btn.classList.contains('delete')) {
      if (+visor.innerText !== 0 && visor.innerText.length > 1) {
        visor.innerText = visor.innerText.slice(0,-1);
      } else {
        visor.innerText = 0;
      }
    }
  })
});