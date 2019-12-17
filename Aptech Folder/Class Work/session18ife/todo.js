var save = document.getElementById('saveBtn');
var clear = document.getElementById('clearBtn');
var list = document.getElementById('theList');
var todoList;

save.addEventListener('click', saveAll);
clear.addEventListener('click', clearAll);

function saveAll(e) {
	e.preventDefault();
	todoList = list.innerHTML;
	if (window.localStorage) {
		localStorage.setItem("todo", todoList);
		alert("Your list has been updated successfully");
	}
}

function clearAll(e) {
	e.preventDefault();
	if (localStorage.getItem("todo")) {

		var response = confirm("Are you sure you want to discard these entries?\n This action is irreversible");
		if (response == true) {
			localStorage.clear();
			alert("Your list has been cleared successfully");
			location.reload();
		}else{
			alert("You canceled the clear action.\nYour list is still intact");
		}
	}else{
		alert("Sorry. Your list is empty");
	}
}

function loadList() {
	if (localStorage.getItem("todo")) {
		list.innerHTML = localStorage.getItem("todo");
	}
}

loadList();