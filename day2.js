/*
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

let name = ' Ratamon '
console.log(name);

console.log(name.trim());
console.log(name);
*/

/*
// Checking Data Types and Casting
// Changing Data Type (Casting)

let num = '10'
console.log(typeof num)
let numInt = parseInt(num)
console.log(num);
console.log(typeof numInt)
*/

/*
Exercises:  Level1
*/

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge = '30 Days Of JavaScript';
// 2. Print the string on the browser console using console.log()
console.log(challenge);
// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length)
// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())
// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2))
// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.


// 8. Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// 9. Split the string into an array using split() method

// 10. Split the string 30 Days Of JavaScript at the space using split() method
// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))

/*
Exercises: Level 3
*/

/*
1
'Love is the best thing in this world.
Some found their love and some are still looking for their love.'
Count the number of word love in this sentence.
*/

const word3_1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let ans3_1 = word3_1.match(/love/gi)
console.log(`ans3_1 : ${ans3_1}`);
