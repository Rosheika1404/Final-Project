import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
// import { signOut } from "../component/signOut";
import { useHistory } from "react-router-dom";
import PlayingCard from "../component/PlayingCard";
import { signOut } from "../utilities/signOut";

export const Dashboard = () => {
	const { actions, store } = useContext(Context);
	const [drawCard, setDrawCard] = useState("");

	useEffect(() => {
		// component mounted (started showing)
		actions.newGame();
	}, []);

	/*
	useEffect(() => {
		return () => {
			// component UNmounted (stopped showing)
		}
	}, [])
	*/

	return (
		<div className="CardHandler">
			<h1 className="CardHandler-title">Card handler</h1>
			<h2 className="CardHandler-subtitle">Draw the cards!</h2>
			<button
				className="CardHandler-btn btn"
				onClick={() => {
					actions.drawCard();
				}}>
				click me
			</button>

			<h1>Player one</h1>
			<div className="d-flex">
				{store.playerOneDeck.map((card, i) => (
					<PlayingCard key={i} value={card.value} suit={card.suit} />
				))}
			</div>

			<h1>Rest of deck </h1>
			<div className="d-flex">
				{store.deck.map((card, i) => (
					<PlayingCard key={i} value={card.value} suit={card.suit} />
				))}
			</div>

			<h1>Player Two</h1>
			<div className="d-flex">
				{store.playerTwoDeck.map((card, i) => (
					<PlayingCard key={i} value={card.value} suit={card.suit} />
				))}
			</div>

			<div className="deck">{drawCard}</div>
		</div>
	);
};
