export async function load() {
	const allCocktails = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
	const cocktails = await allCocktails.json();
	if (allCocktails.status !== 200) {
		return { status: allCocktails.status, body: allCocktails.statusText };
	}
	return {
		cocktails
	};
}

export const actions = {
	findCocktail: async ({ request }) => {
		const data = await request.formData();
		let searchResults = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.get('search')}`
		);
		searchResults = await searchResults.json();
		return {
			searchResults
		};
	}
};
