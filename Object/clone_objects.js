let originalObject={
    name:"Arun",
    age:16,
    city:"Vellore"
};

// 1. spread Operator (shallow copy)
    let copyObjectSpread ={...originalObject};
    console.log(copyObjectSpread);
 
// 2. object.assign() method (Shallow copy)
    let copyObjectAssign = Object.assign({},originalObject);
    console.log(copyObjectAssign);

// 3. JSON.parse() and JSON.strinify() method (Deep copy);
    let copyObjectJSON = JSON.parse(JSON.stringify(originalObject));
    console.log(copyObjectJSON);

    console.log(JSON.stringify(originalObject));