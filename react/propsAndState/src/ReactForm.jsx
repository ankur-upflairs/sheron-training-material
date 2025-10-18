import React ,{useState} from 'react'

function ReactForm() {
    const [data, setdata] = useState({
        name:'',
        email:''
    })

    function handleChange(e) {
        setdata({...data,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(data.name,data.email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">your name</label>    <input name='name' type="text" onChange={handleChange} value={data.name} /> <br />
                <label htmlFor="">your email</label> <input name='email' type="text" onChange={handleChange} value={data.email} /> <br />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default ReactForm

// function ReactForm() {
//     const [name, setname] = useState('')
//     const [email, setemail] = useState('')
//     function handleSubmit(e){
//         e.preventDefault()
//         console.log(name,email)
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="">your name</label>    <input type="text" onChange={(e)=>setname(e.target.value)} value={name} /> <br />
//                 <label htmlFor="">your email</label> <input type="text" onChange={(e)=>setemail(e.target.value)} value={email} /> <br />
//                 <button type='submit'>submit</button>
//             </form>
//         </div>
//     )
// }

// export default ReactForm
