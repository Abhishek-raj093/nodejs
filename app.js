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
// const fs = require('fs') // We use this File System to Perform the Streams Operation

// Here we Read the File Using redableStream,
// const redableStream = fs.createReadStream('example.txt', {encoding:'utf8'})
 
// redableStream.on('data', (chunk)=>{
//     console.log(chunk)
// })

// redableStream.on('end', ()=>{
//     console.log('File Read Successfully')
// })

// redableStream.on('error', (err)=>{
//     console.error('Error', err)
// })

// Here we will see How to Write a file Using the WriteStream

// const fs = require('fs')

// const WritableStream = fs.createWriteStream('output2.txt')

// WritableStream.write('Hello,'); // Here we write the Data in the form of Chunks because it will help us to manage the memory in the Server
// WritableStream.write('How are you?');
// WritableStream.end()

// WritableStream.on('finish', ()=>{
//     console.log('File Write Successfully')
// })


// <------------------------------------------------ Piping Streams -------------------------------------------------->

// const fs = require('fs')

// const redableStream = fs.createReadStream('example.txt')

// const WritableStream = fs.createWriteStream('example-output.txt')

// redableStream.pipe(WritableStream)

// WritableStream.on('finish', ()=>{
//     console.log('File Copied Successfully.')
// })

// Here we will See How Perform Operations on Large Files (Here we used example.txt as Large File)

// const fs = require('fs')

// const readline = require('readline')

// const redableStream = fs.createReadStream('example.txt')

// const rl = readline.createInterface({input: redableStream})

// rl.on('line',(line)=>{
//     console.log('Line:', line);
// })

// rl.on('close',()=>{
//     console.log('Finished processing the file.');
// })

// <--------------------------------------------- Working With Directories in NodeJS -------------------------------------------------->

// 1. Creating a Directory
// a. Asynchronous: fs.mkdir()

// const fs = require('fs')

// fs.mkdir('newDirectory', (err)=>{
//     if(err){
//         return console.error('Error creating directory:', err)
//     }
//     console.log('Directory created successfully');
// })

// b. Synchronous: fs.mkdirSync()

// const fs = require('fs')

// fs.mkdirSync('newDirectory2')
// console.log('Directory created successfully');

//2. Reading a Directory

// const fs = require('fs')

// fs.readdir('./', (err,files)=>{
//     if(err){
//         return console.error('Error reading directory:', err)
//     }
//     console.log('Files in directory:', files);
// })

// Here we Read the File Using Synchronous Method

// const fs = require('fs')

// const files = fs.readdirSync('./')
// console.log('Directory content', files);

// 3. Checking if a Directory Exists 

// const fs = require('fs')

// const dirName = 'newDirectory'

// if(fs.existsSync(dirName)) {
//     console.log('Directory exists');
// } else {
//     console.log('Directory does not exist');
// }

// 4. Removing a Directory
//a. Asnchronous:fs.rmdir()

// const fs = require('fs')

// fs.rmdir('newDirectory',(err)=>{ //It will Delete the only Directtory which is Empty
//     if(err){
//         return console.error('Error removing directory:', err)
//     }
//     console.log('Directory removed successfully');
// })


// const fs = require('fs')

// fs.rm('newDirectory2',{recursive:true},(err)=>{ //It will Delete the Directtory which Contain the files as well
//     if(err){
//         return console.error('Error removing directory:', err)
//     }
//     console.log('Directory removed successfully');
// })


// 5. Renaming a Directory

// const fs = require('fs')

// fs.rename('folder1','folder2',(err)=>{
//     if(err){
//         return console.error('Error renaming directory:', err)
//     }
//     console.log('Directory renamed successfully!');
// })

// 6. Getting Directory S6tats

// const fs = require('fs')

// fs.stat('./',(err,stats)=>{
//     if(err){
//         return console.error('Error getting stats:', err)
//     }
//     console.log('Directory stats:',stats);
//     console.log('is directory:',stats.isDirectory()); //If the given path ('./') is an folder than it will return true else it will return false
// })

// 7. Watching a Directory

// const fs = require('fs')

// fs.watch('./', (eventType, filename)=>{
//     console.log(`Event type: ${eventType}`);
//     if (filename) [
//         console.log(`Filename: ${filename}`)
//     ]
// })