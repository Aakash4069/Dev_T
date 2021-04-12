const cheerio=require("cheerio");
const fs = require("fs");
const request=require("request");
let arr=[];
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results",callback);
function callback(err,res,html){
if(!err){
    let $=cheerio.load(html);
    let match=$('.match-cta-container a');
    let matchname=$('.match-info.match-info-FIXTURES .name');
    let j=0;
    let i;
    for(i=0;i<match.length;i++){
        if($(match[i]).attr('data-hover')=="Scorecard"){
            let link='https://www.espncricinfo.com'+$(match[i]).attr('href');
            arr.push(
                {
                    'MatchName': $(matchname[j]).text()+ " vs " +$(matchname[j+1]).text(),
                    'Batsman':[] ,
                    'Bowler':[]
            
                }
                )
          console.log(link);
        }
    }
}
}
