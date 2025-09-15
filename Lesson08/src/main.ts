const stringEcho =(arg:string):string=>arg


const echo = <T>(arg:T):T=>{return arg;}

const isObj=<T>(arg:T):boolean=>{
    return(typeof arg === 'object' && !Array.isArray(arg) && arg!==null); 
}


console.log(isObj(true));
console.log(isObj('Jhon'));
console.log(isObj([1,2,3]));
console.log(isObj({name: 'Jhon'}));
console.log(isObj(null));


const isTrue=<T>(arg:T):{arg:T , is:boolean}=>{
if(Array.isArray(arg) && !arg.length)
{
    return{arg, is:false};
}
if(isObj(arg) && !Object.keys(arg as keyof T).length)
{
    return{arg,is:false};
}
return{arg,is:!!arg}
}

/*It’s a generic function: you can pass any type T as arg.

It returns an object with:

the original arg

a boolean flag is.

If arg is an array and its .length is 0 → return false.

Assumes there’s a helper isObj that checks if arg is an object (not null/array).

Object.keys(...) gives all enumerable keys.

If the object has no keys → return false.

For all other values:

!!arg converts the value into a boolean (truthy/falsy).
*/

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue("Dave"))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({name:'Dave'}))
console.log(isTrue([]))
console.log(isTrue([1,2]))
console.log(isTrue(NaN))
console.log(isTrue(-0))


//now implementing the above thing using interface
interface BoolCheck<T>{
    value:T,
    is:boolean
}

const checkBoolValue=<T>(arg:T):BoolCheck<T>=>{
if(Array.isArray(arg) && !arg.length)
{
    return{value:arg, is:false};
}
if(isObj(arg) && !Object.keys(arg as keyof T).length)
{
    return{value:arg,is:false};
}
return{value:arg,is:!!arg}
}


//now implementation of Generics using Classes
class StoreObject<T>{
    private data:T

    constructor(value:T)
    {
        this.data=value
    }

    get state():T{
        return this.data;
    }
    set state(value:T){
        this.data=value;
    }
}

const store=new StoreObject("Jhon");
console.log(store.state);
store.state="SUSH";
console.log(store.state)
// store.state=22;  this is not allowed now coz in line number 103 when we pass Jhon as a argument, typescript inferes that the function will accept only string values as the arguments
//instead we can dp following
const mystate=new StoreObject<(string|number|boolean)>(15);
mystate.state=("keerti");