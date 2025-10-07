//array => collection of data types 
let a = [34,'test' , true ]
//indexing  is a way to access elements inside array ,indexing starts with 0

// console.log(a[1])
// console.log(a.at(2))
// console.log(a.length)
// a.pop()
// a.push(45)
// a.shift()
// a.unshift(23)
// let b = [2,3,5,7,19,5]
// a.includes(5)
// b.indexOf(5,3)
// console.log(b.lastIndexOf(5))
// b.reverse()
// console.log(b)
// console.log(b.slice(2,5))
// console.log(b.sort((a,b)=>b-a))
// b.splice(3,0,34,23,12)
// console.log(b)
// console.log(b.concat([89,90])) 

// for(let i =0 ; i < b.length ; i++){
//     console.log(b[i])
// }
// for(let i in b){
//     // console.log(b[i])
// }
// for(let element of b ){
//     console.log(element)
// }
//all callback methods
// => 3 arguments => value/element , index  , complete array
// b.forEach((v,i,arr)=>{
//     console.log(v,i,arr)
// })

let c = [2,3,5,7,19,5] 

// let d = c.map((v,i,arr)=>{
//     return v*2
// })
// console.log(d)
// let e = c.every((v)=>v>3)
// console.log(e)
// let e = c.some((v)=> v > 30)
// console.log(e)
// let e = c.filter((v,i,arr)=> v >= 5)
// console.log(e)
// let e = c.find((v,i)=> v>5)
// console.log(e)
// let e = c.findIndex(v=>v>5)
// console.log(e) 

// let sum = 0
// for(let x of c){
//     sum+=x
// }
// console.log(sum)

// let e = c.reduce((preVal,currVal,index,arr)=>{
//     return preVal + currVal //2 => 5 => 10 => 17 => 36 => 41
// },0)
// console.log(e) 
// let f = [[1,2],[3,4],[5,6]]
// // console.log(f.flat(Infinity))
// console.log(f.flatMap((v,i,arr)=>{
//     return v.concat([23])
// }))



