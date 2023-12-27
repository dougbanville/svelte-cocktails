<script>
    export let data;
    let cocktail = data.cocktail;
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
        if (cocktail[`strIngredient${i}`]) {
            ingredients.push(cocktail[`strIngredient${i}`]);
        }
    }
</script>
<main>
    <h1>{cocktail.strDrink}</h1>
    <p>{cocktail.strInstructions}</p>
    <ul>
        {#each ingredients as ingredient}
        <li>{ingredient}</li>
        {/each}
    </ul>
    <img src="{cocktail.strDrinkThumb}" alt="" srcset="">
</main>