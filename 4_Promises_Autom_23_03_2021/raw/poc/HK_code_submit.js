const puppeteer=require("puppeteer");
let  cTab;
// let email=naveen@mailree.live;
// let password=Naveen@123;
let browserOpenPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"]
})
browserOpenPromise.then(function(browser){
    let alltabsArrpromise=browser.pages();
    return alltabsArrpromise;

}).then (function(allTabsArr){
    cTab=allTabsArr[0];
    let visitLoginpagePromise=cTab.goto("https://hackerrank.com/auth/login");
    return visitLoginpagePromise;
}).then(function (){
    let emailWillTypePromise=cTab.type("input[name='username']","naveen@mailree.live",{delay:200});
    return emailWillTypePromise;
}).then(function (){
    let passwordWillTypeprimse=cTab.type("input[name='password']","Naveen@123",{delay : 200});
    return passwordWillTypeprimse;
}).then(function (){
    let submitbuttan=cTab.click("button[data-analytics='LoginPassword']");
    return submitbuttan;
})
// .then(function() {
//     let waitForKit=cTab.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled",{visible:true});
//     return waitForKit;

// }).then(function (){
//     let goToIPKit=cTab.click(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
//     return goToIPKit;
// })

.then (function (){
    let waitForKit=waitAndClick(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
    return waitForKit;
})
// .then(function (){
//     let waitForWarmUp=cTab.waitForSelector("a[data-attr1='warmup']");
//     return waitForWarmUp;
// }).then(function (){
//     let clickonWarmUp=cTab.click("a[data-attr1='warmup']");
//     return clickonWarmUp;
// })
.then (function (){
    console.log("at warmup ");
    let clickonWarmUp=waitAndClick("a[data-attr1='warmup']");
    return clickonWarmUp;
})
.then(function (){
    let waitForQuestions=cTab.waitForSelector("a[data-analytics='ChallengeListChallengeName']", { visible: true });
    return waitForQuestions;
})
.then(function (){

    function consoleWaleFn(){
        let allElem=document.querySelectorAll("a[data-analytics='ChallengeListChallengeName']");
        let linkArr=[];
        for(let i=0;i<allElem.length;i++){
            linkArr.push(allElem[i].getAttribute("href"));
        }
        return linkArr;
    }
    let linkArrProise=cTab.evaluate(consoleWaleFn);
    return linkArrProise;

})
.then(function (linkArr){
    console.log(linkArr);
})
.then(function (){
    console.log("Reached warm up module");
})
.catch(function (err){
    console.log(err);
})

function waitAndClick(Selector){

    return new Promise(function (resolve,reject){

        let waitFSelector=cTab.waitForSelector(Selector,{visible :true});
        waitFSelector.then(function (){
            
            let clickToSelector=cTab.click(Selector);
            return clickToSelector;
        })
        .then(function (){
            resolve();
        }).catch(function (err){
            reject();
        })
    })
}