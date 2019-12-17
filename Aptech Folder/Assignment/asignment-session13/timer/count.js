var endDate = new Date("Dec 25, 2018 00:00:00").getTime();

var x = setInterval(function() {

	var n = new Date().getTime(); 
	var time = endDate - n; 
	var days = Math.floor(time / (1000 * 60 * 60 * 24)); 
	var hours = Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
	var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
	var seconds = Math.floor((time % (1000 * 60)) / 1000); 

	document.getElementById("day").innerHTML =days ; 
	document.getElementById("hour").innerHTML =hours; 
	document.getElementById("minute").innerHTML = minutes;  
	document.getElementById("second").innerHTML =seconds;

    if (time < 0) { 
        clearInterval(x); 
        document.getElementById('count').innerHTML = "Yay! It's Christmas! Merry Christmas"; 
        document.getElementById("day").innerHTML ='0'; 
        document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ;  
        document.getElementById("second").innerHTML = '0'; 
    } 
}, 1000); 