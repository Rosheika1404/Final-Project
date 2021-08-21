import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
// import { signOut } from "../component/signOut";
import { useHistory } from "react-router-dom";
import { signOut } from "../utilities/signOut";

export const Dashboard = () => {
	const { actions } = useContext(Context);
	const [drawCard, setDrawCard] = useState("");

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
			<div className="deck">{drawCard}</div>
		</div>
	);
};
