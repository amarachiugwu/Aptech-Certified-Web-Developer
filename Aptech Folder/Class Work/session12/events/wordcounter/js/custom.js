function countWords() {
//select HTML element of interest
var txtLetter = document.getElementById('txtLetter');
var txtInfo = document.getElementById('txtInfo');

//Get message typed in the textarea which is stored in the textarea txtLetter

var letter = txtLetter.value;

//sanitize message by removing all the  multiple white spaces and replacing with a single space in order to split and count the words in it
letter = letter.replace(/\s+/g, ' ');

//Brake letter into pieces in order to be able to count them using split method
letter = letter.split(" ");

//count the number of words splitted

var numWords = letter.length;
 // display result of number of words remaining to the user

 if (numWords > 50){alert("sorry, you have exeeded the maximum allowed number of words!"); 
txtInfo.value = "sorry, you have exeeded the maximum allowed number of words!";
txtInfo.style.backgroundColor = "red";
txtInfo.style.color = "#eee";}
 	else {txtInfo.value = "You have " + eval(50 - numWords) + " words remaining";
txtInfo.value = "You have " + eval(50 - numWords) + " words remaining";
txtInfo.style.backgroundColor = "cyan";
txtInfo.style.color = "#eee";

 }
}
