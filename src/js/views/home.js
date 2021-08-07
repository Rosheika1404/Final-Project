import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../component/card";
import { array } from "../component/cardconst";

import "../../styles/home.scss";
// import { signIn } from "../component/signIn.js";

export const Home = () => {
	return (
		<div>
			<div className="jumbotron">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space content out within the larger container.
				</p>
				<p className="lead">
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Learn more
					</a>
				</p>
			</div>
			<div className="text-center mt-5 mb-5 row justify-content-center">
				{array.map(array => (
					<Card
						key={array.title}
						title={array.title}
						image={array.image}
						discription={array.discription}
						goTo={array.goto}
						button={"Find Out More!"}
					/>
				))}
			</div>
		</div>
	);
};
