//original js code
// const year=document.getElementById("year");
// const thisYear=new Date().getFullYear();
// year.setAttribute("datetime",thisYear);  //gives error
// year.textContent=thisYear;   //gives error
//solution 1 or 1st variation:
// let year:HTMLElement|null=document.getElementById("year");
// let thisYear:string=new Date().getFullYear().toString();
// if(year)
// {
// year.setAttribute("datetime",thisYear);  
// year.textContent=thisYear;   
// }
//solution 2 or 2nd variation
const year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
export {};
//# sourceMappingURL=copyright.js.map