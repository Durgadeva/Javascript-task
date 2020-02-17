var input = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
var subarray = [];
let max= 0
let addedValue = 0;
function findmax() {
  for ( var i=0; i<input.length; i++ ){
	  addedValue = input[i] + input[i+1];
     if (addedValue > max) {
        max = addedValue;
        subarray.push(input[i], input[i+1]);
  	} else {
      //subarray.pop(input[i], input[i+1]);
      addedValue = addedValue + input[i];
	}
}
}
findmax();
