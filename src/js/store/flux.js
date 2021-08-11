const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLoggedIn: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			updateLogin: () => {
				setStore({ isLoggedIn: !getStore().isLoggedIn });
			}
		}
	};
};

export default getState;
