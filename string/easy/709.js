// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example 1:

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

// Example 2:
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

