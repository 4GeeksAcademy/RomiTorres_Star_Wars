const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorites: (name) => {
				setStore({favorites: [...getStore().favorites.name]})
			},

			removeFavorite: (id) => {
				setStore({favorites:getStore().favorites.filter((item, i) => {
					return i != id;
				})})
			},
			
			getPeople: async () => {
				if(localStorage.getItem('peopleLocal') === null) {
					// setPerson(JSON.parse(localStorage.getItem('peopleLocal')))
				} else {
					const response = await fetch('https://www.swapi.tech/api/people/');
					if(response.ok) {
						const data = await response.json();
						// setPerson(data);
						localStorage.setItem('peopleLocal', JSON.stringify(data.results));
						// Aqui podria iterar el array data y hacer los fetch de todas las caracteristicas de los people, y guardarlos en el localStorage, array data.results
						// detalles = []
						// data.results.map((item, id) => {
							//const url = item.url
							// hacer fetch de cada url (el map ira haciendo 1 a 1 hasta completar los 10)
							// agregar el objeto al array detalles con ... (tal vez necesite json.stringify)
						//})
						// grabar detalles en el localStorage
					} else {
						console.log('error:', response.status, response.statusText)
					}
				}
			},
			getPlanets: async () => {
				if(localStorage.getItem('planetsLocal') === null) {
				} else {
					const response = await fetch('https://www.swapi.tech/api/planets/');
					if(response.ok) {
						const data = await response.json();
						localStorage.setItem('planetsLocal', JSON.stringify(data.results));
					} else {
						console.log('error:', response.status, response.statusText)
					}
				}
			}
		}
	};
};

export default getState;
