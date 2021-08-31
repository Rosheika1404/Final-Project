import React, { useState } from "react";
import "../../styles/playing-card.scss";
import cardStack from "../../img/card-deck-1.png";
import PropTypes from "prop-types";

const color = {
	"♥": "text-danger",
	"♦": "text-danger",
	"♠": "",
	"♣": ""
};
const PlayingCard = props => {
	const { value, suit, visible } = props;

	if (!visible) return <img src={cardStack} style={{ height: "220px", width: "200px" }} />;

	return (
		<div className={"playing-card " + color[suit]}>
			<div className="top">
				<div>{value}</div>
				<div>{suit}</div>
			</div>

			<div className="middle">
				<div>{value}</div>
			</div>

			<div className="bottom">
				<div>{value}</div>
				<div>{suit}</div>
			</div>
		</div>
	);
};
PlayingCard.propTypes = {
	value: PropTypes.string,
	suit: PropTypes.string,
	visible: PropTypes.bool
};
export default PlayingCard;
