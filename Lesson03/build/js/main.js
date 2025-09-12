//Arrays and Objects
let stringArr = ["Sus", "Madh", "Ashw"];
//union type
let surname = ["hub", "add", 33];
//union type
let mixedData = ["haha", 22, true];
// stringArr[1]=33;  this line will generate an error because typescript has inferred stringArr as a array which has only string values inside it
stringArr.push("pal"); //this is allowed
surname.push(99); // allowed coz surname is a union type array which accepts numbers and strings only.
//mixedData can accept number, string or boolean 
mixedData.push(22);
mixedData.push('bgugu');
mixedData.push(false);
mixedData.unshift(true); //adds true to the beggining of mixedData array
console.log(mixedData);
// stringArr=surname;  not allowed
surname = stringArr; //this is allowed
let test = []; //any type
let bards = ["haha", "33"]; //string type explicit mentioning
//tuple-->here we create a tuple which defines which type of element will be at which position in a given array.
let myTuple = ["sis", 22, false];
let mixed = ["Hop", 22, true];
// myTuple=mixed;  This is not allowed because we can put either number, boolean opr string values at any position in mixed variable whereas in myTuple it ios strctly mentioned that we need only 3 elements where first element has to be string, second number and third a boolean. here in myTuple, order of elements according to the data type mentioned is maintained whereas mixed is a union type and it is not necessary to maintain the data type means any type of variable can be at any position
mixed = myTuple; //This is allowed 
//objects
let myobj;
myobj = [];
console.log(typeof myobj);
myobj = surname;
myobj = {};
const exampleObj = {
    prop1: "sushmita",
    prop2: true,
};
console.log(typeof exampleObj);
//this above two blocks look similar. But when to use type and when to use interfaxce?
//
let evh = {
    name: "eddie",
    active: false,
    albums: [199, 66, "sush"]
};
let jp = {
    name: "ashwin",
    active: true,
    albums: ['I', 'II', 'III']
};
evh = jp; //allowed
//function accepting this guitarist
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name.toUpperCase()}`;
    //now here what if our name parameter is optional in type. in that case we cannot compile the above code coz we cannot perform operations on undefined values so in  that case we can use following code
    //     if(guitarist.name)
    //     {
    //         return `Hello ${guitarist.name.toUpperCase()}`;
    //     }
    //     else
    //     {
    //         return "Hello";
    //     }
    //else we can do the following
    // return `Hello ${guitarist.name?.toUpperCase()}`  //meaning if name exists then convert it to uppercase else leave it 
};
console.log(greetGuitarist(jp));
//enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["A"] = 2] = "A";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["C"] = 4] = "C";
})(Grade || (Grade = {}));
console.log(Grade.U); //op will be 0 index number
console.log(Grade.A); //op will be 2
//but if we assign a number to U then the sequence will be starting from the number assigned to U for eample
var GradeAssign;
(function (GradeAssign) {
    GradeAssign[GradeAssign["U"] = 33] = "U";
    GradeAssign[GradeAssign["D"] = 34] = "D";
    GradeAssign[GradeAssign["A"] = 35] = "A";
    GradeAssign[GradeAssign["B"] = 36] = "B";
    GradeAssign[GradeAssign["C"] = 37] = "C";
})(GradeAssign || (GradeAssign = {}));
console.log(GradeAssign.U); //op will be 33
console.log(GradeAssign.A); //op will be 35
export {};
//# sourceMappingURL=main.js.map