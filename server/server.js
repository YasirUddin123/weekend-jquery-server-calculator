console.log('My server is working!');

// This is our server history. The history is stored as an array inside of an object.
let history = {
    data: []
};

// This is our current total. The current total is stored as an object.
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

// Send server's data to our front-end client
app.get('/history', (req, res) => {
    console.log('in GET /history');
    res.send(history);
});

// Get a newNumber object from the client via data converted into req.body
// Then, add the newNumber object to server's history object.
app.post('/history', (req, res) => {
    console.log('in POST /history');
    // Console log to make sure req.body data works when coming in:
    console.log('req.body', req.body);
    // Call our function that performs our logic calculation
    // req.body is our argument; object is our parameter where the function is defined below.
    doCalculation(req.body);
    // Send the result of the math operation to client.
    res.send(currentTotal);
});

function doCalculation(object) {
    if(object.operator === '+'){
        sum = Number(object.firstNumber) + Number(object.secondNumber);
        // This is how we add the total as a new property to our req.body data
        object.total = sum;
        // This is how we updated our current total to be sent to client
        currentTotal.data = sum;
        // This is how we create and add our historical record on the server.
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
    // I wanted to log my history on the server to make it easy to see.
    console.log(history);

}

// Start server. Listen for requests.
app.listen(5000, function () {
    console.log('Our express server is running!');
});
