console.log('Hello, World!!!!!');
import dataset from "./data.json" with { type: "json" };

// ODD EVEN fucntion
function isEven(num){
  return num % 2 === 0 ? (console.log(num, "Even Number"), true) : (console.log(num, "Odd Number"), false);
}

let fetcheddata = null

fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
  

isEven(456)


//find the largest number in an array
let numbers3  = [78, 9, 1, 15, 3, 20]
let numbers3  = [111, 23, 41, 415, 388, 20]
let numbers  = [78, 67, 9, 12, 3, 200]
//dev 2 change here
//dev 1 change here


//im doiing my changes in here
//but ineed dev function here to fix my bug
//dev 2 will needs this function

let lateCount = false;

function findLargestNumber(arr) {
  let max = arr[0]

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }

  return max
}

console.log(findLargestNumber(numbers3))

