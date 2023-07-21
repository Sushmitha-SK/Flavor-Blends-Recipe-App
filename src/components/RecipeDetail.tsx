import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../api/recipeApi';
import { ThreeCircles } from 'react-loader-spinner';

const RecipeDetail: React.FC = () => {
    const { id }: any = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<any>(null);

    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchRecipeDetail = async () => {
            try {
                const recipeDetail = await getRecipeById(parseInt(id));
                setRecipe(recipeDetail);
                setIsLoading(false)
            } catch (error) {
                console.error(error);
                setIsLoading(false)
            }
        };
        fetchRecipeDetail();
    }, [id]);

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


    // Parse the HTML instructions into an array of steps
    const parseInstructions = () => {
        if (!recipe || !recipe.instructions) return []; // Handle empty or missing instructions

        const parser = new DOMParser();
        const doc = parser.parseFromString(recipe.instructions, 'text/html');
        const instructionElements = doc.querySelectorAll('li');
        const steps = Array.from(instructionElements).map((element) => element.innerText);
        return steps;
    };

    const steps = parseInstructions();

    return (
        <section className="recipes">
            <div className="container">
                <img src={recipe.image} alt={recipe.title} style={{ height: '300px' }} />
                <h2>{recipe.title}</h2>

                <div style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2%' }}>
                    {recipe.diets.map((taglist: any, i: any) => (
                        <span key={i} className="tag">{taglist}</span>
                    ))}
                </div>
                <div style={{ textAlign: 'left', display: 'flex', flexWrap: 'wrap', justifyContent: 'left', marginTop: '2%' }}>
                    <p style={{ margin: '1%', fontWeight: 500 }}>Preparation Minutes:</p><p style={{ marginTop: '1%' }}>{recipe.readyInMinutes} Min</p>
                    <p style={{ margin: '1%', fontWeight: 500 }}>Servings:</p><p style={{ marginTop: '1%' }}>{recipe.servings}</p>
                </div>

                <div style={{ margin: '2%' }}>
                    <div style={{ textAlign: 'left' }}>
                        <h4>Ingredients</h4>
                        <ul style={{ margin: '2%' }}>
                            {recipe.extendedIngredients.map((ingredient: any) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ textAlign: 'left', marginTop: '2%' }}>
                        <h4>Instructions</h4>
                        {steps.length > 0 ? (
                            <ol style={{ margin: '2%', listStyleType: 'decimal' }}>
                                {steps.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        ) : (
                            <p>No instructions available for this recipe.</p>
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default RecipeDetail;
