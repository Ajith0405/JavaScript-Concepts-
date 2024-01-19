// 1. Using For loop

function reverseFunction(str){
    let reveresed ="";

    for(let i= str.length - 1; i >=0; i--){

        reveresed += str[i];
    }
    return reveresed;
}

console.log(reverseFunction("Arun, Kumar"));

// 2. using JS inbuilt methods

function reverseFunction2(str){
    
    return (str.split("").reverse().join(""));
}

console.log(reverseFunction2("Arun, Kumar"));