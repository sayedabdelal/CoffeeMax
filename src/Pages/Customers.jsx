import React from 'react'
import Img1 from '../img/rev1.jpg'
import Img2 from '../img/rev2.jpg'
import Img3 from '../img/rev3.jpg'

function Customers() {
  return (
    <section className="customers" id="customers">
  <div className="heading">
    <h2>Our Customers</h2>
  </div>
  {/*container*/}
  <div className="customers-container">
    <div className="box">
      <div className="stars">
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star-half" />
      </div>
      <p>
        Wicky's Coffee Shop has become my daily retreat! The cozy atmosphere,
        friendly staff, and perfectly brewed coffee keep me coming back. Truly a
        gem in the neighborhood
      </p>
      <h2>Vihanga Weerasinghe</h2>
      <img src={Img1} alt="" />
    </div>
    <div className="box">
      <div className="stars">
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star-half" />
      </div>
      <p>
        Their attention to detail is incredible—every cup is a masterpiece. The
        ambiance is inviting, and the customer service is second to none. Highly
        recommend Wicky's for coffee lovers
      </p>
      <h2>Kamal Lakdas</h2>
      <img src={Img2} alt="image" />
    </div>
    <div className="box">
      <div className="stars">
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star-half" />
      </div>
      <p>
        From the moment you step in, you're treated like family. The coffee is
        amazing, and the pastries are divine. Wicky's is the perfect place to
        relax and unwind
      </p>
      <h2>samanalee Fonseka</h2>
      <img src={Img3} alt="" />
    </div>
  </div>
</section>

  )
}

export default Customers