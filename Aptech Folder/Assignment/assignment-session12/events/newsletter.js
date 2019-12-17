// This i myinput
function myInput() {
  var myname = document.getElementById('myname');
 
  var comment = document.getElementById('message');
		document.getElementById('message').innerHTML = "Dear " + myname.value 	 + 	" We are always here for you just drop you comment and we will get back to you immediately";

}


// function, declaration and intializadtion of onchange event
function showState() {
var sel = document.getElementById('country');
		sel = sel.value;
		console.log(sel);
var chg = document.getElementById('state');
         chg = chg.value;
		console.log(chg);
	var sat = document.getElementById('sat');
	var stateCont = document.getElementById('stateCont'); 

		if(sel == "Nigeria"){
		document.getElementById('state').style.display= 'inline';
		document.getElementById('sat') .style.display= 'inline';
		document.getElementById('stateCont') .style.display= 'block';
		}
}




function changeColor(element) {
 	  element.style.backgroundColor = "#fff";
 	  element.style.color = "maroon";
 } 
 function hideColor(tag) {
 	  tag.style.backgroundColor = "transparent";
 	  tag.style.color = "maroon";
 } 
 function clearTxt() {
 	document.getElementById('message').innerHTML = "";
 	document.getElementById('message').style.backgroundColor = "#fff";
 	document.getElementById('message').style.color = "maroon";
 }