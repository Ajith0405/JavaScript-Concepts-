function curringAdd(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

// normal apporch 
    const first = curringAdd(5);
    const second = first(4);
    const third = second(3);

    console.log(third);//12

// directly call
    console.log(curringAdd(9)(4)(3));//16