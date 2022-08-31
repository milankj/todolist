import React from 'react'
import DatePicker from 'react-date-picker'
import Empty from '../components/Empty'
import List from '../components/List'
function Active(props) {
    return (
        <div>
            <div className=' mt-5 d-flex justify-content-center align-items-center mb-5'>
                <input
                    type='text'
                    name='list'
                    placeholder='Add List'
                    onChange={props.handleList}
                    value={props.toDo}
                    className='p-2'
                />
                <DatePicker
                    className='ms-2'
                    onChange={props.setDate}
                    value={props.date} />
                {/* <button className='btn'><h4><i class="bi bi-calendar3"></i></h4></button> */}
                <button
                    className='ms-2 btn btn-primary'
                    onClick={props.addList}
                >
                    <h4><i className="bi bi-plus-square"></i></h4>
                </button>
            </div>
            <div className='text-center'>
                {props.empty && <Empty />}
                {props.dateError && <span className='text-danger text-center'>Date Invalid </span>}
            </div>
            {props.toDoArray.map(toDoOne => {

                return (
                    <List
                        key={toDoOne.id}
                        {...toDoOne}
                        handleCheck={props.handleCheck}
                        handleDelete={() => props.handleDelete(toDoOne.id)}
                        handleEdit={() => props.handleEdit(toDoOne.id)}
                        changeText={(e) => props.changeText(e, toDoOne.id)}
                        handleBlur={() => props.handleBlur(toDoOne.id)}
                    />
                )
            })}
        </div>
    )
}

export default Active