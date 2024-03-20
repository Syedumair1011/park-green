import React, { useEffect, useState } from 'react';
import '../theme.css';
import '../App.css';
import FloorPlan from '../assets/park-greens-20.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faBuilding, faDollar, faHouse} from '@fortawesome/free-solid-svg-icons';
import Test from './Test';

export default function Floor() {

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

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

    return (
        <section id="Floor" className='m-5'>
            <Test showModal={showModal} handleCloseModal={handleCloseModal} />
            <div className='container'>
                <div className="pb-5">
                <h2 className="pb-2">Floor Plan</h2>
                    <div className="sub-heading">
                        <h6 className="mb-3">Discover More about the Park Greens</h6>
                    </div>
                </div>
                <div className='about'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='about-property'>
                                <img src={FloorPlan} className="d-block w-100" style={{ objectFit: 'cover' }} alt="Park Greens Phase 2" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='about-left'>
                                <h1 className='m-3'>Park Greens Phase 2</h1>
                                <div className="icon-container">
                                        <div className="icon-info">
                                            <FontAwesomeIcon icon={faBed} className="bed-icon m-3" style={{ height: '30px', color: 'white'}} />
                                        <h4 className='mt-2'>5 BR</h4>
                                        </div>
                                    </div>
                                    
                                    <div className="title-container">
                                        <h5 className="card-title m-3">Villa</h5>
                                        <hr className="title-divider" />
                                    </div>
                                    <div className="icon-container">
                                    <div className="icon-info">
                                            <FontAwesomeIcon icon={faHouse} className="bed-icon m-3" style={{ height: '30px', color: 'white'}} />
                                            <h5 className='mt-2'> Type: </h5>
                                            <h5 className='m-3'> 5 Bedroom </h5>
                                        </div>
                                    </div>
                                    <div className="icon-container">
                                    <div className="icon-info">
                                            <FontAwesomeIcon icon={faBuilding} className="bed-icon m-3" style={{ height: '30px', color: 'white'}} />
                                            <h5 className='mt-2'> Size: </h5>
                                            <h5 className='m-3'> 3,542 sq. ft. </h5>
                                        </div>
                                    </div>
                                    <div className="icon-container">
                                        <div className="icon-info">
                                            <FontAwesomeIcon icon={faDollar} className="bed-icon m-3" style={{ height: '30px', color: 'white'}} />
                                            <h5 className='mt-2'> Price: </h5>
                                            <h5 className='m-3'> 2,880,000 AED </h5>
                                        </div>
                                    </div>
                            </div>
                            <div className='row m-3'>
                                <div className='col-lg-6'>
                                    <a href='#ContactUs' >
                                    <button className="btn btn-primary">Leave a Request</button>
                                    </a>
                                </div>
                                <div className='col-lg-6 '>
                                    <button className="btn btn-primary" onClick={handleShowModal}>Download Brochure</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </section>
    )
}
