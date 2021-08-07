import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSignInClicked = async (email, password) => {
		try {
			await signIn(email, password);
			history.push("/Home");
			console.log("success");
		} catch (e) {
			alert(e.message);
		}
	};

	return (
		<span className="card">
			<div
				className="main box"
				style={{
					position: "absolute",
					left: "50%",
					top: "50%"
					// transform: "translate(-50%, -50%)"
				}}>
				<div className="login-main-text">
					<h1>Palace Card Game</h1>
					<p>Login or register from here to access.</p>
				</div>
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

							<input
								type="submit"
								className="btn btn-black"
								value="Login"
								onClick={e => {
									onSignInClicked(email, password);
									e.preventDefault();
								}}
							/>

							<input type="submit" className="btn btn-secondary" value="Register" />
						</form>
					</div>
				</div>
			</div>
			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</span>
	);
};
