// * Exercise
// * Sort any array using a for loop tip: use nested loop
// * Do not use the Array.sort method
// * For example:
// * Given this array [5,0,9,1,7,4,2,6,3,8]
// * result [9,8,7,6,5,4,3,2,1,0] or
// * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// * hint - use a temporary VARIABLES

const arr = [5,0,9,1,7,4,2,6,3,8]
let temp;
for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr.length; j++){
    if(arr[i] < arr[j]){
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);