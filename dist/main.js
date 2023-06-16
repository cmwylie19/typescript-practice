class Person {
    name;
    constructor() {
        this.name = "John Doe";
    }
    getName() {
        console.log(this.name);
    }
}
(() => new Person().getName())();
