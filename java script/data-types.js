let b=56
console.log(b)
//variables=> it is the name of memory location where values are stored 
//let/var / const
// naming rules => 
/*    1.it can contain digits , alphabets ,_ , $ 
    2. name can't start with a digit
    3. we can't use reserve keywords 
    if = > condition ,for => loops 
*/ 
let c1 //declare a variable
c1=45
// let 1c X
// Number => integer + float 
let c=45.45
console.log(typeof c)
//string => normal text (collection of characters) / string are immutable

let d= 'hello'
let e = "everyone"
console.log(typeof d , typeof e)

// template string / string literal 

let name='sunil'
let age =34
let f=`hello ${name}  your age is ${age}`
console.log(f)

//bigInt => 
let g = 23223454555656n
console.log(typeof g ,g)

//boolean => true / false 
let h= true
console.log(typeof h,h)
//undefined => variable created but value not given
let i
let j=undefined
console.log(typeof i)
//null => 
let k = null 
console.log(typeof k)
//symbol => 
let s1=Symbol('a')
let s2=Symbol('a')

console.log(s1==s2)

//object => key-value pair 
let person = {
    name:'sunil',
    age:23,
    marks:[12,34,56],
    contact:{
        email:'a@b.com'
    },
    totalMarks:function(){
        return this.marks[0]+this.marks[1]+this.marks[2]
    },
    "roll no":112
}
let key = 'roll no'
//dot notation and square notation
console.log(person.name)
console.log(person.marks[0])
console.log(person.contact.email)
console.log(person.totalMarks())
console.log(person[key])

//array => its a type of object 
let ages = [2,5,6]
console.log(typeof ages)


