import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Palace: Where Luck Beats Skill</span>
			</Link>
			<div className="ml-auto">
				<Link to="/login">
					<button className="btn btn-primary">Login</button>
				</Link>
				&nbsp;
				<Link to="/register">
					<button className="btn btn-primary">Register</button>
				</Link>
			</div>
		</nav>
	);
};
