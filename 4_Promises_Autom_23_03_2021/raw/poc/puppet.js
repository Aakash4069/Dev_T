


const puppeteer=require("puppeteer");
let browseropenP=puppeteer.launch({
    headless: false
})

browseropenP.then(function (browser){

    console.log("browser opened");
    let alltabsPromises=browser.pages();
    let browserclosepromise=browser.close();
    browserclosepromise.then(function (){
        comsole.log("Browser closed");
    })

    // alltabsPromises.then(function (tabs){
    //     let page=tabs[0];
    //     let googlehomePageOpenPromises=page.goto("https://www.google.com");
    //     googlehomePageOpenPromises.then(function (){
    //         console.log("google home page opened")
    //     })
    // })
})
