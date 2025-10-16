

export default function ReactEvents() {
    let x = 0
    function handleClick(){
        // alert('button clicked')
        x++
        console.log(x)
    }
    function greet(name){
        // alert(`hello , ${name}`)
    }
    return <>
        <button onClick={handleClick} >click here</button> {x}
        <button onMouseEnter={()=>greet('akash')}>Greeting</button>
    </>
}

//states are complicated  
//state => it is components memory (variable that is associated with component)



