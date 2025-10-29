import React, { useState } from 'react'
import axios from 'axios'
function PostForm() {
    const [formData,setFormData] = useState({
        title:'',body:'', userId:12
    })
    function handleChange(e) {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    async function handleSubmit(e) {
        e.preventDefault()
        // console.log(formData)
        let res =await axios.post('https://jsonplaceholder.typicode.com/posts',formData,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log(res.data)
        setFormData({
        title:'',body:'', userId:12
    })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="">Title</label><input type="text" name='title'  onChange={handleChange} value={formData.title} />
                <label htmlFor="">Body</label><input type="text" name='body' onChange={handleChange} value={formData.body} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default PostForm