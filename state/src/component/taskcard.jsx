import './task.css';
import React, {useState} from 'react';
export function Test({title, description}){

    const done = () =>{
        
    }

    return(
        <div id ='task' className='task'>
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={done}>Done</button>
        </div>
        
    )
}

const style = StyleSheet.create({
    
})
