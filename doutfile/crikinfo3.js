const cheerio = require("cheerio");
const fs = require("fs");
const { connect } = require("puppeteer");
const request = require("request");
let arr = [];
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results", callback);
function callback(err, res, html) {
    if (!err) {
        let $ = cheerio.load(html);
        let match = $('.match-cta-container a');
        let matchname = $('.match-info.match-info-FIXTURES .name');
        let j = 0;
        let i;
        for (i = 0; i < match.length; i++) {
            if ($(match[i]).attr('data-hover') == "Scorecard") {
                let link = 'https://www.espncricinfo.com' + $(match[i]).attr('href');
                arr.push(
                    {
                        'MatchName': $(matchname[j]).text() + " vs " + $(matchname[j + 1]).text(),
                        'Batsman': [],
                        'Bowler': []

                    }
                )
                //                console.log(link);
                j += 2;
                request(link, callback2.bind(this, i));
            }
        }
    }
}
let count = 0;
function callback2(idx, err, res, html) {
    if (!err) {
        count++;
        let $ = cheerio.load(html);
        fs.writeFileSync('hello.html', html)
        let batsman = $('.table.batsman tbody tr');
        for (let i = 0; i < batsman.length; i++) {
            let columns = $(batsman[i]).find('td');
            // console.log(columns).text();
            if ($(columns[7]).text() != '') {
                arr[idx]['Batsman'].push({
                    'Name': $(columns[0]).text(),
                    'R': $(columns[2]).text(),
                    'B': $(columns[3]).text(),
                    'Fours': $(columns[5]).text(),
                    'Sixes': $(columns[6]).text(),
                    'SR': $(columns[7]).text()
                })
            }
        }
        let bowler = $('.table.bowler tbody tr');
        for (let j = 0; j < bowler.length; j++) {
            let bcolumns = $(bowler[j]).find('td');
            // console.log(bcolumns).
            if ($(bcolumns[0]).text() != '') {
                arr[idx]['Bowler'].push({
                    'Name': $(bcolumns[0]).text(),
                    'O': $(bcolumns[1]).text(),
                    'M': $(bcolumns[2]).text(),
                    'R': $(bcolumns[3]).text(),
                    'W': $(bcolumns[4]).text(),
                    'ECON': $(bcolumns[5]).text(),
                    'Dots': $(bcolumns[6]).text(),
                    'Fours': $(bcolumns[7]).text(),
                    'Sixes': $(bcolumns[8]).text(),
                    'WD': $(bcolumns[9]).text(),
                    'ND': $(bcolumns[10]).text()
                })
            }
        }
        //fs.writeFileSync('IPL2020Data.json',JSON.stringify(arr));
        //console.log(count);
    }
}
