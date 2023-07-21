import React, { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import Hero from '../components/Hero'
import breakfast from '../assets/breakfast.jpg'
import dessert from '../assets/dessert.jpg'
import sauce from '../assets/sauce.jpg'
import drink from '../assets/drink.jpg'
import salad from '../assets/salad.jpg'
import maincourse from '../assets/maincourse.jpg'
import { useNavigate } from 'react-router-dom'

const Home = ({ randomRecipes }: any) => {

    const navigate = useNavigate()

    const handleCategory = async (category: string) => {
        console.log(category)
        navigate(`/category/${category}`)
    }

    return (
        <>
            <Hero />
            <section className="recipes">
                <div className="container">

                    <h2>Popular Recipes</h2>
                </div>
                <div className="content grid mtop">
                    {randomRecipes.map((recipe: any) => (
                        <RecipeCard id={recipe.id} image={recipe.image} name={recipe.title} />
                    ))}
                </div>

                <div className="container" style={{ marginTop: '5%' }}>
                    <h2>Popular Meal Types</h2>
                </div>

                <div className="content grid mtop">
                    <div className="box" style={{ cursor: 'pointer' }} onClick={() => handleCategory('breakfast')}>
                        <img src={breakfast} alt='' />
                        <h3 style={{ fontWeight: 400 }}>Breakfast</h3>

                    </div>
                    <div className="box" style={{ cursor: 'pointer' }} onClick={() => handleCategory('breakfast')}>
                        <img src={dessert} alt='' />
                        <h3 style={{ fontWeight: 400 }}>Dessert</h3>

                    </div>
                    <div className="box" style={{ cursor: 'pointer' }} onClick={() => handleCategory('sauce')}>
                        <img src={sauce} alt='' />
                        <h3 style={{ fontWeight: 400 }}>Sauce</h3>

                    </div>
                    <div className="box" style={{ cursor: 'pointer' }} onClick={() => handleCategory('drink')}>
                        <img src={drink} alt='' />
                        <h3 style={{ fontWeight: 400 }}>Drink</h3>

                    </div>
                    <div className="box" style={{ cursor: 'pointer' }} onClick={() => handleCategory('salad')}>
                        <img src={salad} alt='' />
                        <h3 style={{ fontWeight: 400 }}>Salad</h3>
                    </div>
                    <div className="box" style={{ cursor: 'pointer' }} onClick={() => handleCategory('main course')}>
                        <img src={maincourse} alt='' />
                        <h3 style={{ fontWeight: 400 }}>Main Course</h3>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Home