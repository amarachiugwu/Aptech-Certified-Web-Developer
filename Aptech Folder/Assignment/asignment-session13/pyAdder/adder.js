// var W;
// var R;
// var S;

// function submit(){
// F = document.getElementById('word');
// R = document.getElementById('result');
// pt = "Py";
// // S = document.getElementById('submit');
// var word = document.getElementById('word').value;
// console.log(word);
//  var result = document.getElementById('result').value;
// console.log(result);

// Result = document.getElementById('result').value;
// 	document.getElementById('result').value = "Your Result is" + M;
// console.log(Result);
// alert("Your result is: " + M);
	// function addWord() {
	// 	var word = document.getElementById('word');
	// var text = document.getElementById('word').value;
	// console.log(text);
	// }
	function submitWord() {
		var word = document.getElementById('word');
	var text = document.getElementById('word').value;
	console.log(text);
		var txt = "Py";
		console.log(txt);
		if(text)
		var sWord= txt + text;
		var shoWord = document.getElementById('showWord');
		document.getElementById('showWord').innerHTML = "come" + sWord;
		
		console.log(sWord);
		console.log(document.getElementById('showWord').innerHTML);

}
