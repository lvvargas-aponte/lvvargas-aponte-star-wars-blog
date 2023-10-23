const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://swapi.tech/api/',
			imgUrl: 'https://starwars-visualguide.com/assets/img',
			people: [],
			planets: [],
			vehicles: [],
			data: [],
			favorites: [],
			peopleImg: [],
			planetsImg: [],
			vehiclesImg: [],
			categories: ['people', 'planets', 'vehicles'],
			categoriesImg: ['chatacters', 'planets', 'vehicles']
		},
		actions: {
			loadData: async (category) => {
				const store = getStore();
				const localStorageData = localStorage.getItem(category);
				const localStorageTimestamp = localStorage.getItem(`${category}_timestamp`);
				const now = new Date();

				console.log('localstorage', localStorageData, localStorageTimestamp);

				if (localStorageData && localStorageTimestamp) {
					const data = JSON.parse(localStorageData);
					const lastFetched = new Date(localStorageTimestamp);

					if (now - lastFetched <= 60 * 60 * 1000) {
						setStore({ [category]: data, data: data.results })
						return;
					}
				}
				try {
					const resp = await fetch(`${store.url}/${category}`);
					if (!resp.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await resp.json();
					// console.log('here1', data);

					const dataWithDetails = [];

					for (const item of data.results) {
						const detailsResp = await fetch(item.url);
						if (!detailsResp.ok) {
							throw new Error('Network response was not ok');
						}
						const detailData = await detailsResp.json();
						detailData.result.properties.uid = item.uid;
						dataWithDetails.push(detailData.result.properties);
					}


					localStorage.setItem(category, JSON.stringify(dataWithDetails));
					localStorage.setItem(`${category}_timestamp`, now.toString());

					setStore({ [category]: dataWithDetails, data: data.results });


				} catch (error) {
					console.error(`There was a problem with the fetch operation: ${error}`);
				}
			},
			capitalizeFirstLetter: (string) => {
				return string.charAt(0).toUpperCase() + string.slice(1);
			},
			addFavorite: (category, index) => {
				const store = getStore();
				console.log('addFavorite', 'index', index, 'category', category);
				let item = null;
				if (category === 'people') {
					item = store.people[index];
				} else if (category === 'planets') {
					item = store.planets[index];
				} else if (category === 'vehicles') {
					item = store.vehicles[index];
				}
				//need to check if item is already inside store.favorites to avoid duplicates
				if (item && !store.favorites.some(favItem => favItem.id === item.id)) {
					setStore({ favorites: [...store.favorites, item] });
				}

				console.log('favorites', store.favorites);

			},
			removeFavorite: (index) => {
				const store = getStore();
				const removedFavorite = store.favorites.filter((_, itemIndex) => itemIndex != index)
				setStore({ favorites: removedFavorite });
			}
		}
	};
};

export default getState;
