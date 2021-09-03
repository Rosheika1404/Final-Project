import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const STYLES = [
	"btn--primary--soild",
	"btn--warning--solid",
	"btn--danger--solid",
	"btn--success--solid",
	"btn--primary--outline",
	"btn--warning--outline",
	"btn--danger--outline",
	"btn--success--outline"
];

const SIZES = ["btn--medium", "btn--small"];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : STYLES[0];

	return (
		<button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children
};
