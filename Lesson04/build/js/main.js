//we cannot do all this above mentioned using interface
//Literal types
let myName;
let username; //means value of username can be only any one among these and not any other value apart from these values
username = 'Sush';
//functions
const add = (a, b) => {
    return a + b;
};
//the above function can also be written as follows:
//  const add=(a:number , b:number):number=>{
//     return a+b
//  }
const logMsg = (message) => {
    console.log(message);
};
//the above function can also be written as
//   const logMsg=(message:any):void=>{
//     console.log(message)
//  }
logMsg("Sushmita");
logMsg(add(2, 1));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// //interface
// interface mathFunction1{
//     (a:number,b:number):number
// }
// let multiply1: mathFunction1=function(c,d){
//     return c*d;
// }
// logMsg(multiply1(3,2));
//optional parameters for functions
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default param values
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 5));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 2));
//default first param values
const sumAll1 = (a = 10, b, c) => {
    return a + b + c;
};
logMsg(sumAll1(undefined, 2, 1));
//Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
//never type is used for functions that throw error
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError("This should never happen!");
};
export {};
//# sourceMappingURL=main.js.map