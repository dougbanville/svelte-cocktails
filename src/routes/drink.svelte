<script>
/**
 * @typedef {Object} CocktailObject
 * @property {string} idDrink - The ID of the drink.
 * @property {string} strDrink - The name of the drink.
 * @property {?string} strDrinkAlternate - An alternate name for the drink.
 * @property {string} strTags - Tags associated with the drink.
 * @property {?string} strVideo - URL to a video related to the drink.
 * @property {string} strCategory - Category of the drink.
 * @property {string} strIBA - IBA (International Bartenders Association) classification.
 * @property {string} strAlcoholic - Alcoholic or non-alcoholic.
 * @property {string} strGlass - Type of glass used for the drink.
 * @property {string} strInstructions - Instructions for preparing the drink.
 * @property {?string} strInstructionsES - Instructions in Spanish.
 * @property {?string} strInstructionsDE - Instructions in German.
 * @property {?string} strInstructionsFR - Instructions in French.
 * @property {?string} strInstructionsIT - Instructions in Italian.
 * @property {?string} strInstructionsZH-HANS - Instructions in simplified Chinese.
 * @property {?string} strInstructionsZH-HANT - Instructions in traditional Chinese.
 * @property {string} strDrinkThumb - URL to an image of the drink.
 * @property {string} strIngredient1 - The first ingredient.
 * @property {string} strIngredient2 - The second ingredient.
 * @property {string} strIngredient3 - The third ingredient.
 * @property {?string} strIngredient4 - The fourth ingredient.
 * @property {?string} strIngredient5 - The fifth ingredient.
 * @property {?string} strIngredient6 - The sixth ingredient.
 * @property {?string} strIngredient7 - The seventh ingredient.
 * @property {?string} strIngredient8 - The eighth ingredient.
 * @property {?string} strIngredient9 - The ninth ingredient.
 * @property {?string} strIngredient10 - The tenth ingredient.
 * @property {?string} strIngredient11 - The eleventh ingredient.
 * @property {?string} strIngredient12 - The twelfth ingredient.
 * @property {?string} strIngredient13 - The thirteenth ingredient.
 * @property {?string} strIngredient14 - The fourteenth ingredient.
 * @property {?string} strIngredient15 - The fifteenth ingredient.
 * @property {?string} strMeasure1 - Measurement for the first ingredient.
 * @property {?string} strMeasure2 - Measurement for the second ingredient.
 * @property {?string} strMeasure3 - Measurement for the third ingredient.
 * @property {?string} strMeasure4 - Measurement for the fourth ingredient.
 * @property {?string} strMeasure5 - Measurement for the fifth ingredient.
 * @property {?string} strMeasure6 - Measurement for the sixth ingredient.
 * @property {?string} strMeasure7 - Measurement for the seventh ingredient.
 * @property {?string} strMeasure8 - Measurement for the eighth ingredient.
 * @property {?string} strMeasure9 - Measurement for the ninth ingredient.
 * @property {?string} strMeasure10 - Measurement for the tenth ingredient.
 * @property {?string} strMeasure11 - Measurement for the eleventh ingredient.
 * @property {?string} strMeasure12 - Measurement for the twelfth ingredient.
 * @property {?string} strMeasure13 - Measurement for the thirteenth ingredient.
 * @property {?string} strMeasure14 - Measurement for the fourteenth ingredient.
 * @property {?string} strMeasure15 - Measurement for the fifteenth ingredient.
 * @property {string} strImageSource - URL to the source of the drink image.
 * @property {string} strImageAttribution - Attribution for the drink image.
 * @property {string} strCreativeCommonsConfirmed - Confirmation of Creative Commons license.
 * @property {string} dateModified - Date when the information was last modified.
 */

/**
 * @type {CocktailObject}
 */


export let cocktail;
</script>

<style>
    img {
        max-height: 150px;
    }
</style>

<main>
    <a href="/cocktails/{cocktail.idDrink}">
    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}>
    <h1>{cocktail.strDrink}</h1>
    </a>
</main>