import React, { useState } from 'react';
import {_Card, Card_Title} from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({no, title, description, tasks, index}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={_Card}>
            <div className={[Card_Title, (open ? 'Card_Title_Open' : '')].join(' ')}
                onClick={() => {
                    setOpen(!open);
                }}>
                {title}
            </div>

            <div class='Card_Details'>
                {description}
            </div>

            {open ? <TaskList cardNo={no} tasks={tasks} /> : null }
        </div>
    );
}

export default Card;