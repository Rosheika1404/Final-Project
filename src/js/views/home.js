import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../../styles/home.scss";
// import { signIn } from "../component/signIn.js";

export const Home = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSignInClicked = async (email, password) => {
		try {
			await signIn(email, password);
			history.push("/Contacts");
			console.log("success");
		} catch (e) {
			alert(e.message);
		}
	};

	return (
		<span className="card">
			<div className="sidenav">
				<div className="login-main-text">
					<h2>Palace Card Game</h2>
					<p>Login or register from here to access.</p>
				</div>
			</div>
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
		</span>
	);
};
