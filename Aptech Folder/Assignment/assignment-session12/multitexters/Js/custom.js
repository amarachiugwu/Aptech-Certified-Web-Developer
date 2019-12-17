function countLetters() {
    var letters = document.getElementById('Message');
    var lettersLeft = document.getElementById('lettersLeft');
    var character = letters.value;
    var pages;
    var numb = 160;
    character = character.replace(/\s+/g, '');
    character = character.split("");
    character = character.length;
    character = numb -character;
    console.log(character);
    if(character <= 160){
      pages = 1;
      if(){}
    } 
    
    lettersLeft.innerHTML = "<p>Characters left:</p>" + character + "/" + numb + "      " + "<p>Page:</p>" + pages;
}

//  var char_limit = 160; 	
//  var letters;
// var lettersLeft;
// var character;
//  var char_rem;
//  var main_count_down = 160;
//  var typed_val ;
//  var num = 1;
//  // pages = document.getElementById("pages").innerHTML = 1;
//  // pages = parseInt(pages.value);
//  // // pages = 1;
//  console.log(pages);
//  var total_typed;
// function countLetters() {
// var  pages = 1;
//  countLetters.total_typed = 160;	

// letters =  document.getElementById('Message');
// lettersLeft = document.getElementById('lettersLeft');

// character = letters.value;
// character = character.replace(/\s+/g,'');
// character = character.split("");

// var numLetters = character.length;
//   // if (numLetters == 160) {
//   // 	numLetters = 0;
//   // }
//   char_rem = eval((numLetters % char_limit) + 1);
  
//   typed_val = main_count_down - char_rem;
  
//    if ( numLetters  > 160) {
//    	 var init = lettersLeft.innerHTML;
//     countLetters.total_typed = countLetters.total_typed +  160;	  
//    }
//    if (countLetters.total_typed > 160) {
//    	 pages = 2;
//    }
//    // else (countLetters.total_typed > 160) {
//    // 	var pages = 2;
//    // }

//  lettersLeft.innerHTML ="<p>Cheracters left:</p> " + " " + typed_val+ "/" + countLetters.total_typed  + " " + "<p>Page(s):</p> " + pages ;
//  // console.log(char_limit);
// }