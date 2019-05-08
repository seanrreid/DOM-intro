const string = "12 +";
const lastCharacter = string[string.length - 1];
console.log(lastCharacter);

const mathString = "12+2+3-4";
const numbers = mathString.split(/\+|\-|\×|\÷/g);
console.log(numbers);

const months = ['Jan', 'March', 'April', 'June'];

// array.splice(start, deleteCount, item);

// inserts at index 1
months.splice(1, 0, 'Feb');
months.splice(4, 0, 'May');
console.log(months);

// replaces 1 element at index 4
months.splice(5, 1, 'July');
console.log(months);

const firstMonth = months.indexOf('April');
console.log(firstMonth);

