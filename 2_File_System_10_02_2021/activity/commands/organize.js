#!/usr/bin/env node

let fs=require("fs");
let path=require("path");
let types=require("../util");

function isFileorNot(src){
    return fs.lstatSync(src).isFile();
}

function readContent(src){
    return fs.readdirSync(src);
}

function checkExtenstion(src){
    let ext=src.split(".").pop();
    for(let type in types){
        for(let i=0;i<types[type].length;i++){
            if(ext===types[type][i]){
                return type;
            }
        }


    }
    return "other";
}

function sendFile(src,dest,FolderName){

    let folderToMake=path.join(dest,FolderName);
    if(fs.existsSync(folderToMake)==false){
        fs.mkdirSync(folderToMake);
    }

    let pathofdestFile=path.join(folderToMake,path.basename(src));

    fs.copyFileSync(src,pathofdestFile);
}

function organizeFile(src) {

    let folderToMake =path.join(src,"Organized_File");
    if(fs.existsSync(folderToMake)==false){
        fs.mkdirSync(folderToMake);
    }   
    organizer(src,folderToMake);

}

function organizer(src,dest){

    let isFile=isFileorNot(src);
    if(isFile==true){
        // creating folder
        let folderName=checkExtenstion(src);
        // copy the file in the folder
        sendFile(src,dest,folderName);
    }else{
        let fDirName=readContent(src);
         
        for(let i=0;i<fDirName.length;i++){
            let childDir=fDirName[i];
            let childDirPath=path.join(src,childDir);
            
            organizer(childDirPath,dest);
        }
    }

}
// nodejs -> export


organizeFile(process.argv[2]);
module.exports = {
    fn: organizefn
}
