# jQuery Server Calculator

In this project, I am building a server-side calculator. The logic for the calculator is implemented on the server.

## Description

The calculator has the following user interface:

    * 2 numbers as user input values
    * 4 mathematical operations (+, -, *, and ÷)
    * 1 submit button (= button)
    * 1 clear button (C button)

When the submit/= button is submitted, the user input values are captured, bundled in an object, and the object is sent to the server via a POST. the clear/C button will clear the user input values.

On the server side, logic is built out to compute the numbers as appropriate. The server can handle addition, subtraction, multiplication, and division.

When the calculation is complete, an OK will be sent back. After the POST, a GET request will be made to get the actual calculation.

A historical record of all math operations and solutions will be kept on the server. A list of all previous calculations will be displayed on the page when it loads using a GET request. The list is updated every time a new calculation is made.

In this project, the history will exist even after refreshing the page. The history will go away after restarting the server.