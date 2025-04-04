const http = require('http') // Here we will Get the HTTP Module
const url = require('url') // Here we will Get the URL Module
const querystring = require('querystring') // Here we will Get the Query String Module

// Router Handler
// const routes = {
//     '/': (req, res) => {
//         res.writeHead(200, { 'content-Type': 'text/plain' }) // Here we will Set the Content Type and Set the Status Code
//         res.end('Hello, Mufasa') // Here we will End the Response with Hello, Mufasa
//     },
//     '/about': (req, res) => {
//         res.writeHead(200, { 'content-Type': 'text/plain' }) // Here we will Set the Content Type and Set the Status Code
//         res.end('About Page') // Here we will End the Response with About Page
//     },
//     './notfound': (req, res) => {
//         res.writeHead(404, { 'content-Type': 'text/plain' }) // Here we will Set the Content Type and Set the Status Code
//         res.end('Page Not Found') // Here we will End the Response with 404 Not Found
//     }
// }

// const server = http.createServer((req, res) => {

//     const { pathname } = url.parse(req.url) // Here we will Parse the URL and Get the Pathname

//     if (routes[pathname]) { // Here we will Check if the Route Exists
//         routes[pathname](req, res) // Here we will Call the Route Function
//     } else {
//         routes['/notfound'](req, res) // Here we will Call the Not Found Function
//     }

// })

// Here we will Create a Server using HTTP Module and Handling Dynamic Routes

// const server = http.createServer((req, res) => {

//     const { pathname } = url.parse(req.url)  // Here we will Parse the URL and Get the Pathname

//     if (pathname.startsWith('/user/')) {
//         const userId = pathname.split('/')[2] // Here we will Split the Pathname and Get the Name
//         res.writeHead(200, { 'content-Type': 'application/json' }) // Here we will Set the Content Type and Set the Status Code
//         res.end(`User ID : ${userId}`) // Here we will End the Response with User ID
//     } else {
//         res.writeHead(404, { 'content-Type': 'text/plain' }) // Here we will Set the Content Type and Set the Status Code
//         res.end('Page Not Found') // Here we will End the Response with 404 Not Found
//     }
// })

// Middleware Function for logging requests
// function logRequest(req, res, next) {
//     console.log(`${req.method} request made to ${req.url}`) // Here we will Log the Request Method and URL  
//     next(req, res) // Here we will Call the Next Function
// }

// const server = http.createServer((req, res) => {
//     logRequest(req, res, () => { // Here we will Call the Middleware Function

//     const { pathname } = url.parse(req.url)  // Here we will Parse the URL and Get the Pathname

//     if (pathname.startsWith('/user/')) {
//         const userId = pathname.split('/')[2] // Here we will Split the Pathname and Get the Name
//         res.writeHead(200, { 'content-Type': 'application/json' }) // Here we will Set the Content Type and Set the Status Code
//         res.end(`User ID : ${userId}`) // Here we will End the Response with User ID
//     } else {
//         res.writeHead(404, { 'content-Type': 'text/plain' }) // Here we will Set the Content Type and Set the Status Code
//         res.end('Page Not Found') // Here we will End the Response with 404 Not Found
//     }
//     })
// })

// Here we will Create a Server using HTTP Module and Handling URL-encoded Data

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') { // Here we will Check the Request Method and URL
        let body = '' // Here we will Create a Variable to Store the Body of the Request

        req.on('data', (chunk) => { // Here we will Listen to the Data Event and Append the Chunk to the Body Variable
            data += chunk.toString() // Here we will Convert the Buffer to String and Append to the Body Variable
        })

        req.on('end', () => { // Here we will Listen to the End Event and Send the Response
            const parsedData = querystring.parse(body) // Here we will Parse the URL-encoded Data
            res.writeHead(200, { 'content-Type': 'application/json' }) // Here we will Set the Content Type and Set the Status Code
            res.end(JSON.stringify({message: "From data received" ,parsedData})) // Here we will End the Response with the Parsed Data
        })
    }
})

// const server = http.createServer((req, res) => {
    // Here we will Create a Server using HTTP Module and Implemented GET and POST Method
    // if (req.method === 'GET' && req.url === '/') { // Here we will Check the Request Method and URL
    //     res.writeHead(200, {'Content-Type':'text/plain'}) // Here we will Set the Content Type and Set the Status Code
    //     res.end('Hello, Mufasa') // Here we will End the Response with Hello, Mufasa
    // } else {
    //     res.writeHead(404, {'Ccntent-Type':'text/plain'}) // Here we will Set the Content Type and Set the Status Code
    //     res.end('Page Not Found') // Here we will End the Response with 404 Not Found
    // }

    // if (req.method === 'POST' && req.url === '/submit') { // Here we will Check the Request Method and URL

    //     let body = '' // Here we will Create a Variable to Store the Body of the Request

    //     req.on('data', (chunk) => { // Here we will Listen to the Data Event and Append the Chunk to the Body Variable
    //         body += chunk.toString() // Here we will Convert the Buffer to String and Append to the Body Variable
    //     })

    //     req.on('end', () => { // Here we will Listen to the End Event and Send the Response
    //         res.writeHead(200, {'Content-Type': 'application/json'}) // Here we will Set the Content Type and Set the Status Code
    //         res.end(JSON.stringify({message:'Received data', data:body })) // Here we will End the Response with Received Data
    //     })

    // } else {
    //   res.writeHead(404, {'content-Type':'text/plain'}) // Here we will Set the Content Type and Set the Status Code
    //   res.end('Page Not Found') // Here we will End the Response with 404 Not Found  
    // }

    // Here we will Create a Server using HTTP Module and Implemented Hanadling Query Parameters

    // if (req.method === 'GET' && req.url.startsWith('/search')) { // Here we will Check the Request Method and URL

    //     const queryObject = url.parse(req.url, true).query // Here we will Parse the URL and Get the Query Parameters

    //     res.writeHead(200, { 'content-Type': 'application/json' }) // Here we will Set the Content Type and Set the Status Code
    //     res.end(JSON.stringify({ message: 'Query Parameters Received', queryObject })) // Here we will End the Response with Received Data

    // } else {
    //     res.writeHead(404, { 'content-Type': 'text/plain' }) // Here we will Set the Content
    //     res.end('Page Not Found') // Here we will End the Response with 404 Not Found
    // }

    // Here we will Create a Server using HTTP Module and Implemented Setting Response Headers

    // if (req.method === 'GET' && req.url.startsWith('/search')) {

    //     const queryObject = url.parse(req.url, true).query 

    //     res.writeHead(200, { 
    //         'Content-Type': 'application/json', 
    //         'custom-header': 'Node JS Server' ,
    //         'custom-tracking':'1234'
    //     }) 
    //     res.end(JSON.stringify({ message: 'Query Parameters Received', queryObject })) 

    // } else {
    //     res.writeHead(404, { 'content-Type': 'text/plain' })
    //     res.end('Page Not Found') 
    // }

// })

const PORT = 3000 // Here we will Provide the Port Number
server.listen(PORT, () => { //Here we will Provide the 2 Parameters i.e. Port Number and CallBack function
    console.log(`Server is running on port http://localhost:${PORT}`)
})// Here we will Listen the Server on the Port Number

// To run this File we run (node server.js) in the terminal