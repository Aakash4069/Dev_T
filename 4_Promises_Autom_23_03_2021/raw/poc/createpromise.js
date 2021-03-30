let fs=require("fs");
console.log("before");

function myFilereadPromise(filePath){

    return new Promise(function (resolve,reject){
        if(err){
            reject(err);
        }
        else{
            resolve(data);
        }
    })
}
let frp=myFilereadPromise("f1.txt");
console.log(frp);

frp.then(function (data){
    console.log("data->"+data);

})
frp.catch(function (err){
    console.log(err);
})
let f1ReadP=fs.promises.readFile("f1.txt");
console.log(f1ReadP);
f1ReadP.then(function (data){
    console.log("data"+data);
})