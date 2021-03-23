
let request=require("request");
let cheerio=require("cheerio");

function processAllMatch(url){

    request(url,cb);

    function cb(err,res,html){
        if(err){
            console.log(err);
        }else{
            extractAllScoreacrdLink(html);
        }
    }
}
function extractAllScoreacrdLink(html){
    let $=cheerio.load(html);
    let secordedlinkArr=$("a[data-hover=`Scorecard`");
}