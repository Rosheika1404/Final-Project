const API_URL = "https://deckofcardsapi.com/api/deck";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLoggedIn: false,
			deckId: [],
			drawCard: [],
			deck: [],
			playerOneDeck: [],
			playerTwoDeck: []
		},
		actions: {
			shuffleDeck: deck => {
				for (let i = 0; i < 52; i++) {
					let tempCard = deck[i];
					let randomIndex = Math.floor(Math.random() * 52);
					deck[i] = deck[randomIndex];
					deck[randomIndex] = tempCard;
				}
				return deck;
			},
			newGame: () => {
				const actions = getActions();
				//s=suits v=value
				let suits = [":spades:", ":clubs:", ":hearts:", ":diamonds:"];
				let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
				let deck = [];
				for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
					for (let ranksCounter = 0; ranksCounter < ranks.length; ranksCounter++) {
						//           console.log(suits[suitCounter] + ranks[ranksCounter])
						let card = { suit: suits[suitCounter], value: ranks[ranksCounter] };
						deck.push(card);
					}
				}

				let shuffledDeck = actions.shuffleDeck(deck);
				setStore({
					playerOneDeck: shuffledDeck.splice(0, 4), //take first 4
					playerTwoDeck: shuffledDeck.splice(0, 4), //now we take another other 4
					deck: shuffledDeck
				});
			},
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
