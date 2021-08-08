import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { signIn } from "../utilities/signIn";
import { Context } from "../store/appContext";

import "../../styles/login.scss";

export const Register = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSignInClicked = async (email, password) => {
		try {
			await signIn(email, password);
			history.push("/dashboard");
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
					<h1>Palace</h1>
					<p>Register to play.</p>
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
							<div className="form-group">
								{/* <label>Password</label> */}
								<input
									type="password-confirm"
									className="form-control"
									placeholder="Password Confirmation"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>

							<a className="forgot text-muted" href="#">
								Already have an account? Log In
							</a>
							<br />
							<br />

							<input
								type="submit"
								className="btn btn-black"
								value="Sign Up"
								onClick={e => {
									onSignInClicked(email, password);
									e.preventDefault();
								}}
							/>

							
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
