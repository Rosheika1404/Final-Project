import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserProfile } from "../component/userProfile.js";

import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";

import "../../styles/profile.scss";


export const Profile = () => {

	return (
		<UserProfile />
	);
};