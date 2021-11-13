// Let's keep it simple. Let me create a baby step.
// The first step will take the first number input and
// When '=' is clicked, the input will be captured, bundled up in an object
// and will be sent to the server via a POST.

console.log('My server is working!');

let firstNumber = [];

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
app.get('/firstnumber', (req, res) => {
    console.log('in GET /firstnumber');
    res.send(firstNumber);
});

// Get a firstNumber object from the client.
    // Example: { number: 2 };
// Then, add the object to firstNumber array.
app.post('/firstnumber', (req, res) => {
    console.log('in POST /firstnumber');
    // Console log to make sure req.body data works when coming in:
    console.log('req.body', req.body);
    // Push req.body data into firstNumber array;
    firstNumber.push(req.body);
    // Send HTTP Status Code 201 to client. This code means:
        // The client's request is complete and enabled a new resource created.
    res.sendStatus(201);
});

// Start server. Listen for requests.
app.listen(5000, function () {
    console.log('Our express server is running!');
});
