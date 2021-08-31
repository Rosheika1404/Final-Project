import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
// import { signOut } from "../component/signOut";
import PlayingCard from "../component/PlayingCard";
import cardStack from "../../img/card-deck-1.png";

import "../../styles/dashboard.scss";

export const Dashboard = () => {
	const { actions, store } = useContext(Context);
	const [drawCard, setDrawCard] = useState("");

	// useEffect(() => {
	// 	// component mounted (started showing)
	// 	actions.newGame();
	// }, []);

	/*
	useEffect(() => {
		return () => {
			// component UNmounted (stopped showing)
		}
	}, [])
	*/

	return (
		<div className="CardHandler">
			{/* <h1>Player one</h1> */}
			<div className="d-flex deck">
				{store.playerOneDeck.map((card, i) => (
					<PlayingCard key={i} value={card.value} suit={card.suit} />
				))}
			</div>

			{/* <h1>Rest of deck </h1> */}
			<div className="d-flex text">
				<img src={cardStack} style={{ height: "220px", width: "200px" }} />
				{/* {store.deck.map((card, i) => (
					<PlayingCard key={i} value={card.value} suit={card.suit} />
				))} */}
			</div>

			{/* <h1>Player Two</h1> */}
			<div className="d-flex deck">
				{store.playerTwoDeck.map((card, i) => (
					<PlayingCard key={i} value={card.value} suit={card.suit} />
				))}
			</div>

			{/* <div className="deck">{drawCard}</div> */}
		</div>
	);
};
