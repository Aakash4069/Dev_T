let request=require("request");
let cheerio=require("cheerio");

let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score";


request(url,cb);

function cb (err,respose,html){
    let $=cheerio.load(html);

    let element=$(".match-comment .d-flex.match-comment-padder.align-items-center .match-comment-long-text p");

    console.log(element.length);

    let text=$(element[0]).text();
    console.log(text);

}