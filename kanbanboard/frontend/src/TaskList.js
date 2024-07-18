import React, { useState } from 'react';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({cardNo, tasks}) {
    const [newTaskName, setNewTaskName] = useState('');
    
    return (
        <div className={Task_List}>
            <ul>
                {tasks.map(task => (
                    <Task
                        key={task.no}
                        no={task.no}
                        name={task.name}
                        done={task.done}
                    />
                ))}
            </ul>
            <input
                type="text"
                className={Input_Add_Task}
                placeholder="태스크 추가"
                value={newTaskName}
                onChange={e => setNewTaskName(e.target.value)}
            />
        </div>
    );
}

export default TaskList;