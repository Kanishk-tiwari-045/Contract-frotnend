// pages/_app.js

import "../../styles/style.css" // Import your global CSS file
import React from 'react';
import TitleSection from '../components/TitleSection';
import FeatureSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/footersection';
import Script from 'next/script'; // Import Script from Next.js
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <Header />
      <TitleSection/>
            <FeatureSection/>
            <PricingSection/>
      <Component {...pageProps} />
      <Footer />

      {/* Include Bootstrap JavaScript */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous" />
    </div>
  );
}

export default MyApp;
