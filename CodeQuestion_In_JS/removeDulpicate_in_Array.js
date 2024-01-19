
// 1. using forloop and splice method

let duplicateArray = [1,1,2,3,7,3,4,1,2,3,4,5,6,1,1,2,3,4,5,];

function removeDuplicate(array){
    let originalArray = array;
    let uniqueArray =[];

    for(let i=0; i<originalArray.length ; i++){
        for(let j=i+1; j < originalArray.length;j++){
            if(originalArray[i]=== originalArray[j]){
                originalArray.splice(j,1,",");
            }
        }
    }
    uniqueArray = originalArray.filter((e)=> e !==",");

    return uniqueArray;
}

console.log(removeDuplicate(duplicateArray));

// 2. unding Set object;

function  removeDuplicate2(array){
    let uniqueArray =  [ ... new Set(array)];
    let filteredArray = uniqueArray.filter((e)=> e !== ",").sort();
    console.log(filteredArray);
}

removeDuplicate2(duplicateArray);