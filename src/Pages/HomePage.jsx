import React from 'react';
import Banner from '../Comonent/Banner/Banner';
import CardLoader from './CardLoader';
import FAQAccordion from '../Comonent/Faq/FAQAccordion';
import WhyChooseUs from '../Comonent/WhyUs/WhyChooseUs';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <CardLoader/>
            <FAQAccordion/>
            <WhyChooseUs/>
        </div>
    );
};

export default HomePage;