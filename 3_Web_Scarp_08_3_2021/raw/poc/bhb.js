let request = require("request");
let cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";


request(url, cb);

function cb(err, respose, html) {
    let $ = cheerio.load(html);

    let tables = $(".table.batsman");

    let bowlerHtmlString = "";

    for (let i = 0; i < tables.length; i++) {
        // bowlerHtmlString+= $(tables[i]).html();                          //just to print the html
        let teamBowlers = $(tables[i]).find("tr");
        for (let j = 0; j < 10; j++) {

            let eachbowlcol = $(teamBowlers[j]).find("td");
            let playerName = $(eachbowlcol[0]).text();
            let runs = $(eachbowlcol[2]).text();
            console.log(playerName, "  ", runs);

        }

        console.log("``````````````````````````````````````")

    }

    // console.log(bowlerHtmlString);

}