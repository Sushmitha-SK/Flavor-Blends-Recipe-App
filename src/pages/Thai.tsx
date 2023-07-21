import React, { useEffect, useState } from 'react';

import RecipeCard from '../components/RecipeCard';
import { getRecipesByCuisine } from '../api/recipeApi';

const Thai: React.FC = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchThaiRecipes = async () => {
            try {
                const indianRecipes = await getRecipesByCuisine('Thai');
                setRecipes(indianRecipes);
            } catch (error) {
                console.error(error);
            }
        };
        fetchThaiRecipes();
    }, []);

    return (
        <section className="recipes">
            <div className="container">
                <h2>Thai Recipes</h2>
            </div>
            <div className="content grid mtop">
                {recipes.map((recipe: any) => (
                    <RecipeCard id={recipe.id} image={recipe.image} name={recipe.title} />
                ))}
            </div>
        </section>
    );
};

export default Thai;
