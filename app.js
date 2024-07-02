// repeats a function after every set interval in the second parameter
// setInterval(() => {
//     console.log("h");
// }, 1000);  

// self made modules always start with "./"
// const names = require('./names')
// const func = require('./function')

// have to access variables through object syntax
// func(names.word)

// can also call module through direct use of require
// require('./math.js')

// os module
// const os = require("os");
// const user = os.userInfo();
// console.log(os.freemem())

// path module
// const path = require("path");
// console.log(path.sep)
// console.log(path.join('/content', 'subfolder', 'file.txt'))

// read/write file module synchronously
//  const { readFileSync, writeFileSync } = require("fs");
//  const first = readFileSync('./content/file.txt', "utf8");
//  const second = readFileSync('./content/file2.txt', "utf8");
//  console.log(first, second)
// writeFileSync("./content/writefs.txt", "new file omg", {flag: 'a'});

// read/write file module synchronously
//  const { readFile, writeFile } = require("fs");
//  readFile("./content/file.txt", (err, data) => {
//     if (err) return;
//     readFile("./content/file2.txt", 'utf8', (err, data) => {
//         if (err) return;
//         writeFile('./content/writeasync.txt', 'worky?', (err, data) => {
//             if (err) return;
//             console.log(data);
//         })
//     })
//  })

// http/server creation methods
// const http = require("http");
// parameters refer to request and response
// const server = http.createServer((req, res) => {
// if (req.url === "/") {
//     res.end('hi')
// }
// else if (req.url === "/about") {
//     res.end("about hm")
// }
//  else {
//     res.end(`<h1>dogonma</h1> <a href="/">home</a>`)
//
//  }
// })
// create port to store server
// server.listen(5000)

// using external dependencies
// create package.json with `npm init` command in terminal
// install dependencies with `npm i <package>` command in terminal
// const b = require('lodash')
// console.log("h");
console.log("h");