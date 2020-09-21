///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

//Master character set

var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var numSet = "0123456789";
var symSet = "!@#$%^&*()_+-={}[]|:;,./<>'\"?";


function generatePassword() {
//Execute prompt  to get length of password and confirms criteria
//Checking for valid length
  
  var length;
  do {
    length = prompt("Please enter the length of password between 8 to 128.");
    //transfer string to integer
    if (length) {
      length = parseInt(length);
    }

    if (length < 8 || length > 128 || !length) {
      alert("Please set password length between 8 and 128 long.");
    }
  } while (length < 8 || length > 128 || !length);

  //Checkig for criteria
  do {
    var uppercase = confirm("Would you like to include uppercase letters?");
    var lowercase = confirm("Would you like to include lowercase letters?");
    var numbers = confirm("Would you like to include numbers?");
    var special = confirm("Would you like to include special characters?");

    if (
      uppercase === false &&
      lowercase === false &&
      numbers === false &&
      special === false
    ) {
      alert("Please select at least one criteria.");
    }
  } while (
    uppercase === false &&
    lowercase === false &&
    numbers === false &&
    special === false
  );

  //collecting strings of data required
  var pool = "";

  if (uppercase) {
    pool += charUpper;
  }

  if (lowercase) {
    pool += charLower;
  }

  if (numbers) {
    pool += numSet;
  }

  if (special) {
    pool += symSet;
  }

  var newpassword = "";

  for (var i = 0; i < length; i++) {
    var groupIndex = Math.floor(Math.random() * pool.length);
    newpassword += pool.charAt(groupIndex);
  }
  return newpassword
}

//////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
