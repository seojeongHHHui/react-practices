import React from 'react';
import {Kanban_Board} from './assets/scss/KanbanBoard.scss';
import CardList from './CardList';
import cards from './assets/json/data';

function KanbanBoard() {
    const ToDo = cards.filter((card) => card.status === 'ToDo');
    const Doing = cards.filter((card) => card.status === 'Doing');
    const Done = cards.filter((card) => card.status === 'Done');

    return (
        <div className={Kanban_Board}>
            <CardList key={'To Do'} title={'To Do'} cards={ToDo} />
            <CardList key={'Doing'} title={'Doing'} cards={Doing} />
            <CardList key={'Done'} title={'Done'} cards={Done} />
        </div>
    );
}

export default KanbanBoard;