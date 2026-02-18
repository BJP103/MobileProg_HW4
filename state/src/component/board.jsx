import { Task} from "./TaskCard";
import React, {useState} from "react";


export function Board(){
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Make bed',
            description: 'Just make the bed',
            status: 'Unfinished'
        },
        {
            id: 2,
            title: 'Do homework',
            description: 'Do homework for tomorrow',
            status: 'Unfinished'
        },{
            id: 3,
            title: 'Get gas',
            description: 'Fill up the car with gas',
            status: 'Unfinished'
        },
    ]);

    
    return(
        <ul>
            {tasks.map((task) =>(
                <li>
                    <Task title={task.title} description={task.description} status={task.status}></Task>
                </li>
            ))}
            
        </ul>
    )
}