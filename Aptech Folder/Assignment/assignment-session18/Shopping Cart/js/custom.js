//onload, store all products in localStorage
storeAllProducts();
updateMyCart();


function addtoCart(spanElement) {
	var productId = spanElement.getAttribute('data-id');
	var productName = spanElement.getAttribute('data-name');
	var productPrice = spanElement.getAttribute('data-price');

	var product = {
		id : productId,
		name : productName,
		price : productPrice
	}


	if (localStorage.getItem("myCart") == null){

		var products = [];
		products.push(product);
		products = JSON.stringify(products);

		localStorage.setItem("myCart", products);
		updateMyCart();
		alert(productName + " added to cart");

	}else{
		products = localStorage.getItem("myCart");
		products = JSON.parse(products);

		products.push(product);
		products = JSON.stringify(products);

		localStorage.setItem("myCart", products);
		updateMyCart();
		alert(productName + " added to cart");
	}
}


function updateMyCart() {
	if (localStorage.getItem("myCart")) {

		var products = localStorage.getItem("myCart");
		products = JSON.parse(products);
		var numProducts = products.length;

		var items = document.getElementById('items');
		items.innerHTML = numProducts;
	}
}


// window.onscroll = function() {stickyNav()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;


// function stickyNav() {

//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");

//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

function storeAllProducts() {
	var allProducts = [
		{id:"001", name:"iPhone6", price:"90000", image:"images/img1.jpg"},
		{id:"002", name:"Amethyst Ring", price:"250000", image:"images/img2.jpg"}, 
		{id:"003", name:"Diamond Pendant", price:"120000", image:"images/img3.jpg"},
		{id:"004", name:"iPhone 6s", price:"100000", image:"images/img4.jpg"},
		{id:"005", name:"Jewelry Set", price:"350000", image:"images/img5.jpg"},
		{id:"006", name:"Emerald Necklace", price:"450000", image:"images/img6.jpg"}
	];

	if (localStorage.getItem("allProducts") == null) {

		allProducts = JSON.stringify(allProducts);
		localStorage.setItem("allProducts", allProducts);
		alert("All products have been initialized successfully");
	}
}

function fetchProd(e, anchorElement) {
	e.preventDefault();

	var imgDiv = document.getElementById('productImage');
	var h1Name = document.getElementById('name');
	var h2Price = document.getElementById('price');
	var productId = anchorElement.getAttribute("data-id");


	if (localStorage.getItem("allProducts")) {
		var allProducts = localStorage.getItem("allProducts");
		allProducts = JSON.parse(allProducts);

		for (var i = 0; i < allProducts.length; i++) {

			if (allProducts[i].id == productId) {
				var selectedProduct = allProducts[i];
				break;
			}
		}

		var productName = selectedProduct.name;
		var productPrice = selectedProduct.price;
		var productImage = selectedProduct.image;

		// imgDiv.style.backgroundImage = "url(" + productImage + ")";
		h1Name.innerHTML = productName;
		h2Price.innerHTML = productPrice;
	}
}
