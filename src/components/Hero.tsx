import React from 'react'
import heroimage from '../assets/background.png'

const Hero = () => {
    return (
        <>
            <section className="hero" id="hero">
                <div className="content">
                    <span>Welcome Foodies</span>
                    <h3>Different spices for the different tastes 😋</h3>
                    <p>A vast collection of the tastiest foods. These dishes contain the ultimate comfort food which blends your flavor.</p>
                </div>
                <div className="image">
                    <img src={heroimage} alt="" className="hero-img" />
                </div>
            </section>
        </>
    )
}

export default Hero