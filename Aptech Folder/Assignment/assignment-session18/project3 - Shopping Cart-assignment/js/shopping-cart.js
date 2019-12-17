updateMyCart();
function addtoCart(spanElement) {
	var productId = spanElement.getAttribute('data-id');
	var productName = spanElement.getAttribute('data-name');
	var productPrice = spanElement.getAttribute('data-price');


// CONVERT PRODUCT DETAILS INTO AN OBLECT
	var product = {
		id: productId,
		name: productName,
		price: productPrice,
	}

	// check wheather there is an instance of a cart on the web storage
	if (localStorage.getItem('mycart') == null) {
		var products = [];
		products.push(product);
		// convert into a string using JSON.stringify
		products = JSON.stringify(products);

		localStorage.setItem('mycart', products);
		updateMyCart();
		alert(productName + ' added to cart!');
	}else{
		products = localStorage.getItem('mycart');
		// conver string retrieved from web storage back to an array
		products = JSON.parse(products);
		products.push(product);
		// alert(products[0]);
		// convert into a string using JSON.stringify
		products = JSON.stringify(products);
		localStorage.setItem('mycart', products);
		updateMyCart();
		alert(productName + ' added to cart!');
	}
}

function updateMyCart() {
	if (localStorage.getItem('mycart')) {
		var products = localStorage.getItem('mycart');
		products = JSON.parse(products);
		var numProducts = products.length;
		var basket = document.getElementById('items');
		basket.innerHTML = numProducts;
	}
}
function openDescription(img) {
	var image = document.getElementById('img');
	// image.innerHTML = 'img';
	alert(img);
}