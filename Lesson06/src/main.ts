class Coder{
    //it is necessary to have constructor for a class if you want to define a object type and its property
    //meaning we need both property as well as a constructor to instantiate that property a value in our class
    name: string
    music:string
    age:number 
    lang:string

    constructor(name:string,music:string,age:number,lang:string)
    {
        this.name=name;
        this.music=music;
        this.age=age;
        this.lang=lang;
    }
}

//but this is too much of repetitive code i f we wantr to avoid repetitive code, we can use access modifiers in our class as below:

class Coder1{
    //it is necessary to have constructor for a class if you want to define a object type and its property
    //meaning we need both property as well as a constructor to instantiate that property a value in our class
   
 
    constructor(public readonly name:string,public music:string,private age:number,protected lang:string)
    {
        this.name=name;
        this.music=music;
        this.age=age;
        this.lang=lang;
    }
}

class Coder2{
//   secondLang:string;  this line will give error bcoz we have not instantiatede this object inside our constructor
secondLang!:string ;  //now this will not create an error

    constructor(public readonly name:string,public music:string,private age:number,protected lang:string="  Typescript" /**default value assignment */)
    {
        this.name=name;
        this.music=music;
        this.age=age;
        this.lang=lang;
    }

    public getAge()
    {
        return `Hello , I'm ${this.age}`;
    }

    public getLang()
    {
        return this.lang;
    }
}

//object creation
const Dave= new Coder2("Dave","Rock",22);
console.log(Dave.name);
console.log(Dave.music)
// console.log(Dave.age)  not allowed
console.log(Dave.getAge()); //this is allowed
// console.log(Dave.lang)  this is also not allowed since lang is protected we have to use getter to get this value as well
console.log(Dave.getLang());


//extending our existing class
class WebDev extends Coder2{
    constructor(public computer:string,name:string,music:string, age:number,) {
        super(name,music,age);  //this should be the first line
        this.computer=computer;
        
    }

    public getLang() {
        return this.lang;
    }
}

const Sara=new WebDev("Mac","Sara","Lofi",23);
console.log(Sara.getLang());


////////////
//interface

interface Musician{
    name:string,
    instrument:string,
    play(action:string):string
}

class Guitarist implements Musician{
    name:string;
    instrument: string;

    constructor(name:string,instrument:string )
    {
        this.name=name;
        this.instrument=instrument;
    }

    play(action:string)
    {
        return `${this.name} plays ${action} the ${this.instrument}`;
    }
}

const Page=new Guitarist("Jimmy","guitar");
console.log(Page.play("strums"));

////////////
//statc property and methods of a class
class Peeps{
    static count:number=0;
    static getCount():number{
        return Peeps.count;
    }

    public id:number;

    constructor(public name:string)
    {
        this.name=name;
        this.id=++Peeps.count;
    }
}

const Jhon=new Peeps("Jhon");
const Steve=new Peeps("sTEVE");
const Amy=new Peeps("Amy");

console.log(Peeps.count);
console.log(Steve.id);

///getters and setters 
class Bands{
    private dataState:string[];
    constructor()
    {
        this.dataState=[];
    }

    public get data():string[]
    {
        return this.dataState;
    }

    public set data(value:string[]){
        if(Array.isArray(value) && value.every(el=> typeof el === 'string'))
        {
            this.dataState=value;
            return;
        }
        else
        {
            throw new Error("Parameters is not array of strings");
        }
    }
}

const band1=new Bands();
band1.data=["sush","hubli"];
console.log(band1.data)
band1.data=[...band1.data, "therdya"];
console.log(band1.data);