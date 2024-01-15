let person ={};

// 1. add
    person.name = "Ajith";
    person.age = 30;
    person.skills =["Java","React"];

// 2. modify 
    person.age = 25;

// 3. delete
    delete person.skills;

console.log(person);

