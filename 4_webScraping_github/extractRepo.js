let cheerio=require("cheerio");
let request=require("request");

function extractRepoLinks(url){
    request(url,cb);
}
function cb(err,response,html){
    if(err){
        console.log(err);
    }else{
        extractdata(html);
    }
}
function extractdata(html){
    let $=cheerio.load(html);
    let topicElementsArr=$("h1");

    let topicName=$(topicElementsArr[0]).text();
    console.log(topicName);
    let resposLinkArr=$("h1.f3.color-text-secondary.text-normal.lh-condensed");

    for(let i=0;i<8;i++){
        let aArr=$(resposLinkArr[i]).find("a");
        let resposLink=$(aArr[1]).attr("href");
        console.log(resposLink);
    }
}



module.exports={
    extractRepoLinks:extractRepoLinks,
}