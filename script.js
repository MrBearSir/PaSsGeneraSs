// Global Var table
var numbers = "1234567890";
var letters = "qwertyuiopasdfghjklzxcvbnm";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function writePassword() {
  var passlength = 0;
  var characterTypes = [];

  //prompt password length and chech length requirements
  while ((passlength < 8 || passlength > 128) || isNaN(passlength) ) {
    passlength = prompt("Select password length between 8 and 128 characters");
  }
  
  //prompt user to select at least one character type
  while (characterTypes.length <= 0) {
    var userResponse = prompt("Do you want to include Numbers? Yes/No");
    if (userResponse.toLowerCase() === "y" || userResponse.toLowerCase() === "yes") {
      characterTypes.push(numbers);
    }
    var userResponse = prompt("Do you want to include uppercase letters? Yes/No");
    if (userResponse.toLowerCase() === "y" || userResponse.toLowerCase() === "yes") {
      characterTypes.push(letters.toUpperCase());
    }
    var userResponse = prompt("Do you want to include lowercase letters? Yes/No");
    if (userResponse.toLowerCase() === "y" || userResponse.toLowerCase() === "yes") {
      characterTypes.push(letters);
    }
    var userResponse = prompt("Do you want to include special characters? Yes/No");
    if (userResponse.toLowerCase() === "y" || userResponse.toLowerCase() === "yes") {
      characterTypes.push(specialCharacters);
    }

    //Check if any character type was selected and remind user
    if (characterTypes.length == 0) {
      window.alert("Select at least one character type");
    }
  }

  var password = "";

  //function to generate password
  function generatePassword() {
    //Add atleast one symbol from each type selected  
    for ( characterTypeString of characterTypes) {
      password += characterTypeString.charAt(Math.floor(Math.random() * characterTypeString.length))
    }
    //fill the rest to selected length
    var poolOfChars = characterTypes.join("");

    for (i = password.length; i < passlength; i++) {
      password = password + poolOfChars.charAt(Math.floor(Math.random() * poolOfChars.length))
    }
  }

  generatePassword();
  //displaying password to user
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);