const puppeteer=require("puppeteer");
const {email,password}=require("./credential");
let {answers}=require("./code");
let  cTab;

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
    let emailWillTypePromise=cTab.type("input[name='username']",email,{delay:200});
    return emailWillTypePromise;
}).then(function (){
    let passwordWillTypeprimse=cTab.type("input[name='password']",password,{delay : 200});
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
    let questionWillBeSolvedPromise=questionSolve(linkArr[0],0);
    return questionWillBeSolvedPromise;
}).then(function (){
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

function questionSolve(url){
    return new Promise(function (resolve,reject){
        // going to question  page 
        //
        let fullLink=`https://www.hackerrank.com${url}`;
        let goToQuestionPagePromise=cTab.goto(fullLink);

        goToQuestionPagePromise.then(function (){
            let waitForCheckBoxAndClick=waitAndClick(".custom-input-checkbox");
            return waitForCheckBoxAndClick;
        }).then(function (){
            let waitForCheckBox=cTab.waitForSelector(".custominput",{visible:true});
            return waitForCheckBox;
        }).then(function (){
            let codeWillBeAddedPromise=cTab.type(".custominput",answers[0],{delay:100});
            return codeWillBeAddedPromise;
        }).then(function(){
            let ctrWillBeDownPromise=cTab.keyboard.down('Control');
            return ctrWillBeDownPromise;
        }).then(function (){
            let aWillBepressedPromise=cTab.keyboard.press('a');
            return aWillBepressedPromise;
        }).then(function (){
            let xWillBepressedPromise=cTab.keyboard.press('x');
            return xWillBepressedPromise;
        }).then(function (){
            let pointerWillBeclick=cTab.click(".monaco-editor.no-user-select.vs");
            return pointerWillBeclick;
        }).then(function (){
            let aWillBepressedOnpointer=cTab.keyboard.press('a');
            return aWillBepressedOnpointer;
        }).then(function (){
            let codePastePromise=cTab.keyboard.press('v');
            return codePastePromise;
        }).then(function (){
            let submitWillClickPromise=cTab.click(".pull-right.btn.btn-primary.hr-monaco-submit");
            return submitWillClickPromise;
        })

        .then(function (){
            resolve();

        }).then(function (err){
            reject(err);
        })
    })
}