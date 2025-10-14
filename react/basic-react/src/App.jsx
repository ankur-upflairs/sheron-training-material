import {Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer, { Content,name } from './Content.jsx'
// import Footer from './Content.jsx'
//fragments => replacement of parent div(element)

// let element1= <Fragment> 
//    <p className='a' >hello</p>
//   <p>how are <br/> you ?</p>
//   <input type="text" ></input>
//   <input type="text" />
//  </Fragment> 

//https://www.html.am/templates/downloads/view-source.cfm?template=css-templates/fixed-width-1-red.cfm 

let element1= <> 
   <p className='a' >hello</p>
  <p>how are <br/> you ?</p>
  <input type="text" ></input>
  <input type="text" />
 </> 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Content />
     hi , how are you , {name} ? 
     {element1}
    <Footer />
    </> 
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// //jsx => javascript xtension / javascript xml
// //jsx is a way of writing html inside js 
// //complete jsx should be wrap in single parent
// // every tag must be closed 
// //use className insteed of class (reserved keyword) 

// let element1= <div>
//   <p className='a' >hello</p>
//   <p>how are <br/> you ?</p>
//   <input type="text" ></input>
//   <input type="text" />
//   </div>
// //component is a piece of UI => functional components and class components 
// //functional component => functional component are normal function but their name starts with capital letter 
// //function component always return jsx 
// //to use the component call as a tag 

// function Header() {

//    return <div>
//     <h3>this is heading </h3> 
//    </div>
// }
// //curly brackets {} in jsx => it used to write js code inside jsx 
// //dont use if-else or loop inside it 
// // use ternary operator 
// let name = 'ankur singh'

// function Content(){

//   return <div>
//     <p>hello , my name is {name} and my age is {12+20}</p>
//   </div>
// }

// function Footer(){
//   return <div>
//     this is footer 
//   </div>
// }


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Header></Header>
//     <Content /> 
//      hi , how are you ? 
//      {element1}
//      <Footer />
//     </>
//   )
// }

// export default App
