var person ={
    name:"Arun",
    age:25,
};

// 1. in operator
    console.log("name" in person); // true
    console.log("Name" in person); // false
    console.log("city" in person); // false

//  2. hasOwnProperty() Method  
    console.log(person.hasOwnProperty('name')); //true
    console.log(person.hasOwnProperty('city')); //false

// 3. comparing with undefined
    console.log(person.name !== undefined); //true
    console.log(person.city !== undefined); //false

