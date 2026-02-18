import './task.css';
import React, {useState} from 'react';
export function Task({title, description}){
    const [color,setColor] = useState('grey');
    const [status, setStatus] = useState('Unfinished');



    const done = () =>{
        setColor(color === 'grey' ? '#02fa44' : 'grey');
        {setStatus(status === 'Unfinished' ? 'Finished' : 'Unfinished');}

    }

    return(
        <div id ='task' className='task'style={{backgroundColor: color}}>
            <div>
                <h1>{title}</h1>
                <h3>{status}</h3>
                <p>{description}</p>
            </div>
            <button onClick={done}>Done</button>
        </div>
    )
}

