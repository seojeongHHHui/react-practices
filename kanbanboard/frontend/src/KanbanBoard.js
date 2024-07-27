import React, {useState, useEffect} from 'react';
import {Kanban_Board} from './assets/scss/KanbanBoard.scss';
import CardList from './CardList';

function KanbanBoard() {

    const [cards, setCards] = useState([]);
    
    const fetchCards = async () => {
        try {
            const response = await fetch('/api/card', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });
            
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            
            setCards(json.data || []);
            
        } catch(err) {
            console.error(err);
        }
    };
    
    useEffect(() => {
        fetchCards();
    },[]);
    
    const toDo = cards.filter((card) => card.status === 'ToDo');
    const doing = cards.filter((card) => card.status === 'Doing');
    const done = cards.filter((card) => card.status === 'Done');
 
    return (
        <div className={Kanban_Board}>
            <CardList title={'To Do'} cards={toDo} />
            <CardList title={'Doing'} cards={doing} />
            <CardList title={'Done'} cards={done} />
        </div>
    );
}

export default KanbanBoard;