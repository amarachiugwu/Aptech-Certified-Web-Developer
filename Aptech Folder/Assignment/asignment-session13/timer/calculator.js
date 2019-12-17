var F;
var S;
var R;
var M;

function multiply(){
F = document.getElementById('firstNum');
S = document.getElementById('secNum');
R = document.getElementById('result');
 
var firstNum = parseInt(F.value);
console.log(F.value);
 var secNum = parseInt(S.value);
console.log(S.value);
//  var R =parseInt(R.value);
// console.log(R.value);
M = firstNum * secNum ;
console.log(M);
Result = document.getElementById('result').value;
	document.getElementById('result').value = "Your Result is" + M;
console.log(Result);
alert("Your result is: " + M);
}
function divide(){
F = document.getElementById('firstNum');
S = document.getElementById('secNum');
R = document.getElementById('result');
 
var firstNum = parseInt(F.value);
console.log(F.value);
 var secNum = parseInt(S.value);
console.log(S.value);
//  var R =parseInt(R.value);
// console.log(R.value);
D = firstNum / secNum ;
console.log(D);
document.getElementById('result').value =  "Your Result is" + D;
console.log(R);
alert("Your result is: " + D);
}
