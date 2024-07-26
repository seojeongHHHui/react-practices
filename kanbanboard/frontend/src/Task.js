import React from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({ no, name, done, updateTask, deleteTask }) {
    return (
        <li className={_Task}>
            <input
                type='checkbox'
                checked={done==='Y'}
                onChange={(e) => {
                    e.preventDefault();
                    console.log(no, name, done);
                    updateTask({
                        no: no,
                        name: name,
                        done: (done==='Y') ? 'N' : 'Y'
                    })
                }}
            />
            {name}
            <a href='' className={Task_Remove}
                onClick={(e) => {
                    e.preventDefault();
                    deleteTask(no);
                }}
            />
        </li>
    );
}

export default Task;