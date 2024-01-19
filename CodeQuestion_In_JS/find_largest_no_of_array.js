function findLargestNo(array){
    let largestNumber = 0;

    for(let num of array){
        if(num > largestNumber){
            largestNumber = num;
        }
    }

    return largestNumber;
}

console.log(findLargestNo([1,5,6,9,7,10,15,20,36,12,14,42]));