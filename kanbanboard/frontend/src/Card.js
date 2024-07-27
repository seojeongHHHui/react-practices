import React, { useEffect, useState } from 'react';
import {_Card, Card_Title} from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({no, title, description}) {
    const [open, setOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    
    const updateTask = async (task) => {
        try {
            const response = await fetch(`/api/task/${task.no}`, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            
            setTasks((prevTasks) => prevTasks.map((e) => (e.no === json.data.no ? json.data : e)));
        
        } catch(err) {
            console.error(err);
        }
    };
    
    const addTask = async (task) => {
        try {
            const response = await fetch('/api/addTask', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            
            setTasks([json.data, ...tasks]);
            
        } catch(err) {
            console.error(err);
        }
    };
    
    const deleteTask = async (no) => {
        try {
            const response = await fetch(`/api/task/${no}`, {
                method: 'delete',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: null,
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }

            setTasks(tasks.filter((task) => task.no !== no));
        
        } catch(err) {
            console.error(err);
        }
    };
    
    const fetchTasks = async () => {
        try {
            const response = await fetch(`/api/task/${no}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: null,
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            
            setTasks(json.data);
            
        } catch(err) {
            console.error(err);
        }
    };
    
    useEffect(() => {
        fetchTasks();
    }, []);


    return (
        <div className={_Card}>
            <div className={[Card_Title, (open ? 'Card_Title_Open' : '')].join(' ')}
                onClick={async () => {
                    setOpen(!open);
                }}>
                {title}
            </div>

            <div class='Card_Details'>
                {description}
            </div>

            {open ?
            <TaskList
                cardNo={no}
                tasks={tasks}
                updateTask={updateTask}
                addTask={addTask}
                deleteTask={deleteTask} />
            : null }
        </div>
    );
}

export default Card;