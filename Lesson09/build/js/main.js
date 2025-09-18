//UTILITY TYPES
const updateAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studentId: "haha",
    title: "hmm",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 96 });
//Required and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = {
    ...assignGraded, verified: true
};
// assignVerified.grade=99;  This is not allowed because this is readonly
// recordAssignment(assignGraded)  not allowed because we want all the properties since the function has Required utility
recordAssignment({ ...assignGraded, verified: true });
//Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    BLUE: "0000FF"
};
const finalGrades = {
    Sara: "A",
    Kell: "U"
};
const gradeData = {
    Sara: { assign1: 22, assign2: 34 },
    Kell: { assign1: 33, assign2: 88 }
};
const score = {
    studentId: "kk",
    grade: 99
};
const scorenew = {
    studentId: "002303871",
    title: "Northeastern MSCSE"
};
//********** */
//ReturnType
// type NewAssign ={title:string,points:number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 200];
const tsAssign1 = createNewAssign(...assignArgs);
const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data; //promise is returning the data
};
fetchUsers().then(data => console.log(data)); //logs the data to the console
export {};
//# sourceMappingURL=main.js.map