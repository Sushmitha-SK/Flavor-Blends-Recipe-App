import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = `https://api.spoonacular.com/recipes`;


//Function to get random recipes
export const getrandomRecipes = async () => {
    try {//
        const response = await axios.get(`${BASE_URL}/random?apiKey=${API_KEY}&number=9`, {
            params: {
                excludeIngredients: 'beef'
            }
        });
        return response.data.recipes;
    } catch (error) {
        throw new Error('Error fetching random recipes');
    }
};


// Function to fetch recipes based on the search term
export const searchRecipes = async (searchTerm: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/complexSearch`, {
            params: {
                apiKey: API_KEY,
                query: searchTerm,
                excludeIngredients: 'beef'
            },
        });
        return response.data.results;
    } catch (error) {
        throw new Error('Error fetching recipes');
    }
};

// Function to fetch a specific recipe by its ID
export const getRecipeById = async (recipeId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/${recipeId}/information`, {
            params: {
                apiKey: API_KEY,
                excludeIngredients: 'beef'
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching recipe details');
    }
};

// Function to fetch recipes based on cuisine
export const getRecipesByCuisine = async (cuisine: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/complexSearch`, {
            params: {
                apiKey: API_KEY,
                cuisine,
                excludeIngredients: 'beef'
            },
        });
        return response.data.results;
    } catch (error) {
        throw new Error('Error fetching recipes by cuisine');
    }
};

//Function to fetch recipes based on meal type
export const getRecipesByCategory = async (category: string) => {
    console.log('CAtegory', category)
    try {
        const response = await axios.get(`${BASE_URL}/complexSearch`, {
            params: {
                apiKey: API_KEY,
                query: '',
                excludeIngredients: 'beef',
                type: category,

            },
        });
        return response.data.results;
    } catch (error) {
        throw new Error('Error fetching category recipes');
    }
};


