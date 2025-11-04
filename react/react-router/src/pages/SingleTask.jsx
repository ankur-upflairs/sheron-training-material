import React from 'react'
import { useParams } from 'react-router'

function SingleTask() {
    let {id} = useParams()
  return (
    <div>
        This is the single task page <br />
        this is task with id {id}
    </div>
  )
}

export default SingleTask