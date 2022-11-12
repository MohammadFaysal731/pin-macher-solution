function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
};
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

};
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('types-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typesNumbers = document.getElementById('types-numbers').value;
    const successMassage = document.getElementById('notify-success');
    const failErro = document.getElementById('notify-fail');
    if (pin == typesNumbers) {
        successMassage.style.display = 'block';
        failErro.style.display = 'none';
    }
    else {
        successMassage.style.display = 'none';
        failErro.style.display = 'block';
    }
}
