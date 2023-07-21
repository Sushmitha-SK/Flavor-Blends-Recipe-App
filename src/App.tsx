import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indian from './pages/Indian';
import Italian from './pages/Italian';
import American from './pages/American';
import Thai from './pages/Thai';
import SearchResults from './pages/SearchResults';
import Navbar from './components/Navbar';
import { getrandomRecipes } from './api/recipeApi';
import Home from './pages/Home';
import RecipeDetail from './components/RecipeDetail';
import Footer from './components/Footer';
import CategoryResults from './pages/CategoryResults';

function App() {
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      try {
        const recipes = await getrandomRecipes();
        console.log('recipes random', recipes)
        setRandomRecipes(recipes);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRandomRecipes()

  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home randomRecipes={randomRecipes} />} />
          <Route path="/indian" element={<Indian />} />
          <Route path="/italian" element={<Italian />} />
          <Route path="/american" element={<American />} />
          <Route path="/thai" element={<Thai />} />
          <Route path="/search/:term" element={<SearchResults />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/category/:type" element={<CategoryResults />} />

        </Routes>

        <Footer />

      </BrowserRouter>

    </>
  );
}

export default App;
