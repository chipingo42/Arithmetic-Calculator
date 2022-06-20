const number1 = document.getElementById('num1')
const number2 = document.getElementById('num2')
const ADD = document.getElementById('Add')
const sub = document.getElementById('Sub')
const mult = document.getElementById('Multy')
const div = document.getElementById('Div')
const result = document.getElementById('result')









// ADD function 
ADD.addEventListener('click', () => {
    result.value = parseInt(number1.value)+parseInt(number2.value)
})

sub.addEventListener('click', () => {
    result.value = parseInt(number1.value)-parseInt(number2.value)
})

mult.addEventListener('click', () => {
    result.value = parseInt(number1.value)*parseInt(number2.value)
})

div.addEventListener('click', () => {
    result.value = parseInt(number1.value)/parseInt(number2.value)
})


