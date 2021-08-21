import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../../styles/home.scss";

export const Rules = () => {
	return (
		<div className="text-center mt-5 mb-5 row justify-content-center">
			<p>
				<p>
					<h3>
						<strong>OBJECTIVE</strong>
					</h3>
					<br />
					The goal is to win the most sets of cards. A set of cards is four of a kind.
					<h3>
						<br />
						<strong>HOW TO PLAY</strong>
					</h3>
					<br />
					Players ask one opponent if they have a paticular card.
					<br />
					Suits are not important as you need all four suits to make a set.
					<br />
					For example : Do you have any 4s?
					<br />
					The opponent will check their hand to see if there are any cards matching the players guess.
					<br />
					If the opponent has a card from the requested rank, the opponent provides a card to the player
					making the request.
					<br />
					If the player makes a successful request their turn continues until they make an incorrect guess.
					<br />
					If the opponent does not have any of the requested cards, they inform the player to Go Fish
					<br />
					The player then draws a card from the draw pile and the rotation of play continues.
					<br />
					The game is complete when all 13 sets are allocated and there are no more cards to play.
					<br />
					The player with the most sets wins!!!
				</p>
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
