import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../../styles/home.scss";
// import { signIn } from "../component/signIn.js";

export const Home = () => {
	return (
		<div className="jumbotron container">
			<h1 className="display-4">Palace</h1>
			<p className="lead">Where Luck Beats Skill</p>
			<hr className="my-4" />

			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
};
