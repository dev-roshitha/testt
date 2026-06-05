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

