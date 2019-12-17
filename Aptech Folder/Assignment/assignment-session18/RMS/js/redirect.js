var db;
var transaction;
var indexedDB = window.indexedDB | window.mozIndexedDB | window.webkitIndexedDB;
var list = document.createElement('ul');
var listItem = document.createElement('li');
var tableEntry = document.getElementById('tableEntry');
var openRequest = indexedDB.open('RMS-Nov', 1);

// console.log(indexedDB);
openRequest.onerror = function (e) {
	// var listItem = document.createElement('li');
	listItem.innerHTML = 'Database could not be opened ' + e.target.errorCode;
	list.appendChild(listItem);
}

openRequest.onsuccess = function (e) {
	db = e.target.result;
	var listItem = document.createElement('li');
	listItem.innerHTML = 'Database Initialized!';
	list.appendChild(listItem);
}

openRequest.onupgradeneeded = function (e) {
	// var 
	db = e.target.result;
	if (! db.objectStoreNames.contains('students')) {
		db.createObjectStore('students', {keyPath : 'id', autoIncrement : true});
		// var listItem = document.createElement('li');
		listItem.innerHTML = 'New Object Store created successfully!';
		list.appendChild(listItem);
	}
}

var allRecords = document.getElementById('view_allRecords');
// allRecords.addEventListener('click', view_allRecords());
	
	allRecords.onclick = function(e) { 	
	allRecords.style.display = 'none';
	e.preventDefault();
	transaction = db.transaction('students').objectStore('students');  
transaction.openCursor().onsuccess = function(event) {   
	var cursor = event.target.result;   if (cursor) {
	
		var tablerow = document.createElement('tr')	;
		tablerow.style.backgroundColor = 'red';
		tablerow.style.backgroundColor = '#6081ba';
		tablerow.style.fontSize = '20px';
		tablerow.style.color = '#eee';
		tablerow.style.textAlign = 'center';
		// tablerow.innerHTML = 	'<th>' + 'Name' + '</th>'
		// 					+ '<th>' + 'Email' + '</th>'
		// 					+ '<th>' + 'Course' + '</th>'
		// 					+ '<th>' + 'Address' + '</th>';
		tablerow.innerHTML +=  '<td>' + cursor.value.name + '</td>'
							+ '<td>' + cursor.value.email + '</td>'
							+ '<td>' + cursor.value.course + '</td>'
							+ '<td>' + cursor.value.address + '</td>';
		tableEntry.appendChild(tablerow);
		cursor.continue(); 

	} 
};
}


 