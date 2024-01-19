
function findNoOfVowels(string){
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let char of string.toLowerCase()){

        if(vowels.includes(char)){
            count ++;
        }
    }

    return count;

}

console.log(findNoOfVowels("Hello, vowels!"));