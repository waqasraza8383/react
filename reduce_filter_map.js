let arr=[1,2,3,4,5];
let result=arr.filter((num)=>{
    return num>12?num:null;
})

console.log(result);

// let result=arr.map((num)=>{
// return num*3;
// })

// console.log(result);

//convert latter  1st letter to upper case
//use easy method

// let names=["john","doe","smith"];
// let uppercaseNames=names.map((name)=>{
//     return name.charAt(0).toUpperCase() + name.slice(1);

// })

// console.log(uppercaseNames);
















// let numbers=[1,2,3,4,5];

// //map method is used to create a new array by applying a function to each element of the original array. 
// // It takes a callback function as an argument, which is executed for each element in the array.
// //  The callback function can take three arguments:
// // the current element, the index of the current element, and the original array itself.
// let result=numbers.map((num,index) => {
//     return num*index;
// });
// console.log(result);

// //filter 

// let enumber=[1,2,3,4,5];


// let sresult=enumber.filter((num)=>{
//     return num%2===0;
// });

// console.log(sresult);

// let marks=[80,90,70,60,85];
// console.log(marks);
// //reduce method is used to return a single value ;

// let grade=marks.reduce((total,mark)=>{
//     return total + mark;
// },0);

// console.log(grade);