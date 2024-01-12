display(1,2,3,4,5,6,7);

function display(a,b, ...rest){
    console.log(a);
    console.log(b);
   console.log(rest);
}

let arr = ['a','b','c','d','a','d','e','f','f','a','c','c','g','h'];


let dubarr = [];

console.log(arr);

for(let i=0; i< arr.length; i++){
    for(let j =i+1; j< arr.length; j++){

        if(arr[i] === arr[j]){
            dubarr.push(arr[j]);
            arr.splice(j,1," ");
        }
    }
}

let arrayOfa = dubarr.filter((char)=>char === "a");

let newArr = arr.filter((char)=> char !== " ");


console.log(dubarr.filter((char)=>char !== " "));
console.log(newArr);

console.log(arrayOfa.length);