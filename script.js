var generateBtn = document.querySelector("#generate");
var fromPrompt = prompt("Select a number 8 through 128");
var totalCharacters = parseInt(fromPrompt);

console.log(totalCharacters)

var typesOfCharacters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "abcdefghijklmnopqrstuvwxyz".toUpperCase(),
  specialCharacters: "!#$%&()*+,-./:;<=>?@[\]^_`{|}~",
  number: "0123456789",
}

var useLowerCase = confirm("Use Lowercase?");
var useUpperCase = confirm("Use Uppercase?");
var useSymbols = confirm("Use Symbols?");
var useNumbers = confirm("Use Numbers?");

console.log("L: ", useLowerCase);
console.log("U: ", useUpperCase);
console.log("S: ", useSymbols);
console.log("N: ", useNumbers);


console.log(password);

function writePassword (){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword (){
  var possibleCharacters = "";
  
  if (useLowerCase) {
    possibleCharacters += (typesOfCharacters.lowercase);
  }
  if (useUpperCase) {
    possibleCharacters += (typesOfCharacters.uppercase);
  }
  if (useSymbols) {
    possibleCharacters += (typesOfCharacters.specialCharacters);
  }
  if (useNumbers) {
    possibleCharacters += (typesOfCharacters.number);
    
  }
  
  console.log(possibleCharacters);
  
  var password = "";

  console.log(totalCharacters);

  console.log(possibleCharacters);

  for (var i = 0; i < totalCharacters; i++){
    console.log(password);
    var position = Math.floor(Math.random() * possibleCharacters.length);
    password= password + possibleCharacters[position];
  }
return password;

}

generateBtn.addEventListener("click", writePassword());