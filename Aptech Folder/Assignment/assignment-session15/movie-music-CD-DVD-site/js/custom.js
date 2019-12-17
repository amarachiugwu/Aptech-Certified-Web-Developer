function displayDetails(url) {
	freshWindow = window.open(url, '_blank', 'width=600,height=600,scrollbars=yes');
}
function makePayment(url){
	window.open(url, '_self');
}

function validateInputs(){
var cardNo = document.getElementById('cardNo').value;
// cardNo = document.getElementById('cardNo').value;
var  zipCodeCard = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
var expiryDate = document.getElementById('expiryDate').value;
// expiryDate = document.getElementById('expiryDate').value;
var  zipCodeDate = /^\d[0-31]{2}\/\d[1-12]{2}$/;
var cvc = document.getElementById('cvc').value;
// cvc = document.getElementById('cvc').value;
var  zipCodeCvc = /^\d[0-9]{3}$/;
var pin = document.getElementById('pin').value;
// pin = document.getElementById('pin').value;
var  zipCodePin = /^\d{4}$/;
console.log('cardNo');
	if((zipCodeCard.exec(cardNo)&zipCodeDate.exec(expiryDate)&zipCodeCvc.exec(cvc)&zipCodePin.exec(pin)) != null){
		alert('Payment Sucessful');
	}else{
		alert('Invalid card No or pin');
	}
}
var backbtn  = document.getElementById('back');
var forwardbtn  = document.getElementById('forward');

//attach eventlisteners to the two buttons

 function backBtn() {
	history.back();
}
function forwardBtn(){
	history.forward();
}