// Now my third goal is to make a single mathematical operation work.
// I am focused on addition.

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

// grab the array from app.get and make the action to the dom.
function renderAddition(){
    $.ajax({
        method: 'GET',
        url: '/addition'
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
    // takes the data from dom and send to the server
    $.ajax({
        method: 'POST',
        url: '/addition',
        data: newNumber
    }).then((response) => {
        console.log('yay it worked!');
        $("#mostRecentCalculation").empty();
        $("#mostRecentCalculation").append(`
            Latest Calculation: ${response.data}
        `)
        renderAddition();
        handleClearButtonClick();
    }).catch((error) => {
        console.log('dang this did not work');
    })
};

function handleClearButtonClick() {
    $('#firstNumber').val('');
    $('#secondNumber').val('')
}

// function getSum() {
//     $('#clickAddButton').on('click', function(){
//     let inputOne = $('#firstNumber').val();
//     let inputTwo = $('#secondNumber').val();
//     })
// }

// -------- LIST OUT SUM WITH EQUAL BTN -------------
// function renderAddition(){
//     $.ajax({
//         method: 'GET',
//         url: '/addition'
//     }).then((response) => {
//         console.log('response', response);
//         $('#calculationHistory').empty();
//         for(let number of response) {
//             $('#calculationHistory').append(`
//                 <li>${number.addition}</li>
//             `)
//         }
//     }).catch((error) => {
//         console.log('error', error);
//     })
// };
// function handleEqualButtonClick() {
//     let inputOne = $('#firstNumber').val();
//     let inputTwo = $('#secondNumber').val()
//     const newNumber = {
//         addition: Number(inputOne) + Number(inputTwo)
//     }
//     $.ajax({
//         method: 'POST',
//         url: '/addition',
//         data: newNumber
//     }).then((response) => {
//         console.log('yay it worked!');
//         renderAddition();
//     }).catch((error) => {
//         console.log('dang this did not work');
//     })
// };



// -------- LIST OUT TWO NUMBERS WITH EQUAL BTN -------------
// function renderFirstAndSecondNumber(){
//     $.ajax({
//         method: 'GET',
//         url: '/firstandsecondnumber'
//     }).then((response) => {
//         console.log('response', response);
//         $('#calculationHistory').empty();
//         for(let number of response) {
//             $('#calculationHistory').append(`
//                 <li>${number.firstNumber} ${number.secondNumber}</li>
//             `)
//         }
//     }).catch((error) => {
//         console.log('error', error);
//     })
// };
// function handleEqualButtonClick() {
//     handlePlusButton()
//     const newNumber = {
//         firstNumber: $('#firstNumber').val(),
//         secondNumber: $('#secondNumber').val()
//     }
//     $.ajax({
//         method: 'POST',
//         url: '/firstandsecondnumber',
//         data: newNumber
//     }).then((response) => {
//         console.log('yay it worked!');
//         renderFirstAndSecondNumber();
//     }).catch((error) => {
//         console.log('dang this did not work');
//     })
// };
