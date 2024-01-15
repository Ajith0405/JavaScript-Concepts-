/* In JavaScript, a Set is a built-in object that represents a collection of unique values. It allows you to store distinct values of any type, whether primitive values or object references */

// example 1
    let setValues = new Set();
    setValues.add(5);
    setValues.add(10);
    setValues.add(5); // ignored 
    console.log(setValues); // [5,10]


// Example 2 remove duplicate value of an array 
let duplicateArray = [1,2,2,3,5,4,6,5,4];

let setArray = new Set(duplicateArray);

let uniqueArray = [...setArray];

console.log(uniqueArray); // [1,3,4,5,4,6]

