// function sum(a,b=7){
//     return a+b
// }
// console.log(sum(3)) 
// function sum(){
//     // console.log(arguments)
//     let s=0
//     for(let x of arguments){
//         s+=x
//     }
//     console.log(s)
// }
// sum(3,4,5,6,8)
//rest operator 

// function sum(name,...args){
//     console.log(args)
//     console.log('name = ',name)
// }
// sum(2,3,4,5)

//spread operator 
let arr = [3,4,5,6,8]
// function sum(){
//     console.log(arguments)
// }
// sum(arr[0],arr[1],arr[2])
// sum(...arr) 
let arr1=[11,22,33]
// let d = arr.concat(arr1)
// let d =[...arr,...arr1]
// console.log(d)
// let e = arr 
// let e = [...arr]
// e[0]=12
// console.log(e,arr)
//destructuring =>
// let f =[34,56,77]
// let [x,y] = f 
// console.log(f[0],f[1])
// console.log(x,y)
// let age =12
let person = {
    name:'sunil',
    age:34,
    email:'a@b.com' 
}
// let {name,age} = person
// let {name,age : age1} = person
// console.log(name,age1)
// let {name,...p1} = person
// console.log(p1)
// let g = [1,2,4,5,6,7,7]
// let [a,b,...newArr] = g
// console.log(newArr)













