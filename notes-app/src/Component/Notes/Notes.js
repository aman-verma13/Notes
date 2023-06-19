import React from 'react'
import './Notes.css'
import dlt from '../../Images/delete.webp'

function Notes(props) {
    return (
        <div className='col-md-4 col-sm-6 mt-4'>
            <div className='notebox' style={{ backgroundColor: props.color }}>
                <textarea onChange={(e) => props.typing(e.target.value, props.id)} placeholder='Enter Your Note'
                    defaultValue={props.text} />
                <div className='box-time'>
                    <p style={{ color: 'black', fontSize: '1rem' }}>{props.time}</p>
                    <img onClick={() => props.delete(props.id)} src={dlt}
                        style={{ width: '5vh', objectFit: 'contain' }} />
                </div>
            </div>
        </div>
    )
}

export default Notes
