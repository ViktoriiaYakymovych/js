// // Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)


//????????????????


// // Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

//??????????????

// // Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = (108 + (223 - 2) * 5);
// console.log(result);


//??????????????

// console.log(('b' + 'a' + + 'a' +'a').toLowerCase());


//??????????????


// let myVar = 87;

// console.log(myVar++);

//??????????


// const remainder = 11 % 3;
// console.log(remainder);

//?????????

// const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// console.log(myStr);

//???????????

// const myStr = "FirstLine\n\t\\SecondLine\n\ThirdLine";
// console.log(myStr);

//??????????

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// const wordBlanks = "My " + myNoun + " is " + myAdjective + " and really " + myVerb + " also so " + myAdverb;
// console.log(wordBlanks);

//????????

// const myArray = [["John", 23], ["cat", 2]];

// myArray.push(["dog", 3]);
// console.log(myArray);

//??????????

// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
//   ];

//   const myData = myArray[2][1];
// console.log(myData);

//?????????

// const myArray = [["John", 23], ["cat", 2]];

// myArray.push(["dog", 3]);

// console.log(myArray);

//??????

// const myArray = [["John", 23], ["cat", 2]];

// const removedFromMyArray = myArray.pop();

// console.log(removedFromMyArray);

//??????????

// const myArray = [["John", 23], ["dog", 3]];

// const removedFromMyArray = myArray.shift();

// console.log(removedFromMyArray);

//????????

// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();

// myArray.unshift(["Paul", 35]);

// console.log(myArray);

//??????????

// let processed = 2;

// function processArg(num) {
// return (num + 3) / 5;
// }

// console.log(processed = processArg(7));

//???????????

// function nextInLine(arr, item) {
//     arr.push(item);
//     const removed = arr.shift();
//     return removed;
// }

// let testArr = [1, 2, 3, 4, 5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

//????????????

// function trueOrFalse(wasThatTrue) {
//     if (wasThatTrue) {
//     return "Yes, that was true";
//     }
//     return "No, that was false";
// }

//??????

// function testEqual(val) {
//     if (val == 12) {
//     return "Equal";
//     }
//     return "Not Equal";
// }

// testEqual(10);

//???????????

// function testStrict(val) {
//     if (val === 7) {
//     return "Equal";
//     }
//     return "Not Equal";
// }

// testStrict(10);

//?????????????

// function compareEquality(a, b) {
//     if (a === b) {
//     return "Equal";
// }
// return "Not Equal";
// }

// compareEquality(10, "10");

// ????????????

// function testNotEqual(val) {
//     if (val != 99) {
//     return "Not Equal";
// }
// return "Equal";
// }

// testNotEqual(10);

//???????????

// function testStrictNotEqual(val) {
//     if (val !== 17) {
//     return "Not Equal";
// }
// return "Equal";
// }

// testStrictNotEqual(10);

//?????????????

// function testGreaterThan(val) {
//     if (val > 100) {
//         return "Over 100";
//     }

//     if (val > 10) {
//         return "Over 10";
//     }

//     return "10 or Under";
// }

// testGreaterThan(10);

//??????????????

// function testGreaterOrEqual(val) {
//     if (val >= 20) {  // Змініть цей рядок
//         return "20 or Over";
//     }

//     if (val >= 10) {  // Змініть цей рядок
//         return "10 or Over";
//     }

//     return "Less than 10";
// }

// testGreaterOrEqual(10);

//??????????????


// function testLessThan(val) {
//     if (val < 25) {
//         return "Under 25";
//     }

//     if (val < 55) {
//         return "Under 55";
//     }

//     return "55 or Over";
// }

// testLessThan(10);

//????????????

// function testLessOrEqual(val) {
//     if (val <= 12) {
//         return "Smaller Than or Equal to 12";
//     }

//     if (val <= 24) {
//         return "Smaller Than or Equal to 24";
//     }

//     return "More Than 24";
// }

// testLessOrEqual(10);

//?????????????

// function testLogicalAnd(val) {
//     if (val >= 25 && val <= 50) {
//         return "Yes";
//     }
//     return "No";
// }

// console.log(testLogicalAnd(10));

//??????????

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

//??????????

// console.log('1');

// setTimeout(() => {
//     console.log('setTimeOut');
// }, 0);

// console.log('2');
// console.log('3');
// console.log('4');

//??????????

// function sumArray(array) {
//     array = [1, 5, 8, 7, 1];
//     console.log(array[2]);
// }

//?????????????????????

// function feast(beast, dish) {
//     return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1]);
// };

// feast("great blue heron", "garlic naan");

//???????????????????????????

// function getAge(inputString){
//     inputString = '4 old';
//     console.log(inputString[0]);
//     let age = 0;
//     return inputString[0] <= 9 && inputString[0] >= 0 ? age = Number(inputString[0]) : 'Opps';
// }
// getAge('4 old');

//????????????????

// function positiveSum(arr) {
//     let sum = 0;
//     arr.forEach(a => {
//         a > 0 ? sum += a : 0;
//         return sum;
//     });
// }

//???????????????????

// const refs = {
//     itemEl: '.item-grid-card',
//     titleEl: '.item-grid-card__title',
//     authorEl: '.item-grid-music-preview__author',
//     audioEl: 'audio',
// };

// // const items = [...document.querySelectorAll(refs.itemEl)];

// const itemObj = [...document.querySelectorAll(refs.itemEl)].map((item) => {
//     return {
//         title: item.querySelector(refs.titleEl).textContent.trim(),
//         author: item.querySelector(refs.authorEl).textContent.trim(),
//         audio: item.querySelector(refs.audioEl).src,
//     }
// });

//?????????????????



