import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ id, image, name }: any) => {
    return (
        <>
            <div className="box">
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <Link to={`/recipe/${id}`}>
                    <button className='button-readmore'>Read More <i className="fas fa-long-arrow-alt-right" /></button>
                </Link>
            </div>
        </>
    )
}

export default RecipeCard