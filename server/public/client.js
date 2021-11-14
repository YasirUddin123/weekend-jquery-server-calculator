$(document).ready(onReady);

function onReady() {
    console.log('jQuery is working!');
    renderAddition();
    $('#clickAddButton').on('click', addOperator)
    $('#clickMinusButton').on('click', minusOperator)
    $('#clickMultiplicationButton').on('click', multiplyOperator)
    $('#clickDivisionButton').on('click', divideOperator)
    $('#clickEqualButton').on('click', handleEqualButtonClick);
    $('#clickClearButton').on('click', handleClearButtonClick)
}
let operator;
function addOperator() {
    operator = '+';
}
function minusOperator() {
    operator = '-';
}
function multiplyOperator() {
    operator = '*';
}
function divideOperator() {
    operator = '/';
}

// Grab the array from app.get and make the action to the dom.
function renderAddition(){
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then((response) => {
        console.log('response', response);
        $('#calculationHistory').empty();
        for(let number of response.data) {
            $('#calculationHistory').append(`
                <li>${number.firstNumber} ${number.operator} ${number.secondNumber} = ${number.total}</li>
            `)
        }
    }).catch((error) => {
        console.log('error', error);
    })
};

function handleEqualButtonClick() {
    let inputOne = $('#firstNumber').val();
    let inputTwo = $('#secondNumber').val()
    const newNumber = {
        firstNumber: inputOne,
        operator: operator,
        secondNumber: inputTwo,
    }
    // Takes the data from dom and send to the server
    $.ajax({
        method: 'POST',
        url: '/history',
        data: newNumber
    }).then((response) => {
        console.log('yay it worked!');
        $("#mostRecentCalculation").empty();
        $("#mostRecentCalculation").append(`
            Latest Calculation: ${response.data}
        `)
        renderAddition();
    }).catch((error) => {
        console.log('dang this did not work');
    })
};

function handleClearButtonClick() {
    $('#firstNumber').val('');
    $('#secondNumber').val('')
}
