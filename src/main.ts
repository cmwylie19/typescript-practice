class Person {
    name: string;

    constructor() {
        this.name= "John Doe"
    }

    getName() {
         console.log(this.name)
    }
}

(()=>new Person().getName())();