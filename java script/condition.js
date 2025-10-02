// if(condition){
//     console.log('true')
// }
// else {
//     console.log('false')
// }
// let age =20
// if(age > 18){
//     console.log('adult')
// }
// else {
//     console.log('minor')
// } 

// let age = prompt('Enter your age')//this takes value string 
// if(age > 18){
//     alert('adult')
// }
// else {
//     alert('minor')
// } 
//if-else-if ladder 
//take a no from user and check wheather it is 0 , negetive or positive
// let n = parseInt(prompt('Enter a no : '))
// if(n>0){
//     alert('positive')
// }
// else if(n < 0){
//     alert('negetive')
// }
// else{
//     alert('zero')
// }
//ternary operator => it shorthand of if-else 
// let n = -23
// condition ? statement 1 : statement 2
// n>=0 ? alert('positive') : alert('negetive')

// let isAdult = confirm('are you 18+ ? ')
// isAdult ? alert('Welcome to our site .'): alert('Sorry are not allowed to visit')

//take a input from user b/w 1-7 and print no according (eg 1-monday , 2-tuesday) 
let n = parseInt(prompt('Enter a no : '))
switch (n) {
    case 1:
        console.log('monday')        
        break;
    case 2:
        console.log('tuesday')        
        break;
    case 3:
        console.log('wednessday')
        break;
    case 4:
        console.log('thurday')
        break;
    case 5:
        console.log('friday')        
        break;
    case 6:
        console.log('saturday')        
        break;
    case 7:
        console.log('sunday')      
        break;
    default:
        console.log('you have entered the wrong no')
        break;
}
//take a no input from user 1-12 and print the months name accordingly











