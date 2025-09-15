class Coder {
    //it is necessary to have constructor for a class if you want to define a object type and its property
    //meaning we need both property as well as a constructor to instantiate that property a value in our class
    name;
    music;
    age;
    lang;
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
//but this is too much of repetitive code i f we wantr to avoid repetitive code, we can use access modifiers in our class as below:
class Coder1 {
    name;
    music;
    age;
    lang;
    //it is necessary to have constructor for a class if you want to define a object type and its property
    //meaning we need both property as well as a constructor to instantiate that property a value in our class
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
class Coder2 {
    name;
    music;
    age;
    lang;
    //   secondLang:string;  this line will give error bcoz we have not instantiatede this object inside our constructor
    secondLang; //now this will not create an error
    constructor(name, music, age, lang = "  Typescript" /**default value assignment */) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello , I'm ${this.age}`;
    }
    getLang() {
        return this.lang;
    }
}
//object creation
const Dave = new Coder2("Dave", "Rock", 22);
console.log(Dave.name);
console.log(Dave.music);
// console.log(Dave.age)  not allowed
console.log(Dave.getAge()); //this is allowed
// console.log(Dave.lang)  this is also not allowed since lang is protected we have to use getter to get this value as well
console.log(Dave.getLang());
//extending our existing class
class WebDev extends Coder2 {
    computer;
    constructor(computer, name, music, age) {
        super(name, music, age); //this should be the first line
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return this.lang;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 23);
console.log(Sara.getLang());
class Guitarist {
    name;
    instrument;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
////////////
//statc property and methods of a class
class Peeps {
    name;
    static count = 0;
    static getCount() {
        return Peeps.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
const Jhon = new Peeps("Jhon");
const Steve = new Peeps("sTEVE");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(Steve.id);
///getters and setters 
class Bands {
    dataState;
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Parameters is not array of strings");
        }
    }
}
const band1 = new Bands();
band1.data = ["sush", "hubli"];
console.log(band1.data);
band1.data = [...band1.data, "therdya"];
console.log(band1.data);
export {};
//# sourceMappingURL=main.js.map