// without error

try{
    const msg = "Try block msg"
    console.log(msg);
}
catch(err){
    console.log(err.message);
}
finally{
    console.log("Executed finally");
}

//with error 
try{
    console.log(msg);
  
}
catch(err){
    console.log("Error Message "+ err.messaage);
}
finally{
    console.log("Executed finallly");
}
