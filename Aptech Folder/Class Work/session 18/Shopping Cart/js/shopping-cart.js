//On page load store all products in web storage
storeAllProducts();
updateMyCart();

function addtoCart(spanElement) {
	var productId = spanElement.getAttribute('data-id');
	var productName = spanElement.getAttribute('data-name');
	var productPrice = spanElement.getAttribute('data-price');
	// Convert products details into an object
	var product = {
		id : productId,
		name : productName,
		price : productPrice
	}

	//Check whether there is an instance of a cart in web storage
	if (localStorage.getItem("mycart") == null) {
		var products = [];
		products.push(product);
		//Convert array into a string using JSON.stringify
		products = JSON.stringify(products);
		localStorage.setItem("mycart", products);
		updateMyCart();
		alert(productName + " added to cart!");
	} else {
		products = localStorage.getItem('mycart');
		//Convert string retrieved from web storage back to an array...
		products = JSON.parse(products);
		products.push(product);
		//Convert array into a string using JSON.stringify
		products = JSON.stringify(products);
		localStorage.setItem("mycart", products);
		updateMyCart();
		alert(productName + " added to cart!");
	}
}

function updateMyCart() {
	if (localStorage.getItem("mycart")) {
		var products = localStorage.getItem('mycart');
		products = JSON.parse(products);
		var numProducts = products.length;
		var basket = document.getElementById('items');
		basket.innerHTML = numProducts;
	}
}

function storeAllProducts() {
	var allProducts = [
		{id:"001", name:"iPhone 6", price:"90000", image:"images/img1.jpg"},
		{id:"002", name:"Amethyst Ring", price:"250000", image:"images/img2.jpg"},
		{id:"003", name:"Diamond Necklace", price:"12000", image:"images/img3.jpg"},
		{id:"004", name:"iPhone 6s", price:"100000", image:"images/img4.jpg"},
		{id:"005", name:"Jewellery", price:"350000", image:"images/img5.jpg"},
		{id:"006", name:"Emerald", price:"450000", image:"images/img6.jpg"},
	 ];

	 if (localStorage.getItem("allProducts") == null) {
	 	allProducts = JSON.stringify(allProducts);
	 	localStorage.setItem("allProducts", allProducts);
	 	alert("All products initialized successfull!");
	 }
}

//Define event handler for fetching each product's details

function fetchProduct(prodId) {
	//e.preventDefault();
	//location.href = "product-desc.html";
	
	var imgDiv = document.getElementById("productImage");
	var h1Name = document.getElementById("name");
	var h2Price = document.getElementById("price");

	var productId = prodId;//anchorElement.getAttribute("data-id");
	if (localStorage.getItem("allProducts")) {
		var allProducts = localStorage.getItem("allProducts");
		allProducts = JSON.parse(allProducts);

		for (var i = 0; i < allProducts.length; i++) {
			if (allProducts[i].id == productId) {
				var selectedProduct = allProducts[i];
				break;
			}
		}

		//alert(selectedProduct);
		//Display product details on product_desc.html web page
		var productName = selectedProduct.name;
		var productPrice = selectedProduct.price;
		var productImagePath = selectedProduct.image;

		h1Name.innerHTML = productName;
		h2Price.innerHTML = productPrice;
		imgDiv.style.backgroundImage = "url(" + productImagePath + ")";
	}
}

window.onload = function() {
	var url = location.href;
	var pieces = url.split("=");
	var productID = pieces[1];
	fetchProduct(productID);
	
}