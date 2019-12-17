// window.onload = initAll;

// function ok(){
// 	var rowNum = document.getElementById('row').value;
// 	var colNum = document.getElementById('col').value;
// 	console.log(rowNum);
// 	console.log(colNum);

// 	var x = rowNum;
// 	var y = colNum;
// 	var y = 
	 
// 	while(x <= rowNum){
// 		var mainArray = [rowNum];
// 		mainArray[0] = [colNum];
// 	}

  function ok(){
    document.body.style.backgroundImage = "url('bg1.jpg')";
        document.body.style.backgroundColor = "red";

	var input1 = document.getElementById('row').value;
	var input2 = document.getElementById('col').value;
 	var table = document.getElementById('table');
    var row = [];

      for (var i = 0; i < input1; i++) {
        row[i] = [];

          for (var j = 0; j < input2 ; j++) {
          	row[i][j] = prompt("Please enter value for row "+ (i) +" coloumn " + j);
          }
        }

    document.getElementById('table').innerHTML	=  document.write("<table border='1'>");

              for (var i = 0; i < row.length; i++) {
              	console.log(row.length);

    	        document.write("<tr>");
              	     for (var j = 0; j < row[i].length; j++) {
    	            document.write("<td>");
                         document.write(row[i][j]) ;
    	           document.write("<td>");
              	      	  
              	     }
    	       document.write("</tr>");
              }

    	  document.write("</table>");
}

