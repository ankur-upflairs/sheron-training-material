//accessing => 
let a = document.getElementById('a')
let b = document.getElementsByTagName('p') //html collection 
let c = document.getElementsByClassName('x')//html collection
let d = document.querySelector('.x') //it select first matching element 
let e = document.querySelectorAll('.x') //node list 
// console.log(e)
// console.log(c)
// // c[0].remove()
// console.log(e) 
// console.log(c) 
//text and html
let para= document.getElementById('b')
// console.log(para.innerText)
// console.log(para.innerHTML)

// para.innerText = 'changed text'
// para.innerHTML = '<b>changed bold text </b>'

let btn = document.getElementById('btn')
// btn.addEventListener('click',function(){
//     this.style.color = 'red' 
//     //remove - (hyphen) and convert it to camelCase 
// })
// btn.addEventListener('mouseenter',function(){
//     //remove - (hyphen) and convert it to camelCase 
//     this.style.backgroundColor= 'blue'
//     this.style.color = 'red' 

// })
// btn.addEventListener('mouseleave',function(){
//     //remove - (hyphen) and convert it to camelCase 
//     this.style.backgroundColor= ''
//     this.style.color = ''
// })
btn.addEventListener('click',function(){
//    console.log(para.getAttribute('title'))
    // para.setAttribute('title','hello everyone')
    // para.setAttribute('class','y')

})
btn.addEventListener('click',function(){
    // console.log(para.classList)  
    // para.classList.remove('y')
    // para.classList.add('z')
    para.classList.toggle('y')
})




