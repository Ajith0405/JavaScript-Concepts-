function display(a,b,operation){
    var result = operation(a,b);
    console.log(result);
}

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

display(5,6,sub);