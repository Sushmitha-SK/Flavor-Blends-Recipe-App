import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { searchRecipes } from '../api/recipeApi';
import { ThreeCircles } from 'react-loader-spinner';

const SearchResults: React.FC = () => {
    const { term }: any = useParams<{ term: string }>();
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchSearchedRecipes = async () => {
            try {
                const recipes = await searchRecipes(term);
                setSearchedRecipes(recipes);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
        fetchSearchedRecipes();
    }, [term]);

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
                <h2>Search Results for "{term}"</h2>
            </div>
            <div className="content grid mtop">
                {searchedRecipes.map((recipe: any) => (
                    <RecipeCard id={recipe.id} image={recipe.image} name={recipe.title} />
                ))}
            </div>
        </section>
    );
};

export default SearchResults;
