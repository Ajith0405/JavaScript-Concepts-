// 1. positional arguments
    function add(a,b){
        console.log(a+b);
    };

    add(5,10);

// 2. Named arguments
    var person ={
        name:"Ajith",
        role:"Developer"
    };

    function display(p){
        console.log("Hi, "+ p.name+" "+p.role);
    }

    display(person);

// 3. Argument objects
    sum(1,2,3);

    function sum(){
        console.log(arguments[0]);
        console.log(arguments[1]);
        console.log(arguments[2]);
        console.log(arguments.length);
    }




