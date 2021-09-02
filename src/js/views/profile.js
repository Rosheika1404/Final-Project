import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { userProfile } from "../component/userProfile.js";

import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";


export const Profile = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const {  store } = useContext(Context);
	const history = useHistory();

	return (
		<div className="container">
			<div>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts &&
							store.contacts.map((e, index) => {
								return <userProfile key={index} e={e} onDelete={() => setState({ showModal: true })} />;
							})}
					</ul>
				</div>
			</div>
		</div>
	);
};