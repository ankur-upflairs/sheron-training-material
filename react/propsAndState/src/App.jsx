import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Products from './Products'
import ReactEvents from './Events'
import ReactState from './ReactState'
import ReactForm from './ReactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Product image="https://m.media-amazon.com/images/I/314vDcsDB8L._SY300_SX300_QL70_FMwebp_.jpg" title="Cross Bailey Light Glossy Black Resin Ballpoint Pen"
     description="Cross Bailey Light Glossy Black Resin Ballpoint Pen" price="199" />
     <Product image="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/6/v/v/10-snk-eva-740-wht-blk-10-bruton-white-black-original-imahdmzbdvn6jd5u.jpeg?q=70"
     title="shoes" description="world's best shoes" price="2000" />  */}
     {/* <Products /> */}
     {/* <ReactEvents /> */}
     {/* <ReactState /> */}
     <ReactForm />
    </>
  )
}

export default App 
