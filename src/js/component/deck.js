let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

export const getDeck = () =>{
//s=suits v=value

    let deck = [];
    for (let s=0; s<suits.length; s++){
        for(let v=0; v<values.length; v++){
            let card ={Values: values[v], Suit: suits[s]};
            deck.push(card)
        }
        
    }
    return deck;
}
