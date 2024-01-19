function factorial(num){
    let result = 1;

    if(num ===0){
        return 1;
    }

    for(let i=1;i<=num;i++){
        // console.log(result);
        result *= i;
    }
return result;
}

console.log(factorial(10));