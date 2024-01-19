function findPalindrome(str){
    let givenWord = str.split("").join("").toLowerCase();
    // console.log(givenWord);
    let reverseStr = givenWord.split("").reverse().join("");

    if(givenWord === reverseStr){
        return ("The given word is Palindrome "+str);
    }else{
        return ("The given word is Not a Palindrome "+str );
    }

};

console.log(findPalindrome("madam"));
console.log(findPalindrome("Madam"));
console.log(findPalindrome('Kannan'));
console.log(findPalindrome('RACeCar'));