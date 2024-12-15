import React from 'react'
import Imge from '../img/main.png'


function HomePage() {
  return (
    <>
    <section className="home" id="home">
    <div className="home-text">
      <h1>
        Start your day <br /> with coffee
      </h1>
      <p>
        At Wicky's Coffee Shop, every cup tells a story—crafted with passion,
        brewed to perfection, and served with warmth. Whether you're here for the
        aroma of freshly ground beans, a cozy corner to unwind, or a friendly
        smile to brighten your day, we’re dedicated to creating moments that
        matter. Because coffee isn’t just a drink—it’s an experience worth
        savoring.
      </p>
      <a href="#" className="btn">
        Shop Now
      </a>
    </div>
    <div className="home-img">
      <img src={Imge} alt="" />
    </div>
  </section>
  

  </>
  
  )
}

export default HomePage