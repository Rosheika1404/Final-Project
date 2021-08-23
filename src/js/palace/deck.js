import React from "react";
import PropTypes from "prop-types";

export const getDeck = () =>{
    //s=suits v=value
        let suits = [":spades:", ":clubs:", ":hearts:", ":diamonds:"];
        let ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        let deck = [];
        for (let suitCounter=0; suitCounter<suits.length; suitCounter++){
            for(let ranksCounter=0; ranksCounter<ranks.length; ranksCounter++){
    //           console.log(suits[suitCounter] + ranks[ranksCounter])
                let card = { suit: suits[suitCounter], value: ranks[ranksCounter] }
                deck.push(card)
            }
        }
        return ShuffleDeck(deck);
    }
    
export const ShuffleDeck = (deck) => {
        for (let i = 0; i < 52; i++) {
            let tempCard = deck[i];
            let randomIndex = Math.floor(Math.random() * 52);
            deck[i] = deck[randomIndex];
            deck[randomIndex] = tempCard;
        }
    }
    let NewDeck = getDeck();
    ShuffleDeck(NewDeck);
    console.log(NewDeck);

let player1 = [];
let player2 = []
for(let i = 0; i<3; i++){
  player1.push(newDeck.pop())
  player2.push(newDeck.pop())
}


























//  export const getDeck = () => {
//     //s=suits v=value

//     const suits = ["♠", "♣", "♥", "♦"];
//     const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
//     let deck = [];

//     for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
//         for (let ranksCounter = 0; ranksCounter < ranks.length; ranksCounter++) {
//             //   console.log(suits[suitCounter] + ranks[ranksCounter])
//             let card = suits[suitCounter] + ranks[ranksCounter]
//             deck.push(card)
//         }

//     }
//     return deck;
// }
// console.log(getDeck());



