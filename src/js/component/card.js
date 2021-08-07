import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, image, discription, goTo, button }) => {
	return (
		<div key={title} className="card" style={{ width: "20rem", marginRight: "10px" }}>
			<img className="card-img-top" src={image} alt="Card image cap" height="40%" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{discription}</p>
			</div>
			<div className="card-footer d-flex justify-content-center bg-white">
				<a href={goTo} className="btn btn-primary">
					{button}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	discription: PropTypes.string,
	button: PropTypes.string,
	goTo: PropTypes.string
};
export default Card;
