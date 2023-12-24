<script>
    export let data;
    
    // `data` contains the `cocktails` object returned by the `load` function
    let cocktails = data.cocktails;
</script>
    
    <main>
      <h1>Cocktails</h1>
      {#if cocktails}
        <ul>
          {#each cocktails.drinks as cocktail}
            <li><a href="/cocktails/{cocktail.idDrink}">{cocktail.strDrink}</a></li>
          {/each}
        </ul>
      {:else}
        <p>No cocktails found.</p>
      {/if}
    </main>