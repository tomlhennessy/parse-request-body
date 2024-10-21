const http = require('http'); // step 1: import http module
const { sendFormPage } = require("./routes"); // import sendFormPage function
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// step 2 create the server
server = http.createServer((req, res) => {
    // log the method and the URL of the incoming request
    console.log(`${req.method} ${req.url}`);

    sendFormPage(req, res); // use sendFormPage from routes.js to handle requests
})

// step 3: make the server listen on port 5000
const port = 5000;
server.listen(port, () => {
    console.log(`Successfully started the server on port ${port}`); // log the message
})

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
