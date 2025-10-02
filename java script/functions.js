//function is a block of code that can be reused 
function interest(p,t,r){// parameters /arguments 
    let i = (p*t*r) /100 
    // console.log(i)
    return i 
}
let x = interest(100,2,5)//calling of a function
// console.log(x)
// console.log(interest(200,4,5))
//1.normal function , 2. function expression , 3. arrow function 
// let sum = function(a,b){
//     return a+b
// }
// console.log(sum(34,12))

//3. arrow functions 
// let cube = (a)=>{
//     return a**3
// }
// console.log(cube(4))
//if you have only one parameter so you can remove and if you have one single statement
//remove {} and remove return (it will return )
let cube = a=>a**3
// console.log(cube(6))
//arrow function does not have this keyword 
// console.log(this)

//functions are considered first class citizens 
//functions are treated as  value 
let sum = function(a,b){
    return a+b
}
function operation(a,b,fnc){
    let x = fnc(a,b)
    return x
}
// console.log(operation(4,5,sum))
console.log(operation(3,4,(a,b)=>a*b))



