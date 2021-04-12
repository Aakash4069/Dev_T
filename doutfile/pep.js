let request=require("request");
let cheerio= require("cheerio");
let fs=require("fs");


let url="https://pepcoding.com";
request(url,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        pepcodinglink(html);
    }
    
}
function pepcodinglink(html){

    fs.writeFileSync('HTML.html',html);
    let $=cheerio.load(html);

    let topicsArray=$(".bolder.lp-banner-heading");
    console.log(topicsArray.text());

    



}
