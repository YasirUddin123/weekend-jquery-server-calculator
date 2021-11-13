// Let's keep it simple. Let me create a baby step.
// The first step will take the first number input and
// When '=' is clicked, the input will be captured, bundled up in an object
// and will be sent to the server via a POST.
$(document).ready(onReady);

function onReady() {
    console.log('jQuery is working!');
    renderFirstNumber();
    $('#clickEqualButton').on('click', handleEqualButtonClick);
}

function renderFirstNumber(){
    $.ajax({
        method: 'GET',
        url: '/firstnumber'
    }).then((response) => {
        console.log('response', response);
        $('#calculationHistory').empty();
        for(let number of response) {
            $('#calculationHistory').append(`
                <li>${number.output}</li>
            `)
        }
    }).catch((error) => {
        console.log('error', error);
    })
};

function handleEqualButtonClick() {
    const newNumber = {
        output: $('#firstNumber').val()
    }
    $.ajax({
        method: 'POST',
        url: '/firstnumber',
        data: newNumber
    }).then((response) => {
        console.log('yay it worked!');
        renderFirstNumber();
    }).catch((error) => {
        console.log('dang this did not work');
    })
};
