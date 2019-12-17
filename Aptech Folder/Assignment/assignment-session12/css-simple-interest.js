var P;
var R;
var T;
var SI;

function submit1(){
P = document.getElementById('principal');
R = document.getElementById('rate');
T = document.getElementById('time');
 
var principal = parseInt(P.value);
console.log(P.value);
 var rate = parseInt(R.value);
console.log(R.value);
 var time =parseInt(T.value);
console.log(T.value);
SI = (principal * rate * time) / 100;
	alert("Your SI is: " + SI);
}
