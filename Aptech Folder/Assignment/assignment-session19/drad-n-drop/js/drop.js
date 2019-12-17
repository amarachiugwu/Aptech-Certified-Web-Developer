var droparea = document.getElementById('passport');

function dragOver(e) {
	e.preventDefault();
	droparea.style.borderColor = '#A91D20';
}
function dragLeave(e) {
	e.preventDefault();
	droparea.style.borderColor = '#ccc';
}

function drop(e) {
	droparea.style.borderColor = '#ccc';
	e.preventDefault();

	var files = e.dataTransfer.files;
		var file = files[0];
		var reader = new FileReader();

		reader.onload = function (e) {

			var img = document.createElement("img");
			img.src = e.target.result;
			// alert(img.src);b
			img.style.width = "180px";
			img.style.height = "180px";
			droparea.appendChild(img);

		}
		
		reader.readAsDataURL(file);
		// alert(file);
}

window.onload = function() {
    var files = document.querySelectorAll("input[type=file]");
    files[0].addEventListener("change", function(e) {
        if(this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) { document.getElementById("preview").setAttribute("src", e.target.result); }
            reader.readAsDataURL(this.files[0]);
            var imgpassport = document.getElementById('preview');
            if (droparea.innerHTML != null) {
            	droparea.innerHTML = null;
            	droparea.appendChild(imgpassport);
           	    imgpassport.style.display = 'block';
            }
            else{
            	droparea.appendChild(imgpassport);
            imgpassport.style.display = 'block';
            }
        }
    });
}

