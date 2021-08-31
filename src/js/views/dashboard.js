import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
// import { signOut } from "../component/signOut";
import PlayingCard from "../component/PlayingCard";
import cardStack from "../../img/card-deck-1.png";

import "../../styles/dashboard.scss";
import { useParams } from "react-router-dom";

export const Dashboard = () => {
	const { actions, store } = useContext(Context);
	const params = useParams();

	const game = store.games.find(g => g.id === params.game_id);

	/*
	useEffect(() => {
		return () => {
			// component UNmounted (stopped showing)
		}
	}, [])
	*/

	if (!game) return "Loading the game...";

	return (
		<div className="CardHandler">
			<h1>
				Player1: {game.player1} vs Player 2: {game.player2}
			</h1>
			<div className="d-flex deck">
				{store.playerOneDeck.map((card, i) => (
					<PlayingCard key={i} value={card.value} suit={card.suit} visible={game.player1 == store.user.uid} />
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
					<PlayingCard key={i} value={card.value} suit={card.suit} visible={game.player2 == store.user.uid} />
				))}
			</div>

			{/* <div className="deck">{drawCard}</div> */}
		</div>
	);
};
