//index signatures and key of assertion
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
/*Here, the only valid keys are the literal property names:

"Pizza"

"Books"

"Job"
*/
//So TypeScript thinks of the keys as a union:
//type TransactionKeys = "Pizza" | "Books" | "Job";
//That means you can only “insert” (access) values using those keys.
//2. Direct access with literal keys
console.log(todaysTransactions.Pizza); // ✅ fine
console.log(todaysTransactions['Pizza']); // ✅ fine
//Both work because "Pizza" is one of the known keys.
//3. Problem with string
let prop3 = 'Pizza';
// console.log(todaysTransactions[prop3]);   // ❌ error
//prop is declared as string, not "Pizza" | "Books" | "Job".
//From TypeScript’s view, prop could be "Banana" or "Car" — which don’t exist in the interface. we get this error during runtime
//That’s why you get an error.
//4. Correct way → restrict the key with keyof
let prop1 = 'Pizza'; // 👈 now prop must be "Pizza" | "Books" | "Job"
console.log(todaysTransactions[prop1]); // ✅ works
//Now, any string key is allowed:
let prop = 'Banana';
const todaysTransactions1 = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions1[prop]); // ✅ compiles, but output will be undefined
//meaning Incomes has keys of type string and value can be either number or a string
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
export {};
//# sourceMappingURL=main.js.map