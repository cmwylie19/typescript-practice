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

// Record (any name that is a number)
let caseyAge: Record<string, number> = { age: 34 }
// Partial is only a subset of fields
type PersonQuery = Partial<Record<string,number>>;
// Omit allows you to omit a field Omit<T, K>, where is the fields that you want to omit from T
type PersonQuery2 = Omit<IPerson, "name">;
// Pick allows you to pick only what you want
type PersonQuery3 = Pick<IPerson, "name" | "age">;
// Require all properties of a certain type
type PersonQuery4 = Required<PersonQuery3>;
// Map type - Makes all of the PersonQuery4 properties optional
type PersonQuery5 = {
    [P in keyof PersonQuery4]?: PersonQuery4[P];
};

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
// https://www.google.com/search?q=TypeScript+Essential+Training+course+youtube&ei=13CMZJ-mD6CFkvQP6cqeiAo&ved=0ahUKEwjf7cGm_8f_AhWggoQIHWmlB6EQ4dUDCBA&uact=5&oq=TypeScript+Essential+Training+course+youtube&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAE6CggAEEcQ1gQQsAM6BQghEKsCSgQIQRgAUIADWLcPYOQQaAFwAXgAgAFniAH2BJIBAzcuMZgBAKABAcABAcgBCA&sclient=gws-wiz-serp#fpstate=ive&vld=cid:383d65d5,vid:KLmYyJkSauU
// 1:01:19




// animalsFields is a keyof IAnimal that has a generic type of IPerson
type animalFields = keyof IAnimal<IPerson>;
let ownerProperty: animalFields = "owner";
let arch:IAnimal<IPerson> = {
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
console.log(`${arch.name}'s owner lives in ${arch[ownerProperty]?.city}.`)
function getValue<T>(source: T, propertyName: keyof T) {
    return source[propertyName];
}
console.log("Age of arch" + getValue(arch, "age"));

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