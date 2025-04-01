// <--------------------------------- Read File Using File System ---------------------------------------->
// const fs = require('fs') // Here we are gating the file System

// fs.readFile('example.txt','utf8',(err,data)=>{
//     if (err) {
//         console.error(err)
//         return;
//     }
//     console.log(data);
// })

// <---------------------------------- Write the file using File Syatem ---------------------------------------->

// const fs = require('fs')

// const content = 'Hello, NodeJs'

// fs.writeFile('output.txt', content, (err) => {
//     if (err) {
//         console.error(err)
//         return;
//     }
//     console.log('File written successfully')
// })

// <------------------------------------ HTTP Module --------------------------------------->

// const http = require('http') // Here we will Get the HTTP Module


// Here we will Create a simmple Server Using HIIP module

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello, Mufasa')
// })

// // Here we use the Server Object to Create the Server
// server.listen(3000,()=>{ //Here we will Provide the 2 Parameters i.e. Port Number and CallBack function
//     console.log('Server is running on port http://localhost:3000')
// })

// <---------------------------------------- Path Module --------------------------------------------->

// const path = require('path') // Here we will Get the PATH Module

// // Here we will see one comman example where we will Join and resolve the Path
// const directory = '/user/local'
// const fileName = 'example.txt'

// // to get the full Path we will Use the Path Module
// const fullPath = path.join(directory,fileName) // "path.join" Here this will Help us to Join the Directory and Filename
// console.log(fullPath) // Here we will get the Full Path of the File


// <----------------------------------- OS Module --------------------------------------->

// const os = require('os')

// console.log('Platform:',os.platform()); // os.platform() it will return the Platform Detail of our System
// console.log('CPU Arcitecture:',os.arch());
// console.log('Total Memory:',os.totalmem());
// console.log('Free Memory:',os.freemem());


// <------------------------------------- URL Module ----------------------------------------->
// URL module Help us to Parse and construct the URL making it Easy to handle web addess

// const url = require('url')

// const myUrl = new URL('https://example.com:8080/path/name?query=hello#hash')
// console.log('Host',myUrl.host);
// console.log('Pathname',myUrl.pathname);
// console.log('Search Params',myUrl.searchParams.get('query'));

// <--------------------------------------- Crypto Module --------------------------------------------->
// Crypto Module is used to Encrypt and Decrypt the Data (it provides us the Cryptography funcationalities)

// const crypto = require('crypto')

// const hash = crypto.createHash('sha256')
// hash.update('Hello, World!')

// console.log(hash.digest('hex'));

// <------------------------------------------- Custom Core Module -------------------------------------------------->

// const sayHello = require('./greetings')

// const message = sayHello('Developers')

// console.log(message);

//  <------------------------------------------- How to Export Multiple module From the Single File -------------------------------------------------->

// const math = require('./math')

// console.log(math.add(5,3))
// console.log(math.subtract(5,3))


// <------------------------------------------------ Now we will Learn How to Use NPM (Node Package Manager) ------------------------------------------------->
// NPM (It is A default Package Manager for the NodeJs It allows us to install, Update and Delete the Package or Libraries) is the Package Manager for Node.js. It is used to install and manage packages 
// npm i lodash this is the Package to manage the Array and String efficiently

// const lodash = require('lodash')

// const numbers = [1,2,3,4,5]
// const reversed = lodash.reverse(numbers)

// console.log(reversed)

// How we install the npm Package  only for the Development Purposes
// npm i (here we write the Package name) --save-dev

// How to Update any Packages
// npm update (here we write the Package Name)

// How to remove the Package
// npm uninstall (here we write the Package Name)

// <-------------------------------------------- File System (Streams) ------------------------------------------------>