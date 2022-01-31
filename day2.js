let num = [1, 2, 3];
console.log(num);

num[0] = 10;
console.log(num);

let word = 'hoge';
console.log(word);

word[0] = 'a';
console.log(word);
console.log(word[0]);
console.log(word[1]);
console.log(word[1] == 'a');

console.log(Math.PI);
const PI = Math.PI;

console.log(Math.round(PI));
console.log(Math.pow(3, 2));
console.log(Math.pow(3, 3));

let randomNum = Math.random();
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen);

let randomNumberRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumberRoundToFloor);

// Strings