


const puppeteer=require("puppeteer");
let url="";
let browseropenP=puppeteer.launch({
    headless: false
})
let gPage;
browseropenP.then(function (browser){

    console.log("browser opened");
    let alltabsPromises=browser.pages();
    // let browserclosepromise=browser.close();
    // browserclosepromise.then(function (){
    //     comsole.log("Browser closed");
    // })

    return alltabsPromises
}).then(function (tabs){
    let gPage=tabs[0];
    let googlehomePageOpenPromises=gPage.goto("https://www.google.com");
    return googlehomePageOpenPromises;
}).then(function (){
    function f(){
        //first entery
        // innerText
        //value
        return document.querySelector(".best")
    }
})
