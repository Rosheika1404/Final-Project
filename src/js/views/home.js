import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import Card from "../component/card";
import button from "../component/button";
import { array } from "../component/cardconst";
import deckHand from "../../img/pexels-kendall.jpg";
import { Link } from "react-router-dom";

import "../../styles/home.scss";
// import { signIn } from "../component/signIn.js";

export const Home = () => {
	const { store } = useContext(Context);
	return (
		<div>
			<div
				className="jumbotron container-fluid bg-dark"
				style={{
					backgroundImage: `url(${deckHand})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					width: "90vw",
					height: "60vh"
				}}>
				<h1 className="display-4 justify-content-center text-center">Go Fish</h1>
				<p className="lead justify-content-center text-center ">Where Luck Beats Skill</p>
			</div>

			<h2>Choose a game</h2>
			<ul>
				{store.games.map(g => (
					<Link key={g.uid} to={`/game/${g.id}`}>
						<li className="btn">
							{g.player1} against {g.player2}
						</li>
					</Link>
				))}
			</ul>

			<div className="text-center mt-5 mb-5 row justify-content-center">
				{array.map((array, i) => {
					if (i !== 1) {
						return (
							<Card
								key={array.title}
								title={array.title}
								image={array.image}
								discription={array.discription}
								button={array.button}
							/>
						);
					} else {
						return store.isLoggedIn ? (
							<Card
								key={array.title}
								title={array.title}
								image={array.image}
								discription={array.discription}
								button={array.button}
							/>
						) : (
							""
						);
					}
				})}
			</div>
		</div>
	);
};
