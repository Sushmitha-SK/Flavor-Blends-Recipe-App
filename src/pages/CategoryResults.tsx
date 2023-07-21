import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import RecipeCard from '../components/RecipeCard';
import { getRecipesByCategory, searchRecipes } from '../api/recipeApi';
import { ThreeCircles } from 'react-loader-spinner';

const CategoryResults = () => {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state

    const { type }: any = useParams<{ type: string }>();

    useEffect(() => {
        const fetchCategoryRecipes = async () => {
            try {
                const data = await getRecipesByCategory(type)
                setSearchedRecipes(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
        fetchCategoryRecipes();
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
        <>
            <section className="recipes">
                <div className="container">
                    <h2>Search Results for "{type}"</h2>
                </div>
                <div className="content grid mtop">
                    {searchedRecipes.map((recipe: any, i: any) => (
                        <div key={i}>
                            <RecipeCard id={recipe.id} image={recipe.image} name={recipe.title} />
                        </div>

                    ))}
                </div>
            </section>
        </>
    )
}

export default CategoryResults