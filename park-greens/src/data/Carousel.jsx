import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faPercentage, faWallet } from '@fortawesome/free-solid-svg-icons';
import parkGreensImage13 from '../assets/park-greens-13.webp'; // Import the image correctly

export default function Test() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };

    const carousel = [
        {
            Image: parkGreensImage13,
            title: 'Exclusive 5BR Semidetached Villas in \nDAMAC Hills 2',
            description: "Something",
            button_name: "Discover More",
            href: "www.damac.com",
            icon1: {
                Image: faWallet,
                text: {
                    title: 'AED 2.9 M',
                    textcaption: 'Starting Price'
                }
            },
            icon2: {
                Image: faPercentage,
                text: {
                    title: 'Easy 70/30',
                    textcaption: 'Payment Plan'
                }
            },
            icon3: {
                Image: faKey,
                text: {
                    title: 'Q1 2027',
                    textcaption: 'Handover'
                }
            }
        },
        {
            Image: 'https://connectingcontinents.ae/wp-content/uploads/2021/06/C2.jpg',
            title: 'Exclusive 5BR Semidetached Villas in \nDAMAC Hills 2',
            description: "Something",
            button_name: "Discover More",
            href: "www.damac.com",
            icon1: {
                Image: faWallet,
                text: {
                    title: 'AED 2.9 M',
                    textcaption: 'Starting Price'
                }
            },
            icon2: {
                Image: faPercentage,
                text: {
                    title: 'Easy 70/30',
                    textcaption: 'Payment Plan'
                }
            },
            icon3: {
                Image: faKey,
                text: {
                    title: 'Q1 2027',
                    textcaption: 'Handover'
                }
            }
        },
        {
            Image: 'https://se-developers.com/wp-content/uploads/2023/08/TW-Twin-villa-Shot-02-min-scaled.jpg',
            title: 'Exclusive 5BR Semidetached Villas in \nDAMAC Hills 2',
            description: "Something",
            button_name: "Discover More",
            href: "www.damac.com",
            icon1: {
                Image: faWallet,
                text: {
                    title: 'AED 2.9 M',
                    textcaption: 'Starting Price'
                }
            },
            icon2: {
                Image: faPercentage,
                text: {
                    title: 'Easy 70/30',
                    textcaption: 'Payment Plan'
                }
            },
            icon3: {
                Image: faKey,
                text: {
                    title: 'Q1 2027',
                    textcaption: 'Handover'
                }
            }
        }
    ];

    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner d-none d-sm-block">
                    {carousel.map((item, index) => (
                        <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                            <img src={item.Image} className="d-block w-100" alt={`Slide ${index + 1}`} style={{ objectFit: 'cover', height: '600px' }} />
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                            <div className='container'>
                                <div className='cover'>
                                    <div className='row'>
                                        <div className='col-lg-5'>
                                            <div className="carousel-caption" style={{ marginLeft: '90px' }} >
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <h2 className="caption-title" style={{ marginBottom: '20px' }}>
                                                        {item.title.split('\n').map((line, index) => (
                                                            <div key={index}>
                                                                {line}
                                                                <br />
                                                            </div>
                                                        ))}
                                                    </h2>
                                                </div>
                                                <p className="caption-text">{item.description}</p>
                                                <div className=''>
                                                    <div className='row'>
                                                        <div className='col-lg-2'>
                                                            <div className='caption-container' style={{ display: 'flex', alignItems: 'center' }}>
                                                                <div className='caption-icon'>
                                                                    {item.icon1.Image && (
                                                                        <FontAwesomeIcon icon={item.icon1.Image} className="wallet-icon" style={{ height: '40px' }} />
                                                                    )}
                                                                </div>
                                                                <div className="caption-content" style={{ marginLeft: '10px', fontSize: '20px', display: 'flex', flexDirection: 'column' }}>
                                                                    <div className='caption-text'>
                                                                        <p><b>{item.icon1.text.title}</b></p>
                                                                    </div>
                                                                    <div className='caption-text'>
                                                                        <p>{item.icon1.text.textcaption}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-2'>
                                                            <div className='caption-container' style={{ display: 'flex', alignItems: 'center' }}>
                                                                <div className='caption-icon'>
                                                                    {item.icon2.Image && (
                                                                        <FontAwesomeIcon icon={item.icon2.Image} className="wallet-icon" style={{ height: '40px' }} />
                                                                    )}
                                                                </div>
                                                                <div className="caption-content" style={{ marginLeft: '10px', fontSize: '20px', display: 'flex', flexDirection: 'column' }}>
                                                                    <div className='caption-text'>
                                                                        <p><b>{item.icon2.text.title}</b></p>
                                                                    </div>
                                                                    <div className='caption-text'>
                                                                        <p>{item.icon2.text.textcaption}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-2'>
                                                            <div className='caption-container' style={{ display: 'flex', alignItems: 'center' }}>
                                                                <div className='caption-icon'>
                                                                    {item.icon3.Image && (
                                                                        <FontAwesomeIcon icon={item.icon3.Image} className="wallet-icon" style={{ height: '40px' }} />
                                                                    )}
                                                                </div>
                                                                <div className="caption-content" style={{ marginLeft: '10px', fontSize: '20px', display: 'flex', flexDirection: 'column' }}>
                                                                    <div className='caption-text'>
                                                                        <p><b>{item.icon3.text.title}</b></p>
                                                                    </div>
                                                                    <div className='caption-text'>
                                                                        <p>{item.icon3.text.textcaption}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="btn d-none d-lg-block">{item.button_name}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="carousel-inner d-block d-sm-none">
                    {carousel.map((item, index) => (
                        <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                            <img src={item.Image} className="d-block w-100" alt={`Slide ${index + 1}`} style={{ objectFit: 'cover', height: '600px' }} />
                            <div className='container'>
                                <div className='cover'>
                                    <div className='row'>
                                        <div className='col-lg-5'>
                                            <div className="carousel-caption">
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <h2 className="caption-title" style={{ marginBottom: '20px' }}>
                                                        {item.title.split('\n').map((line, index) => (
                                                            <div key={index}>
                                                                {line}
                                                                <br />
                                                            </div>
                                                        ))}
                                                    </h2>
                                                </div>
                                                <p className="caption-text">{item.description}</p>
                                                <div className=''>
                                                    <div className='row'>
                                                        <div className='col-lg-2'>
                                                            <div className='caption-container' style={{ display: 'flex', alignItems: 'center' }}>
                                                                <div className='caption-icon'>
                                                                    {item.icon1.Image && (
                                                                        <FontAwesomeIcon icon={item.icon1.Image} className="wallet-icon" style={{ height: '40px' }} />
                                                                    )}
                                                                </div>
                                                                <div className="caption-content" style={{ marginLeft: '10px', fontSize: '20px', display: 'flex', flexDirection: 'column' }}>
                                                                    <div className='caption-text'>
                                                                        <p><b>{item.icon1.text.title}</b></p>
                                                                    </div>
                                                                    <div className='caption-text'>
                                                                        <p>{item.icon1.text.textcaption}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-2'>
                                                            <div className='caption-container' style={{ display: 'flex', alignItems: 'center' }}>
                                                                <div className='caption-icon'>
                                                                    {item.icon2.Image && (
                                                                        <FontAwesomeIcon icon={item.icon2.Image} className="wallet-icon" style={{ height: '40px' }} />
                                                                    )}
                                                                </div>
                                                                <div className="caption-content" style={{ marginLeft: '10px', fontSize: '20px', display: 'flex', flexDirection: 'column' }}>
                                                                    <div className='caption-text'>
                                                                        <p><b>{item.icon2.text.title}</b></p>
                                                                    </div>
                                                                    <div className='caption-text'>
                                                                        <p>{item.icon2.text.textcaption}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-2'>
                                                            <div className='caption-container' style={{ display: 'flex', alignItems: 'center' }}>
                                                                <div className='caption-icon'>
                                                                    {item.icon3.Image && (
                                                                        <FontAwesomeIcon icon={item.icon3.Image} className="wallet-icon" style={{ height: '40px' }} />
                                                                    )}
                                                                </div>
                                                                <div className="caption-content" style={{ marginLeft: '10px', fontSize: '20px', display: 'flex', flexDirection: 'column' }}>
                                                                    <div className='caption-text'>
                                                                        <p><b>{item.icon3.text.title}</b></p>
                                                                    </div>
                                                                    <div className='caption-text'>
                                                                        <p>{item.icon3.text.textcaption}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="btn d-none d-lg-block">{item.button_name}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    onClick={handleNext}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
