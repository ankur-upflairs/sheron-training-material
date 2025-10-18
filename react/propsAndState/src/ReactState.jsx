import { use, useState } from "react"

function ReactState() {
    //useState
    let [state,setState] = useState(0)
    const [number,setNumber] = useState('')
    //state is immutable 
    // to change the state value , use setter function 
    //whenever state changes , it re-renders component 
    function addNumber(){
        setState(state + parseInt(number))
        setNumber('')
    }
    function increase() {
        // state++//not allowed 
        setState(state + 1)
        // setState(state+1)
    }
      function decrease() {
        setState(state - 1)
    }
    return <>
        <input type="number" onChange={(event)=>setNumber(event.target.value)} value={number}  />
         <button onClick={addNumber}>Add</button> <br />
        {number} <br />
        <button onClick={increase}>increase</button> <br />
        {state} <br />
        <button onClick={decrease}>decrease</button> <br />
    </>
}

export default ReactState