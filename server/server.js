// Now my third goal is to make a single mathematical operation work.
// I am focused on addition.

console.log('My server is working!');

let addition = [];

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
app.get('/addition', (req, res) => {
    console.log('in GET /addition');
    res.send(addition);
});

// Get a firstNumber object from the client.
    // Example: { number: 2 };
// Then, add the object to firstNumber array.
app.post('/addition', (req, res) => {
    console.log('in POST /addition');
    // Console log to make sure req.body data works when coming in:
    console.log('req.body', req.body);
    // Push req.body data into firstNumber array;
    addition.push(req.body);
    // Send HTTP Status Code 201 to client. This code means:
        // The client's request is complete and enabled a new resource created.
    res.sendStatus(201);
});

// Start server. Listen for requests.
app.listen(5000, function () {
    console.log('Our express server is running!');
});
