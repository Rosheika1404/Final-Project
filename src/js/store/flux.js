const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLoggedIn: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			updateLogin: () => {
				setStore({ isLoggedIn: !getStore().isLoggedIn });
			},
			loadShuffledCards() {
				fetch(API_URL)
					.then(response => response.json())
					.then(result => {
						console.log(result);
					})
					.catch(e => console.error(e));
			},
			drawCard() {}
		}
	};
};
export default getState;
