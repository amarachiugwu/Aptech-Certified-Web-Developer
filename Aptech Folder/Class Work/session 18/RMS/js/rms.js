var db;
var transaction;
var indexedDB = window.indexedDB | window.mozIndexedDB | window.webkitIndexedDB;
var list = document.getElementById('info');
var listItem = document.createElement('li');
var openRequest = indexedDB.open('RMS-Nov', 1);

// console.log(indexedDB);
openRequest.onerror = function (e) {
	var listItem = document.createElement('li');
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
	var db = e.target.result;
	if (! db.objectStoreNames.contains('students')) {

		db.createObjectStore('students', {keyPath : 'id', autoIncrement : true});
		var listItem = document.createElement('li');
		listItem.innerHTML = 'New Object Store created successfully!';
		list.appendChild(listItem);
	}
}


// Begin add event handler
// select HTML form controls
var txtName = document.getElementById('txtName');
var txtEmail = document.getElementById('txtEmail');
var txtCourse = document.getElementById('txtCourse');
var txtAddress = document.getElementById('txtAddress');

var submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = function(e) {
	// get value of HTML form controls
	e.preventDefault();
	var fullname = txtName.value;
	var email = txtEmail.value;
	var course = txtCourse.value;
	var address = txtAddress.value;


var record = {
	name : fullname,
	email : email,
	course : course,
	address : address
}

// start a transaction

transaction = db.transaction(['students'], 'readwrite');

// get an object store from transaction
var studentObjectStore = transaction.objectStore('students');

// add record to students object store
var addRequest = studentObjectStore.add(record);

addRequest.onerror = function (e) {
	listItem.innerHTML = 'Sorry something went wrong';
	list.appendChild(listItem);
}

addRequest.onsuccess = function (e) {
	listItem.innerHTML = 'New record added successfully';
	list.appendChild(listItem);
	clearForm();
}
}



function clearForm() {
	txtName.value = '';
	txtEmail.value = '';
	txtCourse.value = '';
	txtAddress.value = '';
}