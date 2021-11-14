// Now my third goal is to make a single mathematical operation work.
// I am focused on history.

console.log('My server is working!');

let history = {
    data: []
};

let currentTotal = {
    data: 0
}

// I am loading the express library from node_modules/express
const express = require('express');

// I am creating my server. I am assigning it the variable name 'app'.
const app = express();

// Now I need to tell express where to find the public files.
app.use(express.static('./server/public'))

// I need the ability to "read" HTTP request BODY data if it comes up as JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Send the firstNumber array to our front-end
app.get('/history', (req, res) => {
    console.log('in GET /history');
    res.send(history);
});

// Get a firstNumber object from the client.
    // Example: { number: 2 };
// Then, add the object to firstNumber array.
// grabs the ajax post data and does whatever it needs to do
// to put on server side (aka put in array)
app.post('/history', (req, res) => {
    console.log('in POST /history');
    // Console log to make sure req.body data works when coming in:
    console.log('req.body', req.body);
    doCalculation(req.body);
    // Push req.body data into firstNumber array;
    // Send HTTP Status Code 201 to client. This code means:
        // The client's request is complete and enabled a new resource created.
    res.send(currentTotal);
});

function doCalculation(object) {
    if(object.operator === '+'){
        sum = Number(object.firstNumber) + Number(object.secondNumber);
        object.total = sum;
        currentTotal.data = sum;
        history.data.push(object);
    }
    else if(object.operator === '-'){
        subtraction = Number(object.firstNumber) - Number(object.secondNumber);
        object.total = subtraction;
        currentTotal.data = subtraction;
        history.data.push(object);
    }
    else if(object.operator === '*'){
        multiplication = Number(object.firstNumber) * Number(object.secondNumber);
        object.total = multiplication;
        currentTotal.data = multiplication;
        history.data.push(object);
    }
    else if(object.operator === '/'){
        division = Number(object.firstNumber) / Number(object.secondNumber);
        object.total = division
        currentTotal.data = division;
        history.data.push(object);
    }
    console.log(history);

}

// Start server. Listen for requests.
app.listen(5000, function () {
    console.log('Our express server is running!');
});
