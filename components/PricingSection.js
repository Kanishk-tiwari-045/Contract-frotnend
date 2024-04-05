// PricingSection.js
import React from 'react';

const PricingSection = () => {
  return (
    <section id="pricing">
      <div className="container py-1 gradient-background">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-bold text-black">CodeUp Your World</h1>
            <p className="fs-5 text-black">Simple and affordable price plans for you.</p>
          </div>
        </header>
        <main>
          <div className="row row-cols-1 row-cols-md-4 mb-4 text-center justify-content-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm pricing-card gradient-background">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-bold text-white">Online IDE</h4>
                </div>
                <div className="card-body text-white">
                  <h1 className="card-title pricing-card-title">$0<small className="fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>5 Matches Per Day</li>
                    <li>10 Messages Per Day</li>
                    <li>Unlimited App Usage</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-dark button">Sign up for free</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm pricing-card gradient-background">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-bold text-white">Prompt with IDE</h4>
                </div>
                <div className="card-body text-white">
                  <h1 className="card-title pricing-card-title">$15<small className="fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Unlimited Messages</li>
                    <li>Unlimited Matches</li>
                    <li>Unlimited App Usage</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-dark button">Get started</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm pricing-card gradient-background">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-bold text-white">Debug and IDE</h4>
                </div>
                <div className="card-body text-white">
                  <h1 className="card-title pricing-card-title">$29<small className="fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Priority Listing</li>
                    <li>Unlimited Messages and Matches</li>
                    <li>Unlimited App Usage</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-dark button">Contact us</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default PricingSection;
