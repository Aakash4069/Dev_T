let fs=require("fs");
let path=require("path");
let types=require("../util");

function isFileorNot(src){
    return fs.lstatSync(src).isFile();
}

function readContent(src){
    return fs.readdirSync(src);
}

function checkExtenstion(src){
    
}


function organizefn(src) {
// create organize files folder 
}

// nodejs -> export

module.exports = {
    fn: organizefn
}
