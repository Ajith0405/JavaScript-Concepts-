// 1. Example 1
    function removeWhiteSpace(sentence){
        let words="";
        for(let char of sentence){
            if(char !==" "){
                words += char;
            }
        }
        return words;
    }

    console.log(removeWhiteSpace("Hello,    Ajith"));

// 2. Example 2

function removeWhiteSpace2(str){
    const result = str.replace(/\s/g,"");
    return result
}

console.log(removeWhiteSpace2("  Hello,   Ajith"));