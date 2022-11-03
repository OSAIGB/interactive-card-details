
const help = document.querySelector('.numbers')
console.log(help)
const numbers = document.querySelector('.card-front')
console.log(numbers)
const inputs = document.querySelector('input')
console.log(inputs)
const numberInput = document.getElementById('cardnumber')
console.log(numberInput)
const month = document.querySelector('.expir-date')
console.log(month)
const year = document.querySelector('.expiry-yr')
console.log(year)
const cvc = document.getElementById('security-code')
console.log(cvc)
const submit = document.querySelector('button')
console.log(submit)
const error = document.querySelector('.input-error-message')
console.log(error)
const inputErrorMessage = document.querySelectorAll('.input-error-message')
console.log(inputErrorMessage)
const thankYou = document.querySelector('.thank-you')
const form = document.querySelector('form')
const successful = document.querySelector('.continue')





function preventSpace(input){
    if(/^\s/.test(input.value))
      input.value = '';
}
function preventSpace(numberInput){
    if(/^\s/.test(numberInput.value))
    numberInput.value = '';
}

inputs.addEventListener("keyup", myFunction);

function myFunction() {
  document.querySelector(".person").innerHTML = this.value.toUpperCase();
}

numberInput.addEventListener('keyup', cardInput);
function cardInput(){
    document.querySelector('.numbers').innerHTML = this.value;
}

month.addEventListener('keyup', keyUp);
function keyUp(){
    document.querySelector('.expiry-month').innerHTML = this.value;
}

year.addEventListener('keyup', makeUp);
function makeUp(){
    document.querySelector('.expiry-year').innerHTML = this.value;
}
cvc.addEventListener('keyup', security);
function security(){
    document.querySelector('.security-code').innerHTML = this.value;
}

// I honestly dont understand this regex statement. I am still learning it though
numberInput.addEventListener('input', () => {
    numberInput.value = numberInput.value.replace(/\D+/g, '').replace(/(.{4})/g, '$1 ').trim()
    // numberInput.innerText = cardNumberInput.value
})

month.addEventListener('input', () => {
    month.value = month.value.replace(/\D+/g, '').replace(/(.{4})/g, '$1 ').trim()
    // numberInput.innerText = cardNumberInput.value
})

year.addEventListener('input', () => {
    year.value = year.value.replace(/\D+/g, '').replace(/(.{4})/g, '$1 ').trim()
    // numberInput.innerText = cardNumberInput.value
})

cvc.addEventListener('input', () => {
    cvc.value = cvc.value.replace(/\D+/g, '').replace(/(.{4})/g, '$1 ').trim()
    // numberInput.innerText = cardNumberInput.value
})

inputs.addEventListener("keypress",function(event){
    if("abcdefghijklmnopqrstuvwxyz".indexOf(event.key.toLowerCase()) < 0)
        event.preventDefault();
})

// (/^[A-Za-z]+$/)

// function nameError(){
//     if (inputs.value.length < 10 || inputs.value.length > 25){
//         error.classList.add('inputss')
//         submit.style.color= "red"
//     }
// }
// submit.addEventListener('submit', nameError)

submit.addEventListener('click', (e) => {
    e.preventDefault()

    checkCardholderName()
    checkCardNumber()
    checkExpiryMonth()
    checkExpiryYear()
    checkCvc()
    // checkSecurityCode()

    if (checkCardholderName() && checkCardNumber() && checkExpiryMonth() && checkExpiryYear()) {
        form.style.display = 'none'
        thankYou.style.display = 'block'
    }
})

function checkCardholderName() {
    if (inputs.value.length < 5 || inputs.value.length > 25) {
        inputs.classList.add('input-error')
        inputErrorMessage[0].style.display = 'block'
    } else {
        inputs.classList.remove('input-error')
        inputErrorMessage[0].style.display = 'none'
        return true
    }
}

function checkCardNumber() {
    if (numberInput.value.length < 19) {
        numberInput.classList.add('input-error')
        inputErrorMessage[1].style.display = 'block'
    } else {
        numberInput.classList.remove('input-error')
        inputErrorMessage[1].style.display = 'none'
        return true
    }
}

function checkExpiryMonth() {
    if (month.value.length < 2 || month.value === '00' || month.value > 31) {
        month.classList.add('input-error')
        inputErrorMessage[2].style.display = 'block'
    } else {
        month.classList.remove('input-error')
        inputErrorMessage[2].style.display = 'none'
        return true
    }
}

function checkExpiryYear() {
    let currentYear = new Date().getFullYear()
    let currentYearToString = currentYear.toString()

    let lastTwoNumbers = currentYearToString.replace('20', '')

    if (year.value.length < 2 || year.value === '00' || year.value > lastTwoNumbers) {
        year.classList.add('input-error')
        inputErrorMessage[2].style.display = 'block'
    } else {
        year.classList.remove('input-error')
        inputErrorMessage[2].style.display = 'none'
        return true
    }
}

function checkCvc() {
    if (cvc.value.length < 3) {
        cvc.classList.add('input-error')
        inputErrorMessage[3].style.display = 'block'
    } else {
       cvc.classList.remove('input-error')
        inputErrorMessage[3].style.display = 'none'
        return true
    }
}

// function checkSecurityCode() {
//     if (securityCodeInput.value.length < 3) {
//         securityCodeInput.classList.add('input-error')
//         inputErrorMessage[3].style.display = 'block'
//     } else {
//         securityCodeInput.classList.remove('input-error')
//         inputErrorMessage[3].style.display = 'none'
//         return true
//     }
// }

successful.addEventListener('click', show);
function show(){
    thankYou.style.display = "none"
    form.style.display = "block"
}


// function alphaOnly() {
//     // let nameInput = document.querySelectorA('.inputs');
//     //   nameInput.forEach((input) => {
  
//         input.addEventListener('keydown', (e) => {
//           let charCode = e.keyCode;
  
//           if ((charCode >= 65 && charCode <= 90) || charCode == 8 || charCode == 32) {
//             null;
//           } else {
//             e.preventDefault();
//           }
//         })
//     }
      
    

// alphaOnly();