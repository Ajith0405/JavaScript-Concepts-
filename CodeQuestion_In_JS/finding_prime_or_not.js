
function findPrime(num){
    for(let i=2; i<= num/2;i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(findPrime(3));