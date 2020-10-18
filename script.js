// button to generate password
var generateBtn = document.querySelector("#generate");

// function
function writePassword() {

  var passwordLength = prompt('Tell me how long would you like your password to be');

  while ((passwordLength<8 || passwordLength>128) || isNaN(passwordLength)=== true ) {
    alert('You should put numeric value with a length between 8 and 128 characters long');
    var passwordLength = prompt('Tell me how long would you like your password to be');
  }

  var confirmLowerCase = confirm('Would you like to have lower cases?');
  var confirmUpperCase = confirm('Woul you like to have upper cases?');
  var confirmNumeric = confirm('Woul you like to have numbers?');
  var confirmSpecialChar = confirm('Woul you like to have special characters?');

  while (confirmLowerCase === false && confirmUpperCase === false && confirmNumeric === false && confirmSpecialChar === false) {
    alert('You should at least select one type of character');
    var confirmLowerCase = confirm('Would you like to have lower cases?');
    var confirmUpperCase = confirm('Woul you like to have upper cases?');
    var confirmNumeric = confirm('Woul you like to have numbers?');
    var confirmSpecialChar = confirm('Woul you like to have special characters?');
  }

  Number(passwordLength);

  //All true 

  if (confirmLowerCase===true && confirmUpperCase===true && confirmNumeric===true & confirmSpecialChar===true) {

  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialChar = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var charType = [0,1,2,3];
  var password = "";
    
    var randomChar = Math.floor (Math.random()*charType.length);

    for (let index = 0; index < passwordLength; index++) {
      
      var randomChar = Math.floor (Math.random()*charType.length);
    
      if (randomChar===0) {
        var randomLowerCase = Math.floor (Math.random()*lowerCase.length);
        var password = lowerCase[randomLowerCase]+password;
      }
      else if (randomChar===1) {
        var randomUpperCase = Math.floor (Math.random()*upperCase.length);
        var password = upperCase[randomUpperCase]+password;
      }
      else if (randomChar===2) {
        var randomNumber = Math.floor (Math.random()*numbers.length);
        var password = numbers[randomNumber]+password;
      }
      else if (randomChar===3) {
        var randomSpecialChar = Math.floor (Math.random()*specialChar.length);
        var password = specialChar[randomSpecialChar]+password;
      }
    
    }

  }

  //Without lower case

  if (confirmLowerCase===false && confirmUpperCase===true && confirmNumeric===true & confirmSpecialChar===true) {

    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var specialChar = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"];
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var charType = [0,1,2];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomUpperCase = Math.floor (Math.random()*upperCase.length);
          var password = upperCase[randomUpperCase]+password;
        }
        else if (randomChar===1) {
          var randomNumber = Math.floor (Math.random()*numbers.length);
          var password = numbers[randomNumber]+password;
        }
        else if (randomChar===2) {
          var randomSpecialChar = Math.floor (Math.random()*specialChar.length);
          var password = specialChar[randomSpecialChar]+password;
        }
      
      }
  
    }

    //Without upper case

    if (confirmLowerCase===true && confirmUpperCase===false && confirmNumeric===true & confirmSpecialChar===true) {

      var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      var specialChar = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"];
      var numbers = ["0","1","2","3","4","5","6","7","8","9"];
      var charType = [0,1,2];
      var password = "";
        
        var randomChar = Math.floor (Math.random()*charType.length);
    
        for (let index = 0; index < passwordLength; index++) {
          
          var randomChar = Math.floor (Math.random()*charType.length);
        
          if (randomChar===0) {
            var randomLowerCase = Math.floor (Math.random()*lowerCase.length);
            var password = lowerCase[randomLowerCase]+password;
          }
          else if (randomChar===1) {
            var randomNumber = Math.floor (Math.random()*numbers.length);
            var password = numbers[randomNumber]+password;
          }
          else if (randomChar===2) {
            var randomSpecialChar = Math.floor (Math.random()*specialChar.length);
            var password = specialChar[randomSpecialChar]+password;
          }
        
        }
    
      }

       //Without numeric

  if (confirmLowerCase===true && confirmUpperCase===true && confirmNumeric===false & confirmSpecialChar===true) {

    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var specialChar = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"];
    var charType = [0,1,2];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomLowerCase = Math.floor (Math.random()*lowerCase.length);
          var password = lowerCase[randomLowerCase]+password;
        }
        else if (randomChar===1) {
          var randomUpperCase = Math.floor (Math.random()*upperCase.length);
          var password = upperCase[randomUpperCase]+password;
        }
        else if (randomChar===2) {
          var randomSpecialChar = Math.floor (Math.random()*specialChar.length);
          var password = specialChar[randomSpecialChar]+password;
        }
      
      }
  
    }

     //Without special char

  if (confirmLowerCase===true && confirmUpperCase===true && confirmNumeric===true & confirmSpecialChar===false) {

    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var charType = [0,1,2];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomLowerCase = Math.floor (Math.random()*lowerCase.length);
          var password = lowerCase[randomLowerCase]+password;
        }
        else if (randomChar===1) {
          var randomUpperCase = Math.floor (Math.random()*upperCase.length);
          var password = upperCase[randomUpperCase]+password;
        }
        else if (randomChar===2) {
          var randomNumber = Math.floor (Math.random()*numbers.length);
          var password = numbers[randomNumber]+password;
        }
      
      }
  
    }

     //Without lower and upper 

  if (confirmLowerCase===false && confirmUpperCase===false && confirmNumeric===true & confirmSpecialChar===true) {

    var specialChar = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"];
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var charType = [0,1];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomNumber = Math.floor (Math.random()*numbers.length);
          var password = numbers[randomNumber]+password;
        }
        else if (randomChar===1) {
          var randomSpecialChar = Math.floor (Math.random()*specialChar.length);
          var password = specialChar[randomSpecialChar]+password;
        }
      
      }
  
    }

     //withou lower and numeric

  if (confirmLowerCase===false && confirmUpperCase===true && confirmNumeric===false & confirmSpecialChar===true) {

    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var specialChar = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"];
    var charType = [0,1];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);

       if (randomChar===0) {
          var randomUpperCase = Math.floor (Math.random()*upperCase.length);
          var password = upperCase[randomUpperCase]+password;
        }
        else if (randomChar===1) {
          var randomSpecialChar = Math.floor (Math.random()*specialChar.length);
          var password = specialChar[randomSpecialChar]+password;
        }
      
      }
  
    }

     //without lower and special char

  if (confirmLowerCase===false && confirmUpperCase===true && confirmNumeric===true & confirmSpecialChar===false) {

    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var charType = [0,1];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomUpperCase = Math.floor (Math.random()*upperCase.length);
          var password = upperCase[randomUpperCase]+password;
        }
        else if (randomChar===1) {
          var randomNumber = Math.floor (Math.random()*numbers.length);
          var password = numbers[randomNumber]+password;
        }
      
      }
  
    }

     //without upper and numeric

  if (confirmLowerCase===true && confirmUpperCase===false && confirmNumeric===false & confirmSpecialChar===true) {

    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var specialChar = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"];
    var charType = [0,1];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomLowerCase = Math.floor (Math.random()*lowerCase.length);
          var password = lowerCase[randomLowerCase]+password;
        }
        else if (randomChar===1) {
          var randomSpecialChar = Math.floor (Math.random()*specialChar.length);
          var password = specialChar[randomSpecialChar]+password;
        }
      
      }
  
    }

     //without upper and special

  if (confirmLowerCase===true && confirmUpperCase===false && confirmNumeric===true & confirmSpecialChar===false) {

    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var charType = [0,1];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomLowerCase = Math.floor (Math.random()*lowerCase.length);
          var password = lowerCase[randomLowerCase]+password;
        }
        else if (randomChar===1) {
          var randomNumber = Math.floor (Math.random()*numbers.length);
          var password = numbers[randomNumber]+password;
        }
      
      }
  
    }

     //without numeric and char

  if (confirmLowerCase===true && confirmUpperCase===true && confirmNumeric===false & confirmSpecialChar===false) {

    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var charType = [0,1];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomLowerCase = Math.floor (Math.random()*lowerCase.length);
          var password = lowerCase[randomLowerCase]+password;
        }
        else if (randomChar===1) {
          var randomUpperCase = Math.floor (Math.random()*upperCase.length);
          var password = upperCase[randomUpperCase]+password;
        }
      
      }
  
    }

       //lower case true

  if (confirmLowerCase===true && confirmUpperCase===false && confirmNumeric===false & confirmSpecialChar===false) {

    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var charType = [0];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomLowerCase = Math.floor (Math.random()*lowerCase.length);
          var password = lowerCase[randomLowerCase]+password;
        }
    
      }
  
    }

    
   //Upper

  if (confirmLowerCase===false && confirmUpperCase===true && confirmNumeric===false & confirmSpecialChar===false) {

    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var charType = [0];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomUpperCase = Math.floor (Math.random()*upperCase.length);
          var password = upperCase[randomUpperCase]+password;
        }
      }
  
    }

           //numeroc case true

  if (confirmLowerCase===false && confirmUpperCase===false && confirmNumeric===true & confirmSpecialChar===false) {

    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var charType = [0];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomNumber = Math.floor (Math.random()*numbers.length);
          var password = numbers[randomNumber]+password;
        }
    
      }
  
    }

            //special char case

  if (confirmLowerCase===false && confirmUpperCase===false && confirmNumeric===false & confirmSpecialChar===true) {

    var specialChar = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\\"];
    var charType = [0];
    var password = "";
      
      var randomChar = Math.floor (Math.random()*charType.length);
  
      for (let index = 0; index < passwordLength; index++) {
        
        var randomChar = Math.floor (Math.random()*charType.length);
      
        if (randomChar===0) {
          var randomSpecialChar = Math.floor (Math.random()*specialChar.length);
          var password = specialChar[randomSpecialChar]+password;
        }
    
      }
  
    }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
