// 1.Take one or more argument as afunction

function hof(func){
    func();
}
// calling hoc
    hof(sayHello);
// declaring call back function

    function sayHello(){
        console.log("Say, Hello");
    }

// 2. returning function 

function createAdder(number){
    return function(value){
        return number + value;
    }
}

let addFive = createAdder(5);

console.log(addFive(9));

console.log(createAdder(5)(10));