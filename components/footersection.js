import React from 'react';
const Footer = () => {
  return (
    <section id="footer">
      <div className="container py-1" style={{ backgroundColor: 'rgba(88, 88, 88, 0.5)' }}>
        <footer className="row cols-1 py-5">
          <div className="row mb-3 col-lg-3 justify-content-center">
            <p className="text-center" style={{ color: '#151515' }}>© TinDog</p>
          </div>
          <div className="col mb-1"></div>
          <div className="col mb-3 d-lg-flex flex-lg-column align-items-lg-start">
            <h5 className="text-center">Section</h5>
            <ul className="nav flex-column align-items-center">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>

          <div className="col mb-3 d-lg-flex flex-lg-column align-items-lg-start">
            <h5 className="text-center">Section</h5>
            <ul className="nav flex-column align-items-center">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>

          <div className="col mb-3 d-lg-flex flex-lg-column align-items-lg-start">
            <h5 className="text-center">Section</h5>
            <ul className="nav flex-column align-items-center">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
