import { recipes } from './recipes.js';

export default function RecipeList() {
  const recipeItems = recipes.map(recipes =>
    <div>
    <h1>{recipes.name}</h1>
    <ul>
      <li>{recipes.ingredients.join(", ")}</li>
    </ul>
    </div>
  );
  return (
    recipeItems
  );
}
