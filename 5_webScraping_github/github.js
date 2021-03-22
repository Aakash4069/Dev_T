let request=require("request");
let cheerio= require("cheerio");
let repoPageObj=require("./extractRepo.js");

let url="https://github.com/topics";
request(url,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        githubtopics(html);
    }
    
}
function githubtopics(html){

    let $=cheerio.load(html);

    let topicsArray=$(".col-12.col-sm-6.col-md-4.mb-4 a");

    for(let i=0;i<topicsArray.length;i++){
        let topicName=$(topicsArray[i]).text();
        let link=$(topicsArray[i]).attr("href");
        topicName=topicName.trim().split("\n")[0];
        let fulllink="https://www.github.com/"+link;
        // console.log(topicName);

        // console.log(topicName+"  =>  "+fulllink);
        repoPageObj.extractRepoLinks(fulllink);
        // console.log(err);
    }



}
