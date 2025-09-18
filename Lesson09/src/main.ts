//UTILITY TYPES

//partial

interface Assignment{
    studentId:string,
    title: string,
    grade:number,
    verified?:boolean
}

const updateAssignment =(assign:Assignment , propsToUpdate: Partial<Assignment>):Assignment=>{
    return{...assign,...propsToUpdate};
}

const assign1: Assignment={
    studentId:"haha",
    title:"hmm",
    grade:0
}

console.log(updateAssignment(assign1,{grade:95}));

const assignGraded: Assignment=updateAssignment(assign1,{grade:96});

//Required and Readonly
const recordAssignment= (assign: Required<Assignment>): Assignment=>{
    return assign
}

const assignVerified: Readonly<Assignment>={
    ...assignGraded,verified:true
}

// assignVerified.grade=99;  This is not allowed because this is readonly
// recordAssignment(assignGraded)  not allowed because we want all the properties since the function has Required utility
recordAssignment({...assignGraded,verified:true});

//Record

const hexColorMap: Record<string,string>={
    red:"FF0000",
    green:"00FF00",
    BLUE:"0000FF"
}

type Students= "Sara" | "Kell" ;
type LetterGrades= "A"|"B"|"C"|"D"|"U"

const finalGrades : Record<Students, LetterGrades>={
    Sara : "A",
    Kell : "U"
}

interface Grades{
    assign1:number,
    assign2:number,
}

const gradeData: Record<Students,Grades>={
    Sara:{assign1:22,assign2:34},
    Kell:{assign1:33, assign2:88}
}

//Pick and Ommit

type AssignResult = Pick<Assignment,"studentId"|"grade">

const score: AssignResult={
    studentId:"kk",
    grade:99

}

type AssignOmit = Omit<Assignment, "grade"|"verified">

const scorenew: AssignOmit={
    studentId:"002303871",
    title:"Northeastern MSCSE"
}

//Exclude and Extract
//these two are used when we work with unions .
//This is different from Pick and Omit because Pick and Omit work on objects as well but when we want to work with the union types, we use  Exclude and Extract

type WithoutA=Exclude<LetterGrades, "A">

type highGrade=Extract<LetterGrades,"A"|"B">

//Nonnullable

type AllPossibleGrades='Dave'|'Jhon'|null|undefined
type NamesOnly= NonNullable<AllPossibleGrades>  //here it excludes null and undefined from AllPossibleGrades
 

//********** */
//ReturnType

// type NewAssign ={title:string,points:number}

const createNewAssign=(title:string,points:number)=>{
    return {title,points}
}

//now here in above case, createNewAssign returns NewAssign as seen. But when it returns something other than new Assign, 
//in that case we want to update our NewAssign. Meaning we want to update our NewAssign everytime our 
//createMewAssign is updated so to do this we use ReturnType. so first lets comment out line number 97

type NewAssign=ReturnType<typeof createNewAssign>
const tsAssign:NewAssign = createNewAssign("Utility Types",100)
console.log(tsAssign);
//In this way, whenever we make any changes in  createNewAssign function, NewAssign will also be changed accordingly to return the value type of CreateNewAssign


//Parameters
/*Parameters<T> extracts the tuple of parameter types from a function type T.

It basically answers: “What arguments does this function take?”*/

type AssignParams= Parameters <typeof createNewAssign>;

const assignArgs:AssignParams=["Generics",200];

const tsAssign1:NewAssign=createNewAssign(...assignArgs);

/*
type AssignParams = Parameters<typeof createNewAssign>;
AssignParams is the type of the arguments of the function.

In this case:

ts
Copy code
type AssignParams = [string, number];
It represents inputs to the function.

So if you wrote:

ts
Copy code
const someArgs: AssignParams = ["Hello", 50];
That’s valid, because it matches the input tuple.

2. What NewAssign means
ts
Copy code
type NewAssign = ReturnType<typeof createNewAssign>;
NewAssign is the type of the output (return value) of the function.

In this case:

ts
Copy code
type NewAssign = { title: string; points: number };
So if you call createNewAssign("Hello", 50), the return value is of type NewAssign.

3. Why tsAssign1 uses NewAssign
ts
Copy code
const tsAssign1: NewAssign = createNewAssign(...assignArgs);
createNewAssign(...assignArgs) produces an output object:

ts
Copy code
{ title: "Generics", points: 200 }
That is of type NewAssign, not AssignParams.

AssignParams would only be used for the input array (like assignArgs).

✅ Mental model:
Inputs (arguments) → Parameters<T> → AssignParams.

Outputs (return value) → ReturnType<T> → NewAssign.

That’s why tsAssign1 is typed as NewAssign.


*/



//////

//Awaited- helps us with the ReturnType of a Promise


interface Users {
    id:number,
    name:string,
    username:string,
    email:string
}

const fetchUsers=async():Promise<Users[]>=>{
    const data=await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        return res.json()
    }).catch(err=>{
        if(err instanceof Error)
        {
            console.log(err.message);
        }
    })
    return data;  //promise is returning the data
}

// type FetchUserReturnTyope=ReturnType<typeof fetchUsers>   //here rhe output will be promise but we want the result of the promise so we have to use Awaited in this line as shown below:

type FetchUserReturnTyope=ReturnType<typeof fetchUsers> 


fetchUsers().then(data=>console.log(data));  //logs the data to the console