import React from 'react';
import ParkGreensLogo from '../assets/park-greens-logo.png';

export default function Footer() {
    return (
        <div className='container-fluid'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className='container'>
                    <div className='row'>
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <img src={ParkGreensLogo} alt="Park Greens Logo" width="170" height="50" />
                        </a>
                    </div>

                    <ul className="nav col-md-8 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
                        </li>
                        <li className="ms-3">
                            <span className="mb-3 mb-md-0 text-body-secondary">LLC</span>
                        </li>
                    </ul>
                </div>
                </div>
            </footer>
        </div>
    );
}
