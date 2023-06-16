var ContactStatus;
(function (ContactStatus) {
    ContactStatus["Online"] = "Online";
    ContactStatus["Offline"] = "Offline";
})(ContactStatus || (ContactStatus = {}));
class Person {
    thing;
    constructor(thing) {
        console.log(JSON.stringify(thing, undefined, 2));
        this.thing = thing;
        // this.person.age = person.age;
        // this.person.city = person.city;
    }
    /**
     * getName
     */
    getName() {
        console.log(this.thing.name);
    }
}
let x = 5;
let personName = "John Doe";
let me = {
    name: "Casey Wylie",
    age: 34,
    city: "Miami",
    neighborhood: "Brickell"
};
// An animal Interface that has a generic type of IPerson
let Archie = {
    name: "Archie",
    age: 2,
    type: "Dog",
    owner: me
};
console.log(me.neighborhood);
(() => new Person(me).getName())();
(() => new Person(Archie).getName())();
