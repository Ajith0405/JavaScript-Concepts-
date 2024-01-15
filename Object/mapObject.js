
const personDetails = new Map();

personDetails.set("name","Arun");
personDetails.set("age",25);

console.log(personDetails);

// access
console.log(personDetails.get("name")); // Arun

// check
console.log(personDetails.has("age")); // true

//delete
personDetails.delete("age");
console.log(personDetails.size); // 1

