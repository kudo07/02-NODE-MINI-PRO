// read eval print loop
// CJS:Common Modules ==>
// const  x=require("y")
// vs
// EJM:ES6:Modules==> import export
// import x from y==>this is look like a part of a
//  const x = require('os');
//  undefined > x; in the terminal
const x = require('fs');
// console.log(x);
// avoid sync function  are block the event loop
// readfile, open
const { readFileSync } = require('fs');
console.log(readFileSync('./NOTE'));
// <Buffer 54 48 45 20 4a 53 20 57 48 49 43 48 20 52 55 4e 53 20 49 4e 20 54 48 45 20 42 41 43 4b 45 4e 44 20 57 48 49 43 48 20 4f 52 49 47 49 4e 41
// 4c 4c 59 20 ... 83 more bytes>
// S INTO THE BYTES AND READ THE DATA
console.log(readFileSync('./NOTE', { encoding: 'utf-8' }));
// JS INTO THE BYTES AND READ THE DATA
//
x.writeFileSync('./written.txt', 'this is made by this file');
