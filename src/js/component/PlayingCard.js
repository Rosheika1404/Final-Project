import React from "react";
import "../../styles/playing-card.scss";
import PropTypes from "prop-types";

const PlayingCard = props => {
	const { value, suit } = props;

	return (
		<div className="playing-card">
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
	suit: PropTypes.string
};
export default PlayingCard;
