import React from "react";
import { getDeck }  from "../palace/deck"

export const ShuffleDeck = (deck) => {
    for (let i = 0; i < 52; i++) {
        let tempCard = deck[i];
        let randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }

}

// let NewDeck = getDeck();
// ShuffleDeck(NewDeck);
// console.log(NewDeck);
