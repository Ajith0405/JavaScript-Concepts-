console.log(areAnagrams("listen","silent"));

function areAnagrams(str1, str2){
    let word1 = str1.split("").sort().join("");
    let word2 = str2.split("").sort().join("");

    return word1 === word2;

}