var p;
var d;
var dis;
var totalPrice;
var discount;

p = prompt("The regular price of the selected product is: " + p);
d = prompt("The discount on the selected product in (%) is: " + d);
dis = d / 100;

parseInt(p);
console.log(p);
parseInt(d);
console.log(d);
parseInt(dis);
console.log(dis);
discount = p * dis;
parseInt(discount);
console.log(discount);
totalPrice = p - discount;
parseInt(totalPrice);
console.log(totalPrice);

alert("Your total price in Naira is:" + totalPrice);
alert("your discount in Naira is: " + discount);



