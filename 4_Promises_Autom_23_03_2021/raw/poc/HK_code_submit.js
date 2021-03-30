const puppeteer=require("puppeteer");

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
    let emailWillTypePromise=cTab.type("input[name='username']","abcd",{delay:200});
    return emailWillTypePromise;
}).then(function (){
    let passwordWillTypeprimse=cTab.type("input[name='password']","asdfghj",{delay : 200});
    return passwordWillTypeprimse;
}).then(function (){
    console.log("email entered");
})