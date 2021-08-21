const API_URL = "https://deckofcardsapi.com/api/deck";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLoggedIn: false,
			deckId: [],
			drawCard: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			updateLogin: () => {
				setStore({ isLoggedIn: !getStore().isLoggedIn });
			},
			loadShuffledCards() {
				fetch(API_URL + "/new/shuffle/")
					.then(response => response.json())
					.then(result => {
						console.log(result),
							setStore({ deckId: result.deck_id }),
							console.log("card-id", result.deck_id);
					})
					.catch(e => console.error(e));
			},
			drawCard() {
				fetch(API_URL + getStore().deckId + "/draw/?count=2", {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					}
					// body: "raw",
					// redirect: "follow"
				})
					.then(res => res.json())
					.then(response => {
						console.log("response", response);
						setStore({ drawCard: response });
					});
			}
		}
	};
};
export default getState;
