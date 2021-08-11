import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../../styles/home.scss";

export const Rules = () => {
	return (
		<div className="text-center mt-5 mb-5 row justify-content-center">
			<p>
				<h3>
					<strong>THE PACK</strong>
				</h3>
				<br />
				Two players use one standard deck of 52 cards, 3-5 players use two decks
				<h3>
					<br />
					<strong>RANK OF CARDS</strong>
				</h3>
				<br />
				A-K-Q-J-10-9-8-7-6-5-4-3 The 2 is a special card that resets the deck.
				<h3>
					<br />
					<strong>OBJECT OF THE GAME</strong>
				</h3>
				<br />
				Play your cards in a discard pile using ascending order, and the first player to run out of cards wins.
				<h3>
					<br />
					<strong>THE DEAL</strong>
				</h3>
				<br />
				Deal three cards face down to each player. Players are not allowed to look at these cards and must place
				them face down in three rows in front of each player.
				<br />
				<br /> Deal six cards to each player face down. Players may look at these cards in their hand.
				<br />
				<br /> Players select three cards from their hand and place them face up on the three face down cards in
				front of them. Typically, higher value cards are placed face up.
				<br />
				<br /> Place the remaining cards face down in the center of the table to form the Draw pile.
				<h3>
					<br />
					<strong>THE PLAY</strong>
				</h3>
				<br />
				The first player turns over the top card of the Draw pile to form the Discard pile.
				<br />
				<br /> This turned over card is called the Start card.
				<br />
				<br /> The first player plays a card that is equal to or of higher value than the Start card by placing
				that card on top of the Start card. You can play multiple cards in your turn, as long as theyre all
				equal to or higher and of the same rank.
				<br />
				<br /> Once you have finished your turn, draw cards from the Draw pile to maintain three cards in your
				hand at all times.
				<br />
				<br /> You must play a card if you can. If you cant play, you have to pick up the discard pile and add
				it to your hand.
				<br />
				<br />
				On their turn a player can play any 2 card which resets the discard pile to 2, starting the sequence all
				over.
				<br />
				<br /> On their turn a player can play the 10 on any card, but it takes the discard pile out of the game
				instead of resetting it. The player who put the 10 down then draws up to three cards and plays any card.
				<br />
				<br /> If four of the same numbers are played in a row, either by one player or multiple players, it
				clears the discard pile. Place it to the side, as these cards are out of the game.
				<br />
				<br /> The next player can play any card from their hand. Play continues around the table until the Draw
				pile is depleted.
				<br />
				<br /> Once the Draw pile is depleted players rely solely on the cards in their hand. Keep playing until
				there are no cards left in your hand. If you cant play on your turn, you still have to pick up the
				discard pile and put it in your hand.
				<br />
				<br /> Once you pick up the discard pile, you must play all of those cards before playing from your
				cards on the table.
				<br />
				<br /> When its your turn and you dont have a hand, play one card from your face-up cards in front of
				you. When its your turn and youve played all your face-up cards, pick a card thats face-down on the
				table. Dont look at it to choose. Simply flip it over. If it plays on the current card by being equal or
				higher, you can play it. If not, you must pick up the discard pile.
				<br />
				<br /> If you pick up the discard pile, you must play those before continuing to play your face-down
				cards.
				<h3>
					<br />
					<strong>WHO WINS?</strong>
				</h3>
				<br />
				Play all your face-up and face-down cards to win the game. The first person to do so wins and the game
				ends.
			</p>
		</div>
	);
};

{
	/* {array.map(array => (
					<Card
						key={array.title}
						title={array.title}
						image={array.image}
						discription={array.discription}
						goTo={array.goto}
						button={"Find Out More!"}
					/>
				))} */
}
