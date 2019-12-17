var theList = document.getElementById('theList');
var saveBtn = document.getElementById('saveBtn');
var clearBtn = document.getElementById('clearBtn');
var todoList;
// Add event listener
saveBtn.addEventListener('click', saveAll);
clearBtn.addEventListener('click', clearAll);

// define event handlers
function saveAll(e) {
	e.preventDefault();
	todoList = theList.innerHTML;
	if (window.localStorage) {
		localStorage.setItem('todo', todoList);
		alert('TODO list items updated sucessfully!');
	}
}
function clearAll(e) {
	e.preventDefault();
	if (localStorage.getItem('todo')) {
		var response = confirm('Are you sure you want to clear your todo list items?\nThis action cannot be reserved.');
	
	if (response == true) {
		localStorage.clear();
		alert('TODO list cleared sucessfully');
		location.reload();
		
	}else{
			alert("You canceled the clear action.\nYour list is still intact");
	}
	}else{
		alert('No item in your todo list item');
	
}
}

function loadTODO() {
	if (localStorage.getItem('todo')) {
		theList.innerHTML = localStorage.getItem('todo');   
	}
}