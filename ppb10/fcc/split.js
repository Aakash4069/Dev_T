// let input=process.argv[2]
// let 
function confirmEnding(str, target) 
{ let arr = str.split(' '); 
let targetString = arr[arr.length - 1];
 let tar = targetString.slice(-target.length); 
 if (tar == target) 
 { return true; 
} else
 { 
     return false;
     } 
}
let result =confirmEnding("Bastia", "n");
console.log(result);