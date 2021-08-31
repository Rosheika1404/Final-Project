import firebase from "firebase/app";
const API_URL = "https://deckofcardsapi.com/api/deck";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			games: [],
			isLoggedIn: false,
			deckId: [],
			drawCard: [],
			deck: [],
			playerOneDeck: [],
			playerTwoDeck: []
		},
		actions: {
			loadLoggedInUser: () => {
				const actions = getActions();

				firebase.auth().onAuthStateChanged(function(user) {
					if (user) {
						setStore({ isLoggedIn: true, user });
						actions.loadAllGames();
					} else {
						setStore({ isLoggedIn: false, user: null });
					}
				});
			},
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
				let suits = ["♥", "♦", "♠", "♣"];
				let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
				let deck = [];
				for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
					for (let ranksCounter = 0; ranksCounter < ranks.length; ranksCounter++) {
						//           console.log(suits[suitCounter] + ranks[ranksCounter])
						// (suit === "♥" || suit === "♦" ? style={{color:"red"}} : "")
						let card = { suit: suits[suitCounter], value: ranks[ranksCounter], flipped: true };

						deck.push(card);
					}
				}

				let shuffledDeck = actions.shuffleDeck(deck);
				setStore({
					playerOneDeck: shuffledDeck.splice(0, 7), //take first 4
					playerTwoDeck: shuffledDeck.splice(0, 7), //now we take another other 4
					deck: shuffledDeck
				});
			},
			// Use getActions to call a function within a fuction
			login: (email, password) => {
				return firebase
					.auth()
					.signInWithEmailAndPassword(email, password)
					.then(res => {
						console.log("logged in res", res.user.uid);
						setStore({ isLoggedIn: !getStore().isLoggedIn, user: res.user });
					});
			},

			loadAllGames: () => {
				let games = [];
				const firestore = firebase.firestore();
				console.log("firestore", firestore.collection);
				let query = firestore.collection("games");

				query.get().then(querySnapshot => {
					querySnapshot.forEach(doc => {
						games.push({ id: doc.id, cursor: doc, ...doc.data() });
					});
					console.log("This are all the games", games);
					setStore({ games });
				});
			},

			getMyGames() {
				const store = getStore();
				const myGames = store.games.filter(g => g.player1 === store.user.uid || g.player2 === store.user.uid);
				return myGames;
			}

			// loadShuffledCards() {
			// 	fetch(API_URL + "/new/shuffle/")
			// 		.then(response => response.json())
			// 		.then(result => {
			// 			console.log(result),
			// 				setStore({ deckId: result.deck_id }),
			// 				console.log("card-id", result.deck_id);
			// 		})
			// 		.catch(e => console.error(e));
			// },
			// drawCard() {
			// 	fetch(API_URL + getStore().deckId + "/draw/?count=2", {
			// 		method: "POST",
			// 		headers: {
			// 			"Content-type": "application/json"
			// 		}
			// 		// body: "raw",
			// 		// redirect: "follow"
			// 	})
			// 		.then(res => res.json())
			// 		.then(response => {
			// 			console.log("response", response);
			// 			setStore({ drawCard: response });
			// 		});
			// }
		}
	};
};
export default getState;
