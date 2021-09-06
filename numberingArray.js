// Takes an array and appends its position in front of each item
  // note: position is its literal position, not its index
function numberingArray(array){
  var newArr = []
  for (i=0; i <= array.length-1; i++) {
    newArr.push(`${i + 1}: ${array[i]}`);
  }
  return newArr;
}