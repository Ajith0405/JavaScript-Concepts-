function UserData(){
    try{
        ageValiadtion(25);
        ageValiadtion("Invalid Input"); // this throws an error,
        ageValiadtion(15); // this will not execute.
    }
    catch(err){
        console.log("Error generated : "+err.message);
    }
}

function ageValiadtion(age){
    if( typeof age !== "number"){
        throw new Error("Age must be a number");
    }else{
        console.log(" age is valid");
    }
}

UserData();