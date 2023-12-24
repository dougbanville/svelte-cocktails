export async function load({ params }) {
	const getCocktail = await fetch(
		`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.cocktail}`
	);
	let cocktail = await getCocktail.json();
	cocktail = cocktail.drinks[0];
	return {
		cocktail
	};
}
