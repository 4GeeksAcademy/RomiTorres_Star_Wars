const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorites: (name) => {
				setStore({ favorites: [...getStore().favorites, name] })
			},

			removeFavorite: (id) => {
				setStore({
					favorites: getStore().favorites.filter((item, i) => {
						return i != id;
					})
				})
			},

			getPeople: async () => {
				if (localStorage.getItem('peopleLocal') !== null) {
				} else {
					const response = await fetch('https://www.swapi.tech/api/people/');
					if (response.ok) {
						const data = await response.json();
						localStorage.setItem('peopleLocal', JSON.stringify(data.results));
					} else {
						console.log('error:', response.status, response.statusText)
					}
				}
			},
			getPlanets: async () => {
				if (localStorage.getItem('planetsLocal') !== null) {
				} else {
					const response = await fetch('https://www.swapi.tech/api/planets/');
					if (response.ok) {
						const data = await response.json();
						localStorage.setItem('planetsLocal', JSON.stringify(data.results));
					} else {
						console.log('error:', response.status, response.statusText)
					}
				}
			},
			getNaves: async () => {
				if (localStorage.getItem('navesLocal') !== null) {
				} else {
					const response = await fetch('https://www.swapi.tech/api/starships/');
					if (response.ok) {
						const data = await response.json();
						localStorage.setItem('navesLocal', JSON.stringify(data.results));
					} else {
						console.log('error:', response.status, response.statusText)
					}
				}
			},
			getSpecies: async () => {
				if (localStorage.getItem('speciesLocal') !== null) {
				} else {
					const response = await fetch('https://www.swapi.tech/api/species/');
					if (response.ok) {
						const data = await response.json();
						localStorage.setItem('speciesLocal', JSON.stringify(data.results));
					} else {
						console.log('error:', response.status, response.statusText)
					}
				}
			}
		},
		
	};
};

export default getState;
