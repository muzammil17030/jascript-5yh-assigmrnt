
// // 1
// function displayAlert() {}

// // 2
// function askName(){
//    var userName=prompt("Enter our name")
// }

// // 3
// function combination(){
//    displayAlert()
//    askName()
// }

// // 4
// function call(){
// var userName=prompt("Enter your name")
// alert(userName)}
// call()

// // 5

// // 6
// var concatenatedValue = concatenateAndAssign("Hello, ", "world!");
// console.log(concatenatedValue);

// // 7
// var multiplicationResult = multiplyAndAssign(2, 3, 4);
// console.log(multiplicationResult);

// // 8
// function calculateAverage(numbers) {
   // if (numbers.length === 0) {
     //   return 0; 
   // }
   // var sum = numbers.reduce(function (a,b) {
   //     return a + b;
   // }, 0);
   // var average = sum / numbers.length;
  //  return average;
// }

// // 9
// function addNumbers(a, b) {
   // var sum = a + b;
   // return sum;
// }

// // 12
// function letterCounts(word) {
   // var counts = {};
   // var lowerCaseWord = word.toLowerCase();
   // for (var i = 0; i < lowerCaseWord.length; i++) {
       // var letter = lowerCaseWord[i];
       // if (letter.match(/[a-z]/)) {
       //     counts[letter] = (counts[letter] || 0) + 1;
     //   }
   // }
   // return counts;
// }

// // 13
// function setYearInDate(dateObject, year) {
   // if (!(dateObject instanceof Date)) {
     //   console.error("Invalid Date object provided.");
   //     return;
//     }

    // // 14
  //  var birthdate = new Date("2005-11-14");
// var currentDate=new Date()
   // var age = currentDate.getFullYear() - birthdate.getFullYear();

    
// // 16
// function repeatLetter(letter) {
  //  return letter.repeat(10);
// }

// // 17
// function reverseArray(arr) {
  //  return arr.reverse();
// }


// // 1
// function demonstrateLocalVariable() {
//     var localVar = "I am a local variable";
//     console.log(localVar);
//     localVar = "Updated value";
//     console.log(localVar);
// }
// demonstrateLocalVariable();

// //  2
// var globalVar = "I am a global variable";
// function modifyGlobalVariable() {
//      globalVar = "I am a modified local variable";
//     console.log(globalVar);
// }
// modifyGlobalVariable();
// console.log(globalVar);

// // 1
// var status = "success";

// switch (status) {
//     case "success":
//         console.log("Operation was successful.");
//         break;
//     case "warning":
//         console.log("There is a warning.");
//         break;
//     case "error":
//         console.log("An error occurred.");
//         break;
//     default:
//         console.log("Unknown status.");
// }

// // 2
// var cityName = prompt("Enter the city name:");
// switch (cityName.toLowerCase()) {
//     case "new york":
//         console.log("You entered New York.");
//         break;
//     case "los angeles":
//         console.log("You entered Los Angeles.");
//         break;
//     case "london":
//         console.log("You entered London.");
//         break;
//     default:
//         console.log("Sorry, we don't have information for the entered city.");
// }