// interface that has all fields from INeighbor
interface IPerson extends INeighbor{
    name?: string;
    age?: number;
    city?: string;
}

// interface with a generic
interface IAnimal<T>{
    name?: string;
    age?: number;
    type?: string;
    //GenericType
    owner?: T;
}

interface INeighbor {
    Building?: string;
    neighborhood?: Barrio;
}
enum ContactStatus {
    Online = "Online",
    Offline = "Offline",
}
type Barrio = "Little Havana" | "Wynwood" | "Brickell" | "Downtown" | "Coral Gables";

// Person class with a generic type of IPerson or IAnimal that has a generic type of IPerson
class Person<T extends IPerson, T1 extends IAnimal<IPerson>> {
    thing: T;

    constructor(thing: T) {
        console.log(JSON.stringify(thing,undefined,2))
        this.thing= thing;
        // this.person.age = person.age;
        // this.person.city = person.city;
    }
    /**
     * getName
     */
    getName() {
         console.log(this.thing.name)
    }

}


let x: number = 5;
let personName: string = "John Doe";

let me: IPerson = {
    name: "Casey Wylie",
    age: 34,
    city: "Miami",
    neighborhood: "Brickell"
};

// An animal Interface that has a generic type of IPerson
let Archie: IAnimal<IPerson> = {
    name: "Archie",
    age: 2,
    type: "Dog",
    owner: me
};
console.log(me.neighborhood);

(()=>new Person(me).getName())();

(()=>new Person(Archie).getName())();