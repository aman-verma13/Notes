import React, { useState } from 'react'
import plus from '../../Images/plus.png'
import './sidebar.css'

function SideBar(props) {
    const [color, setColor] = useState([
        "#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"
    ])
    const [isopen, setIsopen] = useState(false);

    const clicked = (col) => {

        const monthNames = [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ];

        const d = new Date();
        let hour = d.getHours();

        let ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour > 12 ? (hour = hour - 12) : hour;

        let min = d.getMinutes();
        min = min < 10 ? '0' + min : min
        let day = d.getDate();
        day = day < 10 ? '0' + day : day;
        let month = monthNames[d.getMonth()];

        let fulldate = hour + ':' + min + ' ' + ampm + ' ' + day + ' ' + month

        setIsopen(false)
        props.addnote(col, fulldate)
    }

    return (
        <>
            <div className='sidebar'>
                <img onClick={() => setIsopen(!isopen)} src={plus} style={{ width: '50px' }} />
                <ul style={{ listStyle: 'none' }} className={`${isopen && "colorlist"}`}>
                    {color.map((col) => <li key={col} onClick={() => clicked(col)} style={{ paddingLeft: '0px', backgroundColor: col }}
                        className={`${isopen && "colorbox"}`}>{ }</li>)}
                </ul>
            </div>
        </>
    )
}

export default SideBar
