let request=require("request");
let cheerio= require("cheerio");

let url="https://github.com/topics";
request(url,cb);

function cb(error,response,html){
    let $=cheerio.load(html);

    let topicsArray=$(".col-12.col-sm-6.col-md-4.mb-4 a");

    for(let i=0;i<topicsArray.length;i++){
        let topic=$(topicsArray[i]);

        let link=$(topic).attr("href");
        let fulllink="https://www.github.com/"+link;
        console.log(fulllink);
        // console.log(err);

    }
}