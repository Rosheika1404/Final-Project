import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const UserProfile = props => {


	const { store } = useContext(Context);
	console.log("storee", store.contacts);

	return (
		<>
			<div className="profile-card-4 text-center">
				<img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" className="img img-responsive" />
				<div className="profile-content">
					<div className="profile-name">props.e.displayName
						<p>props.e.email</p>
					</div>
					<div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
					{/* <div className="row">
						<div className="col-xs-4">
							<div className="profile-overview">
								<p>TWEETS</p>
								<h4>1300</h4></div>
						</div>
						<div className="col-xs-4">
							<div className="profile-overview">
								<p>FOLLOWERS</p>
								<h4>250</h4></div>
						</div>
						<div className="col-xs-4">
							<div className="profile-overview">
								<p>FOLLOWING</p>
								<h4>168</h4></div>
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
UserProfile.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object,
	e: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
