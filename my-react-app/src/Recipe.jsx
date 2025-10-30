function Recipe({recipe}) {
  if (!recipe) {
    return <div>No recipe data available.</div>;
  }
  return (
    <div className="recipe">
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {(recipe.ingredients || []).map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {(recipe.instructions || []).map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      {recipe.optionalGlaze && (
        <>
          <h3>{recipe.optionalGlaze.name} Ingredients:</h3>
          <ul>
            {(recipe.optionalGlaze.ingredients || []).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>{recipe.optionalGlaze.name} Instructions:</h3>
          <ol>
            {(recipe.optionalGlaze.instructions || []).map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </>
      )}

    </div>

  )
}

export default Recipe;