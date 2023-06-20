var ContactStatus;
(function (ContactStatus) {
    ContactStatus["Online"] = "Online";
    ContactStatus["Offline"] = "Offline";
})(ContactStatus || (ContactStatus = {}));
// Record (any name that is a number)
let caseyAge = { age: 34 };
// Person class with a generic type of IPerson or IAnimal that has a generic type of IPerson
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
let ownerProperty = "owner";
let arch = {
    name: "Archie",
    age: 2,
    type: "Dog",
    owner: {
        name: "Casey Wylie",
        age: 34,
        city: "Miami",
        neighborhood: "Brickell"
    }
};
console.log(`${arch.name}'s owner lives in ${arch[ownerProperty]?.city}.`);
function getValue(source, propertyName) {
    return source[propertyName];
}
console.log("Age of arch" + getValue(arch, "age"));
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
