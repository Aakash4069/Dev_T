let cheerio=require("cheerio");
let request=require("request");
console.log("before");
request("httpssadfsaf://www.google.com/",cb);
function cb(error,respose,html){
    console.log(error);
}

console.log("after");