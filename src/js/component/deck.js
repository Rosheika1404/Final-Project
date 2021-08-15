import React from "react";
import PropTypes from "prop-types";


 export const createDeck = () => {
    //s=suits v=value

    const suits = ["♠", "♣", "♥", "♦"];
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    let deck = [];

    for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
        for (let ranksCounter = 0; ranksCounter < ranks.length; ranksCounter++) {
            //   console.log(suits[suitCounter] + ranks[ranksCounter])
            let card = suits[suitCounter] + ranks[ranksCounter]
            deck.push(card)
        }

    }
    return deck;
}
console.log(createDeck());



