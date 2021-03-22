let request=require("request");
let cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";


request(url, cb)
function cb(err, response, html) {
    let $ = cheerio.load(html);

    let element = chSelector(".match-comment .d-flex.match-comment-padder.align-items-center .match-comment-long-text p");
    console.log(element.length)
    
  let text= chSelector(element[0]).text();
  console.log(text);
    //  let lbc= element.text();
    //    console.log(lbc);
}