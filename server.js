const http = require('http'); // step 1: import http module
const { sendFormPage } = require("./routes"); // import sendFormPage function
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// step 2 create the server
server = http.createServer((req, res) => {
    let reqBody = ''; // variable to collect the body string

    // listen for data chunks and concatenate them to reqBody
    req.on('data', (chunk) => {
        reqBody += chunk;
    })

    // when the entire body has been received (end event)
    req.on('end', () => {
        if (reqBody) {
            // parse the body if it's present
            req.body = parseBody(reqBody);
        } else {
            req.body = {}; // set to an empty object if no body is present
        }

        // pass the request and response to sendFormPage
        sendFormPage(req, res);
    })
})

// step 3: make the server listen on port 5000
const port = 2500;
server.listen(port, () => {
    console.log(`Successfully started the server on port ${port}`); // log the message
})

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
