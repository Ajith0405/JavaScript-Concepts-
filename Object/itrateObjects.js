let person = {
    name:"Ajith",
    city:'Vellore',
    pinCode: 632319
}

// 1. for in loop 
    for(let prop in person){
        console.log(prop +" : "+ person[prop]);
    }

// 2. object.keys() and forEach() method
    Object.keys(person).forEach((prop)=>{
        console.log(prop+" : "+ person[prop]);
    })

// 3. object.values() and forEach() method
    Object.values(person).forEach((values)=>{
        console.log(values);
    })