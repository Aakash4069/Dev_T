let cheerio=require("cheerio");
let request=require("request");
console.log("before");
request("https://www.google.com/",cb);
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary 
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard 
// https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results 
function cb(error,respose,html){
    console.log(error);

    
}

console.log("after");