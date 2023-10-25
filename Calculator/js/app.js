const displayPrevValue = document.getElementById('prev-value');
const displayPresValue = document.getElementById('pres-value');
const buttonsNumbers = document.querySelectorAll('.numbers');
const buttonsOper = document.querySelectorAll('.operador');
const display = new Display(displayPrevValue, displayPresValue);
buttonsNumbers.forEach(button => {
     button.addEventListener('click', () => display.addNumber(button.innerHTML));
});
buttonsOper.forEach( button => {
     button.addEventListener('click', () => display.compute(button.value));
})