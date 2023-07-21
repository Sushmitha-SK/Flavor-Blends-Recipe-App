import React, { useEffect, useState } from 'react';

import RecipeCard from '../components/RecipeCard';
import { getRecipesByCuisine } from '../api/recipeApi';

const American: React.FC = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchAmericanRecipes = async () => {
            try {
                const indianRecipes = await getRecipesByCuisine('American');
                setRecipes(indianRecipes);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAmericanRecipes();
    }, []);

    return (
        <section className="recipes">
            <div className="container">
                <h2>American Recipes</h2>
            </div>
            <div className="content grid mtop">
                {recipes.map((recipe: any) => (
                    <RecipeCard id={recipe.id} image={recipe.image} name={recipe.title} />
                ))}
            </div>
        </section>
    );
};

export default American;
