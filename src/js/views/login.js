import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { signIn } from "../utilities/signIn";
import { Context } from "../store/appContext";

import "../../styles/login.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [validation, setValidation] = useState(false);
	const [validationEmail, setValidationEmail] = useState(false);
	const [validationPassword, setValidationPassword] = useState(false);

	const onSignInClicked = async (email, password) => {
		try {
			await signIn(email, password);
			actions.updateLogin();
			history.push("/");
			console.log("success");
		} catch (e) {
			alert(e.message);
		}
	};
	const checkInput = input => {
		return input === null || !input;
	};
	useEffect(
		() => {
			if (!validationEmail && !validationPassword && validation) {
				onSignInClicked(email, password);
				history.push("/");
			} else {
				setValidation(false);
			}
		},
		[validation]
	);

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
					<p>Login or register to play.</p>
				</div>
				<div className="col-md-6 col-sm-12">
					<div className="login-form">
						<form>
							<div className="form-group">
								{/* <label>Email</label> */}
								<input
									style={
										validationEmail
											? {
													border: "1px solid red"
											  }
											: {}
									}
									type="text"
									className="form-control"
									placeholder="Email"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-group">
								{/* <label>Password</label> */}
								<input
									style={
										validationPassword
											? {
													border: "1px solid red"
											  }
											: {}
									}
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
							<a className="forgot text-muted" href="#">
								Need an account? Sign Up
							</a>

							<br />
							<br />

							<input
								type="submit"
								className="btn btn-black"
								value="Login"
								onClick={e => {
									setValidationEmail(checkInput(email));
									setValidationPassword(checkInput(password));
									setValidation(true);
									e.preventDefault();
								}}
							/>

							{/* <input type="submit" className="btn btn-secondary" value="Register" /> */}
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
