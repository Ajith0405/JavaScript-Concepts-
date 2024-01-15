// how many ways to declare an objects
    // 1. Object literals 
        let person ={
            name:"Ajith",
            age:25,
            skills:["HTML","CSS","JavaScript","react js","Angular"],
            greet: function(){
                console.log("Hello "+ this.name);
            }
        }

        console.log(person.name);
        console.log(person.age);
        person.skills.forEach((e)=>{
            console.log(e);
        });
        person.greet();

    // 2. object constructor;
        let user = new Object();
        user.name = "Ajith";
        user.age = 25;

        console.log(user);

    // 3. object.create() Method
        let student = {
            name:'',
            age:0,
            class:'',
        }

        let student1 = Object.create(student);
        student1.name="Arun";
        student1.age=17;
        student1.class='12th'

        console.log(student1);