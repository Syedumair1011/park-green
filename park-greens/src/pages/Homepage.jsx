import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../data/Navbar';
import Tabs from '../data/Tabs';
import Carousel from '../data/Carousel';
import Amenities from '../data/Amenities';
import About from '../data/About';
import Properties from '../data/Properties';
import Gallery from '../data/Gallery';
import Floor from '../data/Floor';
import Footer from '../data/Footer';
import PaymentPlan from '../data/PaymentPlan';
import ContactUs from '../data/ContactUs';
import WhatsappButton from '../data/WhatsappButton';
import WhyDubai from '../data/WhyDubai';

export default function Homepage() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            {isHomePage && (
                <>
                    <Navbar />
                    <Tabs />
                </>
            )}
            <Carousel />
            <Amenities />
            <About />
            <Properties />
            <Gallery />
            <Floor />
            <PaymentPlan />
            <WhyDubai />
            <ContactUs showPart="form" />
            <WhatsappButton />
            <Footer />
        </>
    );
}
