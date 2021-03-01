let fs=require("fs");
let path=require("path");


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

function viewTree(src,indent){
    let isFile=isFileorNot(src);
    if(isFile==true){
        console.log(indent,path.basename(src));
    }
    else{
        console.log(indent ,path.basename(src));
        let fDirname=readContent(src);

        for(let i=0;i<fDirname.length;i++){
            let child=fDirname[i];

            // let dirNamepath=src+"\\"+child;
            let dirNamepath=path.join(src,child);
            viewTree(dirNamepath,indent+"\t");
        }
    }
}

let input =process.argv.slice(2);
viewTree(input[0],"");