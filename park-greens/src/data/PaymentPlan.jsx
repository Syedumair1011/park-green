import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDumbbell, faGlassCheers, faSwimmingPool, faTree, faTreeCity, faGlobe, faBook, faCreditCardAlt, faCreditCard, faHandHolding } from '@fortawesome/free-solid-svg-icons';

export default function PaymentPlan() {
    return (
        <div>
            <div className="container px-4 py-5" id="hanging-icons">
                <h2 className="pb-2">Payment Plan</h2>
                <div className="sub-heading">
                    <h6 className="mb-3">Explore the Payment Plan.</h6>
                </div>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

                    <div className="col d-flex align-items-start">
                        <div className="icon-square text-dark flex-shrink-0 me-3" >
                            <svg className="bi" width="2em" height="2em">                                   <FontAwesomeIcon icon={faCreditCard} className="heart-icon" style={{ color: '#e9d362' }} />
                            </svg>
                        </div>
                        <div>
                            <h2>60/40 Payment Plan</h2>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square text-dark flex-shrink-0 me-3" >
                            <svg className="bi" width="2em" height="2em">                                   <FontAwesomeIcon icon={faBook} className="heart-icon" style={{ color: '#e9d362' }} />
                            </svg>
                        </div>
                        <div>
                            <h2>20% Booking</h2>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                    <div className="icon-square text-dark flex-shrink-0 me-3" >
                            <svg className="bi" width="2em" height="2em"><FontAwesomeIcon icon={faHandHolding} className="heart-icon" style={{ color: '#e9d362' }} />
                            </svg>
                        </div>
                        <div>
                            <h2>30% on Handover</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
