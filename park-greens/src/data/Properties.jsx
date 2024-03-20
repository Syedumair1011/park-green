import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faBuilding, faLocation } from '@fortawesome/free-solid-svg-icons';

export default function Properties({ onCurrencyChange }) {
    const [selectedCurrency, setSelectedCurrency] = useState('AED');
    const [exchangeRate, setExchangeRate] = useState(1); // Default exchange rate
    const [isActive, setIsActive] = useState(false);

    // Define the currencies array
    const currencies = ['AED', 'USD'];

    useEffect(() => {
        // Fetch exchange rate from API or any other source
        // For simplicity, setting exchange rate to 1 for AED
        // For USD, you can set the actual exchange rate
        if (selectedCurrency === 'USD') {
            // Example API call to get exchange rate
            fetch('https://api.exchangerate-api.com/v4/latest/USD')
                .then(response => response.json())
                .then(data => {
                    setExchangeRate(data.rates['AED']);
                })
                .catch(error => console.error('Error fetching exchange rate:', error));
        } else {
            setExchangeRate(1); // Default exchange rate for AED
        }
    }, [selectedCurrency]);

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
        onCurrencyChange(currency); // Call the function from the prop
    };

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

    const featured = [
        {
            title: '5BR Villa in Damac Hills 2',
            location: 'Damac Hills 2',
            bed: '5',
            bath: '3',
            sqft: '3,542',
            price: '2880000',
            Image: 'https://avatars.housearch.com/get-verba/1030388/2a0000018bb7f1beb1b3bbd280bf5da25a8a/housearch_large'
        },
        {
            title: 'Luxury Living at DAMAC Hills 2 - Villas',
            location: 'Damac Hills 2',
            bed: '5',
            bath: '3',
            sqft: '1900',
            price: '1830000',
            Image: 'https://cloud.famproperties.com/project/large/-350608-132633.jpg'
        },
        {
            title: '2 Bedroom Apartments ',
            location: 'Damac Hills 2',
            bed: '1',
            bath: '2',
            sqft: '1900',
            price: '570000',
            Image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/405142173.jpg?k=1ece302a576a2867d65cdf60b3da3527597372cf82045912618c4378c0292b6b&o=&hp=1'
        }
    ];

    return (
        <section id="properties" className='m-5'>
            <div className='container'>
                <div className="pb-5">
                    <h2 className="pb-2">Properties</h2>
                    <div className="sub-heading">
                        <h6 className="mb-3">Explore luxury twin villas in DAMAC Hills 2's prestigious community.</h6>
                    </div>
                    <div>
                    {currencies.map(currency => (
                            <button key={currency} onClick={() => handleCurrencyChange(currency)} className={`btn ${selectedCurrency === currency ? 'btn-primary' : 'btn-secondary'} mx-2`}>
                                {currency}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='row'>
                    {featured.map((item, index) => (
                        <div className='col-lg-4 mb-4' key={index}>
                            <div className='card bg-dark text-white'>
                                <img src={item.Image} className="card-img-top" alt="Card" style={{ height: '250px' }} />
                                <div className="card-img-overlay">
                                    <div className='card-featured'>
                                        <h6 className='pd-5'>New Launch</h6>
                                    </div>
                                    <div className='card-featured2'>
                                        <h6 className='pd-5'>Featured</h6>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="title-container">
                                        <h5 className="card-title">{item.title}</h5>
                                        <hr className="title-divider" />
                                    </div>
                                    <div className="icon-container">
                                        <div className="icon-info">
                                            <h5 style={{ marginRight: '5px' }}>{item.bed}</h5>
                                            <FontAwesomeIcon icon={faBed} className="bed-icon" style={{ height: '20px' }} />
                                        </div>
                                        <div className="icon-info">
                                            <h5 style={{ marginRight: '5px' }}>{item.bath}</h5>
                                            <FontAwesomeIcon icon={faBath} className="bed-icon" style={{ height: '20px' }} />
                                        </div>
                                        <div className="icon-info">
                                            <h5 style={{ marginRight: '5px' }}>{item.sqft}</h5>
                                            <FontAwesomeIcon icon={faBuilding} className="bed-icon" style={{ height: '20px' }} />
                                        </div>
                                    </div>
                                    
                                    <div className="icon-info" style={{ marginTop: '8px' }}>
                                        <FontAwesomeIcon icon={faLocation} className="location-icon" style={{ height: '20px' }} />
                                        <h6 style={{ marginLeft: '8px', marginTop: '8px', textAlign: 'center' }}>{item.location}</h6>
                                    </div>
                        
                                    <hr />
                                    <h4 className="card-title"><span>Starting From</span> <strong>{(parseFloat(item.price) / exchangeRate).toFixed(2)} {selectedCurrency}</strong></h4>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
