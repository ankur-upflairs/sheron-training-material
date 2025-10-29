import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import PostForm from './PostForm'

function DataFetching() {
    const [posts, setPosts] = useState([])
    //when dependency array is blank , the use effect run only once (initial render )
    //to fetch data from an api (to manage side effects ) 
    // callback function of effect should not be async 
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => { console.log(data), setPosts(data) })
    // },[])
     useEffect(()=>{
       async function getData(){
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(res.data)
        setPosts(res.data)
       }
       getData()
    },[])
    return (
        <div>
            <PostForm />
            {posts.map((post,index)=>{
                return <>
                    <div>
                        <h3>{post.id}. {post.title}</h3>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                </>
            })}
        </div>
    )
}

export default DataFetching