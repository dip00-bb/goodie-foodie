import React from 'react';
import Banner from '../Comonent/Banner/Banner';
import CardLoader from './CardLoader';
import FAQAccordion from '../Comonent/Faq/FAQAccordion';
import WhyChooseUs from '../Comonent/WhyUs/WhyChooseUs';
import PromoSection from '../Comonent/Promo/PromoSection';







const HomePage = () => {
    return (
        <div className='flex flex-col gap-20'>
            <Banner/>
            <CardLoader/>
            <FAQAccordion/>
            <PromoSection/>
            <WhyChooseUs/>
        </div>
    );
};

export default HomePage;