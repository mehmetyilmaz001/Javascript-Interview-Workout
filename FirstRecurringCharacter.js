/**
 * Find the first recurring char in the given array
 * input = [1, 2, 1, 4]
 * output = 1
 */

function findRecurringChar(arr) {
  let charHistory = {};
  let foundChar;

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    
    console.log(charHistory, number)
    if(charHistory[number]){
      // console.log(charHistory, number)
      return number 
    }else{
      charHistory[number] = number;
    }
  }

}

console.log(findRecurringChar([1, 2, 2, 1, 4]));
