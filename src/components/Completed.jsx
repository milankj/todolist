import React from 'react'
import List from './List'

function Completed(props) {
  return (
    props.completedArray.map(completed => {
      return (
        <List
          {...completed}
          key={completed.id}
          status={true}
          handleCheck={props.handleCheck}
          handleDelete={()=>props.handleDelete(completed.id)}
          handleEdit={()=>props.handleEdit(completed.id)}
          changeText={(e)=>props.changeText(e,completed.id)}
          handleBlur={()=>props.handleBlur(completed.id)}
        />
      )
    })
  )
}

export default Completed