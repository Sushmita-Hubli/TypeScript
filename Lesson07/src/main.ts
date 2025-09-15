//index signatures and key of assertion


//1. Interface without index signature
interface TransactionObj {
  Pizza: number;
  Books: number;
  Job: number;
}
const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}


/*Here, the only valid keys are the literal property names:

"Pizza"

"Books"

"Job"
*/

//So TypeScript thinks of the keys as a union:

//type TransactionKeys = "Pizza" | "Books" | "Job";


//That means you can only “insert” (access) values using those keys.

//2. Direct access with literal keys
console.log(todaysTransactions.Pizza);   // ✅ fine
console.log(todaysTransactions['Pizza']); // ✅ fine


//Both work because "Pizza" is one of the known keys.

//3. Problem with string
let prop3: string = 'Pizza';
// console.log(todaysTransactions[prop3]);   // ❌ error


//prop is declared as string, not "Pizza" | "Books" | "Job".

//From TypeScript’s view, prop could be "Banana" or "Car" — which don’t exist in the interface. we get this error during runtime

//That’s why you get an error.

//4. Correct way → restrict the key with keyof
let prop1: keyof TransactionObj = 'Pizza';  // 👈 now prop must be "Pizza" | "Books" | "Job"
console.log(todaysTransactions[prop1]);     // ✅ works


//Here, the compiler guarantees that prop can only be one of the defined keys, so insertion is safe.

//5. Alternative → index signature (less strict)
interface TransactionObj1 {
  [key: string]: number;
}


//Now, any string key is allowed:

let prop: string = 'Banana';
const todaysTransactions1: TransactionObj1 = {
    Pizza: -10,
    Books: -5,
    Job: 50
}
console.log(todaysTransactions1[prop]); // ✅ compiles, but output will be undefined


// ⚠️ Downside: you lose the safety of only allowing "Pizza" | "Books" | "Job".

// ✅ In summary

// Without index signature → only known keys are allowed ("Pizza" | "Books" | "Job").

// Declaring prop: string makes TypeScript think you could insert any key, so it blocks you.

// To fix:

// Use keyof TransactionObj for safe key insertion.

// Or add an index signature if you really want arbitrary string keys.

///////////////////////
//one more way

type Streams='salary'| 'bonus' | 'sidehustle';

type Incomes=Record<Streams,number|string>
//meaning Incomes has keys of type string and value can be either number or a string

const monthlyIncomes:Incomes={
    salary:500,
    bonus:100,
    sidehustle:250

}

for(const revenue in monthlyIncomes)
{
    console.log(monthlyIncomes[revenue as keyof Incomes])
}