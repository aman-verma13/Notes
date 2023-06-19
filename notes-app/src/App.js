import React, { useEffect, useState } from 'react'
import SideBar from './Component/SideBar/SideBar'
import Notes from './Component/Notes/Notes'
import './App.css'
import nodata from './Images/no_data.png'
import { v4 as uuid } from 'uuid'
import GetData from './Component/APIs/GetData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/APIs/Login'

function App(props) {
    const [data, setData] = useState(
        JSON.parse(localStorage.getItem('note-store')) ?? []
    )

    const addnote = (col, date) => {
        let copy = [...data];
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8)
        copy.unshift({
            id: small_id,
            text: '',
            time: date,
            color: col
        })
        console.log(data);
        setData(copy)
    }

    useEffect(() => {
        localStorage.setItem('note-store', JSON.stringify(data))
    }, [data])

    const deleteItem = (id) => {
        let copydata = [...data];

        for (let i = 0; i < copydata.length; i++) {
            if (copydata[i].id == id) {
                copydata.splice(i, 1)
            }
        }

        setData(copydata)
    }

    const typing = (text, id) => {
        let copydat = [...data]
        for (let i = 0; i < copydat.length; i++) {
            if (copydat[i].id == id) {
                copydat[i].text = text
            }
        }

        setData(copydat);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {/* <h1>Notes App</h1>
            <div className='row w-100'>
                <div className='col-sm-1'>
                    <SideBar addnote={(col, fulldate) => addnote(col, fulldate)} />
                </div>
                <div className='col-sm-11'>
                    <div style={{}} className='w-100'>
                        {
                            <div style={{ display: 'flex', justifyContent: 'center' }} className='row'>
                                {
                                    data.length == 0 ? <img style={{ objectFit: 'contain', width: '40%' }} src={nodata} />
                                        :
                                        data.map((item) => <Notes key={item.id} typing={(text, id) => typing(text, id)} delete={(id) => deleteItem(id)} time={item.time} id={item.id} text={item.text} color={item.color} />)
                                }
                            </div>
                        }
                    </div>
                </div>
            </div> */}

            <BrowserRouter>
                <Routes>
                    <Route index element={<GetData />}/>
                    <Route path='/Login' element={<Login />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
