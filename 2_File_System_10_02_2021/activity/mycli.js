#!/usr/bin/env node


let helperFile = require("./commands/help.js");
let viewFile = require("./commands/view");
let organizeFile = require("./commands/organize");
let input = process.argv.slice(2);              //
// node mycli.js [view ,dirName]

let command = input[0];
// path
switch (command) {
    case "view":    
        viewFile.fn(input[1], input[2]);
        break;
    case "organize":
        organizeFile.fn(input[1]);
        break;
    case "help":
        helperFile.fn();
        break;
    default:
        console.log("wrong command type help for all the commands");
        break;
}
//view
//organize
//help


// commands to run the file when it not globle 
// organizeFile(process.argv[2]) this line need to comment before you run from below command , this line take input when we run organize file only and command would be : node oragnize.js "/home/akky/Dev_T/2_File_System_10_02_2021"
// node mycli.js organize "/home/akky/Dev_T/2_File_System_10_02_2021"



/**
 * To make it globle organize commands, it will pass through make mycli.js
 * step to make it globall
 * step 1: npm init
 * step 2: add this line to myclis.js   #!/user/bin/env node
 * step 3: add this below line to package.json  at the last 
 *           "bin":{
                   "myutil": "mycli.js"
                     }
 * step 4 : add this line to organized folder
         function organizefn(src){              
            if(src==undefined){             // process.cwd will only run when path is not given  int the running command
                src=process.cwd();          // this give the current directory path 
            }
            organizeFile(src);
            }  
            
    Step 5: do npm link

    step 6: then run this command for anywhere in side the folder in system

    step 7: if you have done any changein the any folder then unlink the npm then agin link the npm 
            run commands this 
            npm link
             if any changed in any file then this commands will be run
             npm unlink 
             npm link

 */