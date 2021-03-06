import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import button from "./button";

const Card = ({ title, image, discription, button }) => {
	return (
		<div key={title} className="card" style={{ width: "25rem", marginRight: "10px" }}>
			<img className="card-img-top" src={image} alt="Card image cap" height="40%" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{discription}</p>
			</div>
			<div className="card-footer d-flex justify-content-center bg-white">
				<a className="btn btn-primary">
					<Link to="/rules">
						<button className="btn btn-primary">Click Here</button>
					</Link>
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	discription: PropTypes.string,
	button: PropTypes.object,
	goTo: PropTypes.string
};
export default Card;
