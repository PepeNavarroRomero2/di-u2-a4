
const Recipe = ({ id, name, ingredients }) => (
    <div>
        <h2>{name}</h2>
        <ul>
            {ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
            ))}
        </ul>
    </div>
);

export default Recipe;
