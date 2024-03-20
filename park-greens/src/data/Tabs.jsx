import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import '../theme.css';
import Test from './Test'; // Import the Test modal component

export default function Tabs() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const Tabs = [
        {
            name: 'Home',
            href: '#myCarousel'
        },
        {
            name: 'About Project',
            href: '#about'
        },
        {
            name: 'Properties',
            href: '#properties'
        },
        {
            name: 'Project Gallery',
            href: '#Gallery'
        },
        {
            name: 'Floor Plan',
            href: '#Floor'
        },
        {
            name: 'Payment Plan',
            href: '#PaymentPlan'
        },
        {
            name: 'Contact Us',
            href: '#ContactUs'
        }
    ];

    const navbarStyle = {
        backgroundColor: 'black',
        innerHeight: '60px'
    };

    return (
        <>
        <Test showModal={showModal} handleCloseModal={handleCloseModal} />
            <nav className="navbar navbar-expand-lg" style={navbarStyle}>
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                            {Tabs.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    {item.onClick ? (
                                        <button className="nav-link active" aria-current="page" onClick={item.onClick}>{item.name}</button>
                                    ) : (
                                        <a className="nav-link active" aria-current="page" href={item.href}>{item.name}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="d-flex">
                            <div>
                                <button className="btn btn-primary btn-xs" onClick={handleShowModal}>
                                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                                    <h6 style={{ display: "inline", marginLeft: "10px" }}>Brochure</h6>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
