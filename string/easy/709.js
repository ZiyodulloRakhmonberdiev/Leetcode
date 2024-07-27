// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example 1:

function toLowercase(text){
  let result = "";

  for(let i = 0; i < text.length; i++){
    const charCode = text.charCodeAt(i);

    if(charCode >= 65 && charCode <= 90){
      result += String.fromCharCode(charCode + 32);
      continue;
    }
    result += text[i];
  }
  return result;
}

console.log(toLowercase("ZZiYodullo"));


let someText = "HheLLO"

const resultText = someText.split("").map((letter) => letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90 ? 
  String.fromCharCode(letter.charCodeAt() + 32) : letter
).join("");

console.log(resultText);

