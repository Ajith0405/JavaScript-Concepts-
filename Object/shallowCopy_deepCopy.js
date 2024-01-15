let person = {
    name:"Ajith",
    age:25,
    address:{
        city:"vellore",
        country:"India"
    }
};

// 1. shallow copy
    let shallowCopy = Object.assign({},person);
    shallowCopy.address.city = "Mumbai";
    console.log(person.address.city);  // mumbai
    console.log(shallowCopy.address.city); //mumbai

// 2. deep copy
    let deepCopy = JSON.parse(JSON.stringify(person));
    deepCopy.address.city = "Chennai";

    console.log(person.address.city); //mumbai
    console.log(deepCopy.address.city); //chennai