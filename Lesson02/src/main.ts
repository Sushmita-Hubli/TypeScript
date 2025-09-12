//Implict type detection or inferring here ts automaticaaly infers the below statement as a string data type
let username="Sushmita";   


//Explicit type decalartion or we tell typescript the data type of the variable we are creating
let myName:string ="Sushmita Chandrashekhar Hubli";

//now if we try to change the value of myName to the data which is not string , we will get compilation error in that case. We can assign only string data to myName bcoz it is of string type.

let meaningOfLife:number;
let isLoading:boolean;

meaningOfLife=34;
isLoading=false;


//any type
//we can note here that we can assign any value to this albyum variable because its type can be any as we have mentioned in the code.
let album:any;
album="ashwin";
album=true;
album=66;


//function
const sum=(a:number,b:string)=>{
return a+b;
}


//Union Type
//we can also define a variabke with the data type as follows:
//you can see below that haha variable can be either a string or a number.
//when we create a variable of union data type, it is not limited to two data types. meaning we can have a variable which can be of three data types like number|string|boolean
let haha : string | number;
haha="ss";
let active:string|number|boolean;

//regulaqr expression
let re: RegExp= /\w+/g ;






