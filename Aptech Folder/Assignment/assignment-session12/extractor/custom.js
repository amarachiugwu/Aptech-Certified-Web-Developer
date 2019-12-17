//Event Handller For Email(s)
function extract(e) {
		e.preventDefault();
		var txtStrings = document.getElementById('txtStrings');
		var userString = txtStrings.value;
		var result = document.getElementById('result');
		var numStrings = document.getElementById('numStrings');

		var pattern = /[a-z0-9_.]+@[a-z0-9-]+\.[a-z.]{2,6}/ig;
		if(countEmails !== null){
		var emails = userString.match(pattern);
		result.style.display = "block";
		result.value = emails;

		numStrings.style.display = "block";
		var countEmails = emails.length;

		numStrings.innerHTML = countEmails + " Email(s) Extracted below."
		}
		else{
			result.style.display = "none";
			numStrings.innerHTML = "No " + "email(s) Extracted ."
			// numStrings.innerHTML = countNumbers + " Url(s) Extracted below."
		}
	}

//Event Handller for Phone No(s)
function extract2(e) {
		e.preventDefault();
		var txtStrings = document.getElementById('txtStrings');
		var userString = txtStrings.value;
		var result = document.getElementById('result');
		var numStrings = document.getElementById('numStrings');

		// var pattern = /(090)\d{8}|(080)\d{8}|(070)\d{8}|(081)\d{8}/g;
		var pattern = /(090|080|070|081)\d{8}/g;

		if(countNumbers == null){
				result.style.display = "none";
				numStrings.innerHTML = "No " + " Phone Number(s) Extracted .";
		}
		else{
			result.style.display = "block";
			numStrings.innerHTML = countNumbers + " Phone Number(s) Extracted below.";
		}
		var numbers = userString.match(pattern);
		result.style.display = "block";
		result.value = numbers;
		numStrings.style.display = "block";
		var countNumbers = numbers.length;
		console.log(numbers);
		numStrings.innerHTML = countNumbers + " Phone Number(s) Extracted below.";

		
	}

//Event Handller for url(s)
	function extract3(e) {
		e.preventDefault();
		var txtStrings = document.getElementById('txtStrings');
		var userString = txtStrings.value;
		var result = document.getElementById('result');
		var numStrings = document.getElementById('numStrings');

		var pattern = /(http|https):\/\/(www.)?[a-z0-9]+\.[a-z]+/ig;
		// other possible regular expression for url(s) validation
		// var pattern = /(http:|https:)\/\/(w+.)?[a-z0-9]+\.[\w]+/ig;
		// var pattern = /https?:\/\/(\w{3}.)?[a-z\d]+\.[\w]+/ig;

		if(countUrls == null){
				result.style.display = "none";
				numStrings.innerHTML = "No " + " Url(s) Extracted .";
		}
		else{
			result.style.display = "block";
			numStrings.innerHTML = countUrls + " Url(s) Extracted below."
		}

		var webAddress = userString.match(pattern);
		
		result.value = webAddress;

		numStrings.style.display = "block";
		var countUrls = webAddress.length;
		result.style.display = "block";

		numStrings.innerHTML = countUrls + " Url(s) Extracted below."
	}