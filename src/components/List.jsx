import React from 'react'


function List(props) {
  console.log(props.date)
  return (
    <div>
        <div
              key={props.id}
              className='
                d-flex
                justify-content-between
                border 
                border-3 
                rounded 
                d-flex 
                p-3 
                mb-4
                align-items-center'
            >
              <div className='d-flex'>
              {props.status ? null: <input
                className='me-3'
                type='checkbox'
                onChange={(e)=>props.handleCheck(e,props.id)}
              />}
              {props.edit ? <input 
                                type='text' 
                                value={props.text} 
                                onChange={(e)=>props.changeText(e,props.id)}
                                onBlur={()=>props.handleBlur(props.id)}
                                /> :<p>{props.text}</p>}
              </div>
              <div>
              <p>{props.date.getDate()}/{props.date.getMonth()+1}/{props.date.getFullYear()}</p>
              {props.status && <p className='text-success'>Completed<i className="bi bi-check"></i></p>}
              <span 
                role='button'
                onClick={()=>props.handleDelete(props.id)}>
                <i className="bi bi-trash"></i>
              </span>
              <span
                role='button'
                className='ms-4'
                onClick={()=>props.handleEdit(props.id)}>
                <i className="bi bi-pencil-fill"></i>
              </span>
              </div>
            </div>
    </div>
  )
}

export default List