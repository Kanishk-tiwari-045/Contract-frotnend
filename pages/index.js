import React from 'react';
import TitleSection from '../components/TitleSection';
import FeatureSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/footersection';

const Home = () => {
    return (
        <div>
            <TitleSection/>
            <FeatureSection/>
            <PricingSection/>
            <Footer/>
        </div>
    );
};

export default Home;
