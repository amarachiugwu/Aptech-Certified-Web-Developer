function categories(url){
	window.open(url);
}
window.onload = function () {
	document.getElementById('noInCart').innerHTML = localStorage.getItem('noInCart');
}
var noInCart =  document.getElementById('noInCart');
function addToCart() {
	if(window.localStorage) {
		// if (document.getElementById('noInCart').getAttribute('class','added')) {
		// 	alert('Already Added to cart');
		// }
		// else{
			// document.getElementById('noInCart').setAttribute('class','added');
			noInCart =	parseInt(document.getElementById('noInCart').innerHTML);
			noInCart += 1;
			localStorage.setItem('noInCart', noInCart);
			document.getElementById('noInCart').innerHTML = localStorage.getItem('noInCart');
		// }
	}else{
		alert('Your browser does not support localStorage');
	}

}

function deleteFromCart() {
	if(localStorage.getItem('noInCart')) {
		if (localStorage.getItem('noInCart') > 0) {
		x =	localStorage.getItem('noInCart');
		x  = --x;
		document.getElementById('noInCart').innerHTML = x;
		noInCart.innerHTML = localStorage.setItem('noInCart', x);
	}else{
		document.getElementById('noInCart').innerHTML = 0;
		alert('Your cart is empty');		
	}
	}else{
		alert('Your browser does not support localStorage');
	}
}

function prevPage() {
	window.location.assign('../index.html');
}
function NextPage() {
	window.location.assign('redirect1/clock-watchRedirect.html');
}
