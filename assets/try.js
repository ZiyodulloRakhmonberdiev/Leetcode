let testText = "HeLLO";

let result = testText
  .split("")
  .map((letter) =>
    letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90
      ? String.fromCharCode(letter.charCodeAt() + 32)
      : letter
  )
  .join("");

console.log(result); // Output: "hello"

function tolowercase(text) {
  return text
    .split("")
    .map((letter) =>
      letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90
        ? String.fromCharCode(letter.charCodeAt() + 32)
        : letter
    )
    .join("");
}

console.log(tolowercase("MayNa"));


function toLowerCase(text){
  let result = "";

  for (let i = 0; i < text.length; i++){
    const charCode = text.charCodeAt(i);
    if(charCode >= 65 && charCode <= 90){
      result += String.fromCharCode(charCode + 32);
    }else{
      result += text[i];
    }
  }
  return result;
}

console.log(toLowerCase("YnanSb"))