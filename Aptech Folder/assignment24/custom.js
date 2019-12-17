var image = document.querySelector('.image');
var text = document.querySelector('.text');
var btn = document.getElementById('btn');


image.addEventListener('dragover', function (e) {
	e.preventDefault();
	image.style.border = "1px solid #80cdf8";

});

// if (window.FileReader) {
// 	alert("hi");
// }

image.addEventListener('drop', function (e) {
	e.preventDefault();

	var files = e.dataTransfer.files;
	// Get and store the data attribute of the files in a variable

	for (var i = 0; i < files.length; i++) {

		var file = files[i];
		// create an array of files, just in case the user drags in multiple files

		var reader = new FileReader();
		// Create a reader that can read the file type and it's src else your file won't show and when it's done loading, create the img element, get the img src from the reader, set the img width and height to 100% of the div it is appearing in, then append the img element to your div.

		// Remember to call your reader function

		reader.onload = function (e) {

			var img = document.createElement("img");
			img.src = e.target.result;
			img.style.width = "100%";
			img.style.height = "100%";
			img.style.borderRadius = "50%";
			image.style.border = "#1px solid #fff";
			image.appendChild(img);

		}
		
		reader.readAsDataURL(file);
	}	alert(file);
});



function showStyle(inputElement) {
	inputElement.style.border = "1px solid #80cdf8";
}

function hideStyle(inputElement) {
	inputElement.style.border = "none";
}