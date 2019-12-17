var pictureFrame = document.querySelector('.pictureFrame');
function drag(e) {
	e.dataTransfer.setData("imageId", e.target.id);

}

function allowDrop(e) {
	e.preventDefault();
}

function drop(e) {
	var imageId = e.dataTransfer.getData("imageId");
	e.target.appendChild(document.getElementById(imageId));
}