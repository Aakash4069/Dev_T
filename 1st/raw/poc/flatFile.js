let fs=require("fs");
let path


function isFileorNot(src){
    return fs.lstatSync(src).isFile();       // this is fs method to know is this a file or not 
}

function readContent(src){
    return fs.readdirSync(src);       // this is fs method use to read content and read the array content
}

function viewFlat(src){
    let isFile=isFileorNot(src);
    if(isFile==true){
        console.log(src+"*");
    }
    else{
        console.log(src);
        let fDirname=readContent(src);

        for(let i=0;i<fDirname.length;i++){
            let child=fDirname[i];

            let dirNamepath=src+"\\"+child;
            viewFlat(dirNamepath);
        }
    }
}

viewFlat(process.argv[2]);