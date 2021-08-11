import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Palace: Where Luck Beats Skill</span>
			</Link>
			<div className="ml-auto">
				{!store.isLoggedIn ? (
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
				) : (
					<Link to="/login">
						<button
							className="btn btn-primary"
							onClick={() => {
								signOut();
								actions.updateLogin();
							}}>
							Logout
						</button>
					</Link>
				)}
				&nbsp;
				<Link to="/register">
					<button className="btn btn-primary">Register</button>
				</Link>
			</div>
		</nav>
	);
};
