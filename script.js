//Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays for the Password
var typesOfCharacters = {
  lowercase: "abcdefghijklomnopqrstuvwxyz",
  specialCharacters: "!@#$%^&*()-_+=<>?[]{}|~`",
};

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var fromPrompt = prompt(
    "For your password, enter a number of characters you want to use, between 8 and 128"
  );
  var length = parseInt(fromPrompt);

  if (length < 8 || length > 128) {
    alert("Password must be more than 8 characters, but less than 128.");
    return "Please select again!";
  }

  if (!length) {
    alert("Password must be more than 8 characters, but less than 128.");
    return "Please select again!";
  }

  var useLowerCase = confirm(
    "Would you like to use lowercase letters in your password?"
  );
  var useUpperCase = confirm(
    "Would you like to use uppercase letters in your password?"
  );
  var useSymbols = confirm("Would you like to use symbols in your password?");
  var useNumbers = confirm(
    "Would you like to use some numbers in your password?"
  );
  console.log ("conditions")
  if (!useLowerCase && !useUpperCase && !useSymbols && !useNumbers) {
    alert(
      "You must choose at least one uppercase, lowercase, symbol or number for your Password"
    );
    return "Please select again!";
  }
 
  var possibleCharacters = [];

  if (useLowerCase) {
    possibleCharacters = possibleCharacters.concat(
      typesOfCharacters.lowercase.split("")
    );
  }
  if (useUpperCase) {
    possibleCharacters = possibleCharacters.concat(
      typesOfCharacters.lowercase.toUpperCase().split("")
    );
  }
  if (useSymbols) {
    possibleCharacters = possibleCharacters.concat(
      typesOfCharacters.specialCharacters.split("")
    );
  }
  if (useNumbers) {
    for (var i = 0; i < 10; i++) {
      possibleCharacters.push(i);
    }
  }
  
  var password = "";

  for (var i = 0; i < length; i++) {
    var position = Math.floor(Math.random() * possibleCharacters.length);
    password = password + possibleCharacters[position];
  }
  console.log("PASSWORD: ", password);
  return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
