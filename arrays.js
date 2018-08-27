var chocolateBars = ['snickers', 'hundredittles'];

function addElementToBeginningOfArray( array, element ) {
   var a1 = array;
   return [element, ...a1];
};

function destructivelyAddElementToBeginningOfArray( array, element) {
 array.unshift(element);
 return array;
};

var addElementToEndOfArray = ( array, element) => {
  var a1 = array;
  return [...a1, element];
}

var destructivelyAddElementToEndOfArray = ( array, element) => {
   array.push(element);
   return array;
}

var accessElementInArray = (array, index) => {
  return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift();
  return array;
}

var removeElementFromBeginningOfArray = ( array ) => {
  var a1 = array.shift();
  return a1;

}
