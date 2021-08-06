import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="main box">
			<div className="col-md-6 col-sm-12">
				<div className="login-form">
					<form>
						<div className="form-group">
							{/* <label>Email</label> */}
							<input
								type="text"
								className="form-control"
								placeholder="Email"
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							{/* <label>Password</label> */}
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								onChange={e => setPassword(e.target.value)}
							/>
						</div>

						<a className="forgot text-muted" href="#">
							Forgot password?
						</a>
						<br />
						<br />

						<button
							type="submit"
							className="btn btn-black"
							onClick={e => {
								onSignInClicked(email, password);
								e.preventDefault();
							}}>
							Login
						</button>
						<button type="submit" className="btn btn-secondary">
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
		// <div className="container">
		// 	<ul className="list-group">
		// 		{store.demo.map((item, index) => {
		// 			return (
		// 				<li
		// 					key={index}
		// 					className="list-group-item d-flex justify-content-between"
		// 					style={{ background: item.background }}>
		// 					<Link to={"/single/" + index}>
		// 						<span>Link to: {item.title}</span>
		// 					</Link>
		// 					{// Conditional render example
		// 					// Check to see if the background is orange, if so, display the message
		// 					item.background === "orange" ? (
		// 						<p style={{ color: item.initial }}>
		// 							Check store/flux.js scroll to the actions to see the code
		// 						</p>
		// 					) : null}
		// 					<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
		// 						Change Color
		// 					</button>
		// 				</li>
		// 			);
		// 		})}
		// 	</ul>
		// 	<br />
		// 	<Link to="/">
		// 		<button className="btn btn-primary">Back home</button>
		// 	</Link>
		// </div>
	);
};

// testing login scrpt
<div className="main box">
	<div className="col-md-6 col-sm-12">
		<div className="login-form">
			<form>
				<div className="form-group">
					{/* <label>Email</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Email"
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					{/* <label>Password</label> */}
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						onChange={e => setPassword(e.target.value)}
					/>
				</div>

				<a className="forgot text-muted" href="#">
					Forgot password?
				</a>
				<br />
				<br />

				<button
					type="submit"
					className="btn btn-black"
					onClick={e => {
						onSignInClicked(email, password);
						e.preventDefault();
					}}>
					Login
				</button>
				<button type="submit" className="btn btn-secondary">
					Register
				</button>
			</form>
		</div>
	</div>
</div>;
