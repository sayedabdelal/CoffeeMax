import React from 'react'
import ImgAbout from '../img/about.jpg'

function AboutPage() {
  return (
    <section className="about" id="about">
    <div className="about-img">
      <img src={ImgAbout} alt="" />
    </div>
    <div className="about-text">
      <h2>Our History</h2>
      <p>
        Rooted in Tradition, Crafted with Passion 🌟☕ – At Wicky's Coffee Shop,
        our journey began with a dream to share the art of coffee. From humble
        beginnings to becoming a hub for coffee lovers, we take pride in blending
        rich history with modern flavors to create unforgettable experiences.
      </p>
      <p>
        Brewing Connections, One Cup at a Time ☕✨ - Discover the story behind
        Wicky's Coffee Shop, where passion meets perfection in every sip.
      </p>
      <p>
        From Humble Beginnings to a Coffee Haven ☕📖 – Wicky's Coffee Shop
        started as a small dream and grew into a cherished community hub. Our rich
        history is brewed into every cup, blending tradition and innovation to
        bring people together over the love of coffee.
      </p>
      <a href="#" className="btn">
        Learn more...
      </a>
    </div>
  </section>
  )
}

export default AboutPage