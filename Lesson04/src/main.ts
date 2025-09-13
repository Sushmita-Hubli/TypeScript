
//Type Aliases
type stringOrNumber=string| number

type stringorNumberArray=(string|number)[]

type Guitaristhh={
    name:string,
    active:boolean,
    // active?:boolean,   this means active property can be optional
    albums:stringorNumberArray
}

type userId= stringOrNumber

//we cannot do all this above mentioned using interface


//Literal types
let myName:'Sushmita'

let username: 'Sush'| 'Karish'| 'shrav'  //means value of username can be only any one among these and not any other value apart from these values
 username='Sush';



 //functions
 const add=(a:number , b:number)=>{
    return a+b
 }
 //the above function can also be written as follows:
//  const add=(a:number , b:number):number=>{
//     return a+b
//  }

 const logMsg=(message:any)=>{
    console.log(message)
 }
 //the above function can also be written as
//   const logMsg=(message:any):void=>{
//     console.log(message)
//  }

logMsg("Sushmita");
logMsg(add(2,1));

let subtract= function(c:number,d:number):number{
    return c-d;
}

type mathFunction= (a:number,b:number)=>number ;
let multiply:mathFunction =function(c,d){
    return c*d;
}
logMsg(multiply(2,2));

// //interface
// interface mathFunction1{
//     (a:number,b:number):number
// }
// let multiply1: mathFunction1=function(c,d){
//     return c*d;
// }
// logMsg(multiply1(3,2));


//optional parameters for functions
const addAll=(a:number, b:number,c?:number):number=>{
    if(typeof c!=='undefined')
    {
        return a+b+c;
    }
    return a+b;
}

//default param values
const sumAll=(a:number, b:number,c:number=2):number=>{
    
        return a+b+c;
}
logMsg(addAll(2,3,5));
logMsg(addAll(2,3));
logMsg(sumAll(2,2));

//default first param values
const sumAll1=(a:number=10, b:number,c:number):number=>{
    
        return a+b+c;
}
logMsg(sumAll1(undefined,2,1));

//Rest Parameters
const total= (...nums: number[]):number =>{
    return nums.reduce((prev,curr)=>prev+curr);
}
logMsg(total(1,2,3,4));