import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { getRecipesByCuisine } from '../api/recipeApi';
import { ThreeCircles } from 'react-loader-spinner';


const Indian: React.FC = () => {
    const [recipes, setRecipes] = useState([]);

    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchIndianRecipes = async () => {
            try {
                const indianRecipes = await getRecipesByCuisine('Indian');
                setRecipes(indianRecipes);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
        fetchIndianRecipes();
    }, []);

    // Render the loader if loading state is true
    if (isLoading) {
        return (
            <div className="loader-container">
                <ThreeCircles
                    height="80"
                    width="80"
                    color="#27ae60"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />

            </div>
        );
    }


    return (
        <section className="recipes">
            <div className="container">
                <h2>Indian Recipes</h2>
            </div>
            <div className="content grid mtop">
                {recipes.map((recipe: any) => (
                    <RecipeCard id={recipe.id} image={recipe.image} name={recipe.title} />
                ))}
            </div>
        </section>
    );
};

export default Indian;
