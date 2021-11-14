// Now my second goal is to make sure the second number is captured
// in the same mannas the first number.

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is working!');
    renderFirstNumber();
    $('#clickEqualButton').on('click', handleEqualButtonClick);
}

function renderFirstNumber(){
    $.ajax({
        method: 'GET',
        url: '/firstandsecondnumber'
    }).then((response) => {
        console.log('response', response);
        $('#calculationHistory').empty();
        for(let number of response) {
            $('#calculationHistory').append(`
                <li>${number.firstNumber} ${number.secondNumber}</li>
            `)
        }
    }).catch((error) => {
        console.log('error', error);
    })
};

function handleEqualButtonClick() {
    const newNumber = {
        firstNumber: $('#firstNumber').val(),
        secondNumber: $('#secondNumber').val()
    }
    $.ajax({
        method: 'POST',
        url: '/firstandsecondnumber',
        data: newNumber
    }).then((response) => {
        console.log('yay it worked!');
        renderFirstNumber();
    }).catch((error) => {
        console.log('dang this did not work');
    })
};
