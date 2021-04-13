
let fs = require('fs');
let data = fs.readFileSync('abc.txt');
console.log(data);          //this give the output in the buffer format

console.log(data.toString());   // this will convert he buffer formate to normal form

let wdata = 'this is some demo data tha i want to write';
fs.writeFileSync('write.txt', wdata);        //this will first delete the content and write in the file
fs.appendFileSync('write.txt', 'my am in the best');     //this will append the value int the file
 // fs.unlinkSync('write.txt');                     // this will remove the file 
// fs.mkdirSync("other");                              // this will create the file
console.log(fs.existsSync("other"));                    // it will check the file exist or not if yes then it will return in boolean





