const http = require('http');  

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('{Welcome to our homepage}');  // Writing the response for the root URL.
        res.end();  // Ending the response.
    }

    // Check if the request URL is '/about'
    else if (req.url === '/about') {
        res.end('myself prajyot');  // Responding with some information.
    }

    // If the URL doesn't match either of the above routes, return a 404 error message.
    else {
        res.end(`<h1>ERROR 404</h1>`);  // Returning a simple HTML message.
    }
});

// Start the server and listen for incoming requests on port 5000
server.listen(5000);
