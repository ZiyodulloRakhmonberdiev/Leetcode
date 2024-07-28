"use strict";
// function lengthOfLastWord(text){
//   let count = 0;
//   let hasSpace = true;

//   for(c in text){
//     if(c != " "){
//       if(hasSpace){
//         count = 1;
//       } else{
//         count++;
//       }
//       hasSpace = false;
//     }else{
//       hasSpace = true;
//     }
//   }
//   return count;
// }

// Example 1: 
// function lengthOfLastWord(text){
  
//   let arr = [];
  
//   text.split(" ").map(word => word !== "" && arr.push(word));
  
//   let lastWord = arr[arr.length -1].length;
//   return lastWord;
// }

// console.log(lengthOfLastWord("   hello i wpon   "));


// Example 2:
// function lengthOfLastWord(text){
//   text = text.trim();
  // let length = 0;
  // for(let i = text.length - 1; i >= 0; i--){
  //   if(text[i] !== " "){
  //     length++;
  //   } else if(length > 0){
  //     break
  //   }
  // }
  // return length
// }

// Example 3:
// function lengthOfLastWord(text){
//   return text.trim().split(" ").pop().length;
// }

// Example 4:
// const length = (text) => text.trim().split(" ").pop().length; 
// console.log(length("Mada mm   "));

// Example 5: Recommended
function lengthOfLastWord(text){
  let words = text.trim().split(" ");
  return words[words.length - 1].length;
}

console.log(lengthOfLastWord("hbc cwnjll    "));
