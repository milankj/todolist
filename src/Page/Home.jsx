import React from 'react'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import Completed from '../components/Completed'
import "react-tabs/style/react-tabs.css"
import Active from '../components/Active'

function Home() {
    const [activeTab, setActiveTab] = useState(0)
    const [toDoArray, setToDoArray] = useState([])
    const [completedArray, setCompletedArray] = useState([])
    const [toDo, setToDo] = useState('')
    const [empty, setEmpty] = useState(false)
    const [dateError, setDateError] = useState(false)
    const [date, setDate] = useState(new Date());
    const handleList = (e) => {
        setToDo(e.target.value)
    }
    const addList = () => {
        if (toDo.trim().length === 0) {
            setEmpty(true)
            return
        }
        else {
            setEmpty(false)
            if (date.getDate() < new Date().getDate()) {
                console.log('ok')
                if ((date.getMonth() + 1) <= (new Date().getMonth() + 1)) {
                    if (date.getFullYear() <= new Date().getFullYear()) {
                        setDateError(true)
                        return
                    }
                }
            }
            setDateError(false)
        }
        setToDoArray(prevArray => {
            return [...prevArray, { text: toDo, id: nanoid(), edit: false, date: date }]
        })
        setToDo('')
    }
    const handleCheck = (e, id) => {
        const newArr = toDoArray.filter(toDo => toDo.id === id)
        setCompletedArray(prevArray => {
            return [...prevArray, ...newArr]
        })
        setToDoArray(toDoArray.filter(toDo => toDo.id != id))
    }
    const handleDelete = (id) => {
        if (toDoArray.find(element => element.id === id)) {
            setToDoArray(toDoArray.filter(toDo => toDo.id != id))
        } else if (completedArray.find(element => element.id === id)) {
            setCompletedArray(completedArray.filter(complete => complete.id != id))
        }
    }
    const handleEdit = (id) => {
        if (toDoArray.find(element => element.id === id)) {

            setToDoArray(prevArray => prevArray.map(toDo => {
                return toDo.id === id ? { ...toDo, edit: !toDo.edit } : toDo
            }))
        } else if (completedArray.find(element => element.id === id)) {
            setCompletedArray(prevArray => prevArray.map(toDo => {
                return toDo.id === id ? { ...toDo, edit: !toDo.edit } : toDo
            }))
        }
    }
    const changeText = (e, id) => {
        if (toDoArray.find(element => element.id === id)) {

            setToDoArray(prevArray => prevArray.map(toDo => {
                return toDo.id === id ? { ...toDo, text: e.target.value } : toDo
            }))
        } else if (completedArray.find(element => element.id === id)) {
            setCompletedArray(prevArray => prevArray.map(toDo => {
                return toDo.id === id ? { ...toDo, text: e.target.value } : toDo
            }))
        }
    }
    const handleBlur = (id) => {
        if (toDoArray.find(element => element.id === id)) {

            setToDoArray(prevArray => prevArray.map(toDo => {
                return toDo.id === id ? { ...toDo, edit: !toDo.edit } : toDo
            }))
        } else if (completedArray.find(element => element.id === id)) {
            setCompletedArray(prevArray => prevArray.map(toDo => {
                return toDo.id === id ? { ...toDo, edit: !toDo.edit } : toDo
            }))
        }
    }
    const handleSelect = index => {
        setActiveTab(index)
    }
    return (
        <div>
            <div className='container'>
                <h1 className='text-center m-5'>To Do list</h1>

                <Tabs
                    selectedIndex={activeTab}
                    onSelect={handleSelect}
                >
                    <TabList>
                        <Tab>Active ({toDoArray.length})</Tab>
                        <Tab>Completed ({completedArray.length})</Tab>
                    </TabList>
                    <TabPanel>
                        <Active
                            addList={addList}
                            toDo={toDo}
                            date={date}
                            setDate={setDate}
                            handleList={handleList}
                            empty={empty}
                            dateError={dateError}
                            toDoArray={toDoArray}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            changeText={changeText}
                            handleBlur={handleBlur}
                        />
                    </TabPanel>
                    <TabPanel>
                        <Completed
                            completedArray={completedArray}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            changeText={changeText}
                            handleBlur={handleBlur}
                        />
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    )
}

export default Home
