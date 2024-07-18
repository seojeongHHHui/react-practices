import React from 'react';
import {Card_List} from './assets/scss/CardList.scss';
import Card from './Card';

function CardList({ title, cards }) {
    return (
        <div className={Card_List}>
            <h1>{title}</h1>
            {cards.map((card, index) => (
                <Card
                    key={card.no}
                    no={card.no}
                    title={card.title}
                    description={card.description}
                    tasks={card.tasks}
                    index={index}
                />
            ))}
        </div>
    );
}

export default CardList;