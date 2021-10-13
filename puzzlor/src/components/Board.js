import React from 'react'
import OppCombatRow from 'OppCombatRow';
import YourBackRow from './YourBackRow';
import OppHand from './OppHand';
import OppBackRow from './OppBackRow';
import YourCombatRow from './YourCombatRow';
import YourHand from './YourHand';
//create card container and access the card data for display
const Board = (props) => {
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id')

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div 
            id = {props.id}
            onDrop={drop}
            onDragOver={dragOver}
            className={props.className}
            >
          {props.children}
            {/* <OppHand/>
            <OppBackRow/>
            <OppCombatRow/>
            <YourCombatRow/>
            <YourBackRow/>
            <YourHand/> */}
        </div>
    )
}

export default Board
