import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserProfile } from "../component/userProfile.js";

import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";

import "../../styles/profile.scss";

export const Profile = () => {
	const { store } = useContext(Context);
	if (!store.user) return "loading...";
	return <UserProfile displayName={store.user.displayName} email={store.user.email} />;
};
