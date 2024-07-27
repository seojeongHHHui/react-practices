import React, { useRef } from 'react';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({cardNo, tasks, updateTask, addTask, deleteTask}) {
    const newTaskName = useRef(null);
    
    return (
        <div className={Task_List}>
            <ul>
                {tasks.map((task) => (
                    <Task
                        key={task.no}
                        no={task.no}
                        name={task.name}
                        done={task.done}
                        updateTask={updateTask}
                        deleteTask={deleteTask} />
                ))}
            </ul>
            <input
                className={Input_Add_Task}
                type="text"
                placeholder="태스크 추가"
                ref={newTaskName}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        {console.log(cardNo)}
                        addTask({name: e.target.value, card_no: cardNo});
                        newTaskName.current.value = null;
                    }
                }}
            />
        </div>
    );
}

export default TaskList;