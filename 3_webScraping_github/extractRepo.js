let cheerio=require("cheerio");
let request=require("request");
let fs=require("fs");
let path=require("path");

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
function dirCreater(src){
    if(fs.existsSync(src)==false){
        fs.mkdirSync(src);
    }
}

function createfile(filePath){
    if(fs.existsSync(filePath)==false){
        fs.openSync(filePath,"w");
    }
}
function extractdata(html){
    let $=cheerio.load(html);
    let topicElementsArr=$("h1");

    let topicName=$(topicElementsArr[0]).text().trim().split("\n")[0];
    // console.log(topicName);
    let pathofFolder=path.join(__dirname,topicName);
    dirCreater(pathofFolder);
    let resposLinkArr=$("h1.f3.color-text-secondary.text-normal.lh-condensed");

    for(let i=0;i<8;i++){
        let aArr=$(resposLinkArr[i]).find("a");
        let resposLink=$(aArr[1]).attr("href");
        let fileName=resposLink.split("/").pop();
        let filePath=path.join(pathofFolder,fileName+".json");
        createfile(filePath);
        console.log(resposLink);
    }
    console.log("````````````````````````````````````````````");
}



module.exports={
    extractRepoLinks:extractRepoLinks,
}