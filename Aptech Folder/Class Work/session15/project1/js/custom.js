

var searchBtn = document.querySelector('#searchBtn');
searchBtn.onclick = function(){
	searchModal = document.querySelector('#searchModal');
	searchModal.setAttribute('class', 'show');
	inputBox.style.display = 'none';
}
var closeIcon = document.getElementById('closeIcon');
closeIcon.onclick = function(){
	searchModal.setAttribute('class', '');
}
searchBtn.onmouseover =  function showInputBox(){
	inputBox = document.getElementById('searchInput');
	inputBox.style.display = 'block'
}
