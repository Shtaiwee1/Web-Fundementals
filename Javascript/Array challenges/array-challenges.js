// function alwaysHungry(arr) {
//   for (var i = 0; i <= arr.length; i++) {
//     if (arr[i] === "food") {
//       console.log("yummy");
//     } else if (arr[i] != "food") {
//     }
//   }
//   console.log("I'm hungry");
// }
// //     while (arr[i] === "food") {
// //       console.log("yummy");
// //     }

// //     console.log("I'm hungry");
// //     break;
// //   }
// //   alwaysHungry([3.14, "food", "pie", true, "food"]);
// //   console.log(alwaysHungry());
// // }
// // }

// // this should console log "yummy", "yummy"

// // alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"

// function reverse(arr) {
//   // your code here
//   return arr;
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]
// *****************************AlwaysHUNGRY************************************************
// function alwaysHungry(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] == "food") {
//       console.log("yummy");
//     }
//   }
//   if (!arr.includes("food")) {
//     console.log("I'm hungry");
//   }
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// *******************************HIGHPASSFILTER**********************************************

// function highPass(arr, cutoff) {
//   var filteredArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > cutoff) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result);

// we expect back [6, 8, 10, 9]

// ******************************************BETTERTHANAVERAGE*************************************
var count = 0;
function betterThanAverage(arr) {
  var sum = 0;
  var average = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
    average = sum / arr.length;
  }
  for (j = 0; j <= arr.length - 1; j++)
    if (arr[j] > average) {
      count++;
    }
  console.log(average);

  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
// ******************Array0reverse*********************************

// var newarr = [];
// var temp = 0;
// function reverse(arr) {
//   for (i = 4; i >= 0; i--) {
//     temp = arr[i];
//     newarr.push(arr[i]);
//   }
//   return newarr;
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(newarr);

// *********************************************Faboonacci array*************************

// function fibonacciArray(n) {
//   var temp = [0, 1];
//   var fibArr = [0, 1];
//   for (var n = 2; n < 10; n++) {
//     fibArr[n] = fibArr[n - 1] + fibArr[n - 2];
//     temp.push(fibArr[n]);
//   }
//   return temp;
// }

// var result = fibonacciArray(10);
// console.log(result);

// console.log("first temp" + temp);
// console.log("second temp" + temp);

// the [0, 1] are the starting values of the array to calculate the rest from
