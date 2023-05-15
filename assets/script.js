// Assignment Code
var generateBtn = document.querySelector("#generate");


var specialCharArr = ["'", "\"", "!", "?", "@", "#", "$", "%", "^", "&", "*", "/", "(", ")", "-", "_", "=", "+", ".", ",", "<", ">", "`", "~", "[", "]", "{", "}", ":", ";"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function generatePassword() {
  selectionArr = [];
  var passLength = prompt("How many characters would you like your password to be? (8-128)");
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Please choose a number between 8 and 128.");
    return false;
  }
  if(confirm("Would you like to include special characters?")) {
    selectionArr = selectionArr.concat(specialCharArr);
  }
  if(confirm("Would you like to include uppercase letters?")) {
    selectionArr = selectionArr.concat(upperCaseArr);
  }
  if(confirm("Would you like to include lowercase letters?")) {
    selectionArr = selectionArr.concat(lowerCaseArr);
  }
  if(confirm("Would you like to include numbers?")) {
    selectionArr = selectionArr.concat(numbersArr);
  }
  if(selectionArr.length === 0) {
    alert("You must select at least one character type.");
    return false;
  }
  var password = "";

  for (var i = 0; i < passLength; i++) {
    var passChar = Math.floor(Math.random() * selectionArr.length);
    password = password + selectionArr[passChar];
  }
  return password;
}



// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompt();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);