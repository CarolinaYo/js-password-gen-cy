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
Var masterChar = {
  charUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  charLower: "abcdefghijklmnopqrstuvwxyz",
  numSet: "0123456789",
 //not liking the " symbol
  symSet: "!@#$%^&*()_+-={}[]|\:;,./<>'?",
}

//or this?
 var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var charLower = "abcdefghijklmnopqrstuvwxyz";
 var numSet = "0123456789";
 //not liking the " symbol
 var symSet = "!@#$%^&*()_+-={}[]|\:;,./<>'?";

//-----Execute prompts after the button click---as told in the HW requirement---

function writePassword(){
  var length = prompt("Please enter the length of password between 8 to 128.");
    if (length < 8 || length > 128 || length === ""){
      alert ("Please set password length between 8 and 128 long.");
      //HELP!!need to return to re enter, run a loop
    };
    
  var uppercase = confirm("Would you like to include uppercase letters?");
  var lowercase = confirm("Would you like to include lowecase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var special = confirm("Would you like to include special characters?");
 
  //MUST select one criteria----- this code seems so raw....any better way???
    if (uppercase === false && lowercase === false && numbers === false && special === false){
      alert ("Please select at least one criteria.");
      //again....need to go back to run these propmts automatically???
    }
  }

  //loop to choose the characters----LOST

  for(var i=0; i<=length; i++){
    let password = "";
    password = 
    
    
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




 

