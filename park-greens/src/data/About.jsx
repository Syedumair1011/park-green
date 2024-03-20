import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../theme.css';
import '../App.css';
import Navbar from './Navbar';
import Tabs from './Tabs';
import Test from './Test';

export default function About() {

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const threshold = windowHeight / 2;

            if (scrollY > threshold) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Render Navbar and Tabs only when the path is '/about'
    const renderNavbarAndTabs = location.pathname === '/about';

    return (
        <>
        {renderNavbarAndTabs && (
                <>
                    <Navbar />
                    <Tabs />
                </>
            )}
        <section id="about" className='m-5'>
        <Test showModal={showModal} handleCloseModal={handleCloseModal} />
            <div className='container'>
                <div className="pb-5">
                <h2 className="pb-2">About Project</h2>
                    <div className="sub-heading">
                        <h6 className="mb-3">Discover More about the Park Greens</h6>
                    </div>
                </div>
                <div className='about'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='about-left'>
                                <h1 className='m-3'>Park Greens Phase 2</h1>
                                <p className='m-3'>
                                    Park Greens introduces a collection of upscale twin villas nestled within the prestigious DAMAC Hills 2 community. With private plots and lush landscapes, residents can relish in tranquility and luxury living. The development's strategic location ensures easy access to signature amenities and entertainment venues. Phase two's announcement signifies continued excellence, promising residents modern design and premium features. From spacious interiors to vibrant recreational areas, Park Greens offers an unparalleled living experience for discerning homeowners.                                </p>
                            </div>
                            <div className='row m-2'>
                                <div className='col-lg-6'>
                                    <a href='#ContactUs'>
                                    <button className="btn btn-primary">Contct Us</button>
                                    </a>
                                </div>
                                <div className='col-lg-6 '>
                                    <button className="btn btn-primary" onClick={handleShowModal}>Download Brochure</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='about-property'>
                                <img src='https://metropolitan.realestate/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/park-greens-02.jpg.webp' className="d-block w-100" style={{ objectFit: 'cover' }} alt="Park Greens Phase 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
