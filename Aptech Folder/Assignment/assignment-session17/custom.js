var header = document.getElementById('cHeader');
var headerH1 = header.getContext('2d');

headerH1.fillStyle = 'yellow';
headerH1.strokeStyle = 'green';
headerH1.lineWidth = 1;
headerH1.font = '30px  times';
headerH1.fillText('Maxima Technologies', 15, 30);
headerH1.strokeText('Maxima Technologies', 15, 30);
headerH1.fill();
headerH1.stroke();

headerH1.fillStyle = 'red';
headerH1.strokeStyle = 'red';
headerH1.lineWidth = 1;
headerH1.font = '20px  arial';
headerH1.fillText('Promo! Promo!! Promo!!! ', 40, 70);
headerH1.strokeText('Promo! Promo!! Promo!!! ', 40, 70);

headerH1.fillStyle = 'white';
headerH1.strokeStyle = 'white';
headerH1.lineWidth = 1;
headerH1.font = '18px  arial';
headerH1.fillText('Check out our new Software for kids ', 5, 90);
headerH1.strokeText('Check out our new Software for kids ', 5, 90);

headerH1.fillStyle = 'white';
headerH1.strokeStyle = 'white';
headerH1.lineWidth = 1;
headerH1.font = '20px  arial';
headerH1.fillText('One month free trial ', 60, 110);
headerH1.strokeText('One month free trial ', 60, 110);

headerH1.fillStyle = 'white';
headerH1.strokeStyle = 'white';
headerH1.lineWidth = 1;
headerH1.font = '18px  arial';
headerH1.fillText('You will Surely like it just give it a try ', 5, 130);
headerH1.strokeText('You will Surely like it just give it a try ', 5, 130);

window.onload = function(){
	var softwareCont = document.getElementById('csoftwares');
	var software = softwareCont.getContext('2d');
	var img = document.getElementById('img1');
	software.beginPath();
	software.drawImage(img, 5, 10, 50, 50);
	software.closePath();

	var img = document.getElementById('img2');
	software.beginPath();
	software.drawImage(img, 65, 10, 50, 50);
	software.closePath();

	var img = document.getElementById('img3');
	software.beginPath();
	software.drawImage(img, 125, 10, 50, 50);
	software.closePath();

	var img = document.getElementById('img4');
	software.beginPath();
	software.drawImage(img, 185, 10, 50, 50);
	software.closePath();

	var img = document.getElementById('img5');
	software.beginPath();
	software.drawImage(img, 245, 10, 50, 50);
	software.closePath();

	var img = document.getElementById('img6');
	software.beginPath();
	software.drawImage(img, 25, 70, 70, 65);
	software.closePath();

	var img = document.getElementById('img7');
	software.beginPath();
	software.drawImage(img, 115, 70, 70, 65);
	software.closePath();

	var img = document.getElementById('img8');
	software.beginPath();
	software.drawImage(img, 205, 70, 70, 65);
	software.closePath();

	software.fillStyle = 'red';
	software.strokeStyle = 'red';
	software.lineWidth = 1;
	software.font = '10px  arial';
	software.fillText('Click to buy ', 120, 145);
	software.strokeText('Click to buy ', 120, 145);
 }

myProgrammers();
 function myProgrammers(){
	 var cProgrammers = document.getElementById('programmers');
	 var programmers = cProgrammers.getContext('2d');

	programmers.fillStyle = 'black';
	programmers.strokeStyle = 'black';
	programmers.lineWidth = 1;
	programmers.font = '25px  arial';
	programmers.fillText('Our Programmers ', 50, 25);
	programmers.strokeText('Our Programmers ', 50, 25);

	var img = document.getElementById('img9');
	programmers.beginPath();
	programmers.drawImage(img, 20, 40, 80, 80);
	programmers.closePath();

	var img = document.getElementById('img10');
	programmers.beginPath();
	programmers.drawImage(img, 110, 40, 80, 80);
	programmers.closePath();

	var img = document.getElementById('img11');
	programmers.beginPath();
	programmers.drawImage(img, 200, 40, 80, 80);
	programmers.closePath();

	programmers.fillStyle = 'black';
	programmers.strokeStyle = 'black';
	programmers.lineWidth = 1;
	programmers.font = '9px  arial';
	programmers.fillText('MARY MAGRETTE ', 20, 135);
	programmers.strokeText('WEB DEVELOPER ', 20, 145);

	programmers.fillStyle = 'black';
	programmers.strokeStyle = 'black';
	programmers.lineWidth = 1;
	programmers.font = '9px  arial';
	programmers.fillText('CHRIS STUART ', 115, 135);
	programmers.strokeText('SEO MANAGER ', 115, 145);

	programmers.fillStyle = 'black';
	programmers.strokeStyle = 'black';
	programmers.lineWidth = 1;
	programmers.font = '9px  arial';
	programmers.fillText('QUEEN LORA ', 210, 135);
	programmers.strokeText('ANIMATOR ', 215, 145);
 }

 myPartners();
 function  myPartners() {
 	var cpartners = document.getElementById('partners');
	 var partners = cpartners.getContext('2d');

	partners.fillStyle = 'black';
	partners.strokeStyle = 'black';
	partners.lineWidth = 1;
	partners.font = '20px  arial';
	partners.fillText('Our Partners', 100, 25);
	partners.strokeText('Our Partners', 100, 25);

	var img = document.getElementById('img12');
	partners.beginPath();
	partners.drawImage(img, 5, 25, 80, 80);
	partners.closePath();

	var img = document.getElementById('img13');
	partners.beginPath();
	partners.drawImage(img,75, 25, 80, 80);
	partners.closePath();

	var img = document.getElementById('img14');
	partners.beginPath();
	partners.drawImage(img, 150, 25, 80, 80);
	partners.closePath();

	var img = document.getElementById('img15');
	partners.beginPath();
	partners.drawImage(img, 225, 25, 80, 80);
	partners.closePath();

	var img = document.getElementById('img16');
	partners.beginPath();
	partners.drawImage(img, 5, 65, 80, 80);
	partners.closePath();

	var img = document.getElementById('img17');
	partners.beginPath();
	partners.drawImage(img,70, 65, 80, 80);
	partners.closePath();

	var img = document.getElementById('img18');
	partners.beginPath();
	partners.drawImage(img, 140, 65, 80, 80);
	partners.closePath();

	var img = document.getElementById('img19');
	partners.beginPath();
	partners.drawImage(img, 225, 65, 80, 80);
	partners.closePath();
 }

 var cfooter = document.getElementById('footer');
	 var footer = cfooter.getContext('2d');

	footer.fillStyle = '#000';
	footer.strokeStyle = '#000';
	footer.lineWidth = 1;
	footer.font = '20px  times';
	footer.fillText('copyright 2018 All Right Reseved', 10, 80);
	footer.strokeText('copyright 2018 All Right Reseved', 10, 80);





