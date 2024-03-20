import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedRiver, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBarChart, faBook, faChartArea, faChartColumn, faChartGantt, faCity, faDriversLicense, faDumbbell, faGlassCheers, faHome, faPlay, faStore, faSwimmingPool, faThumbsUp, faTree, faTreeCity, faUmbrellaBeach, faWater } from '@fortawesome/free-solid-svg-icons';
import '../theme.css';

export default function Amenities() {
    return (
        <div className='container' style={{ marginTop: '120px' }}>
            <div className='row'>
                <div className='col-lg-2 col-md-6'>
                    <div className='caption-container'>
                        <div className='icon-card'>
                            <div className='outer-border'>
                                <div className='inner-border'>
                                    <div className='icons-container'>
                                        <div className='icons'>
                                            <FontAwesomeIcon icon={faUmbrellaBeach} className="amenities-icons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='icons-text'>
                                <p>Malibu Beach</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-6'>
                    <div className='caption-container'>
                        <div className='icon-card'>
                            <div className='outer-border'>
                                <div className='inner-border'>
                                    <div className='icons-container'>
                                        <div className='icons'>
                                            <FontAwesomeIcon icon={faWater} className="amenities-icons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='icons-text'>
                                <p>Lazy River</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-6'>
                    <div className='caption-container'>
                        <div className='icon-card'>
                            <div className='outer-border'>
                                <div className='inner-border'>
                                    <div className='icons-container'>
                                        <div className='icons'>
                                            <FontAwesomeIcon icon={faTree} className="amenities-icons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='icons-text'>
                                <p>Green Parks</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-6'>
                    <div className='caption-container'>
                        <div className='icon-card'>
                            <div className='outer-border'>
                                <div className='inner-border'>
                                    <div className='icons-container'>
                                        <div className='icons'>
                                            <FontAwesomeIcon icon={faThumbsUp} className="amenities-icons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='icons-text'>
                                <p>Hassle-free Processing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-6'>
                    <div className='caption-container'>
                        <div className='icon-card'>
                            <div className='outer-border'>
                                <div className='inner-border'>
                                    <div className='icons-container'>
                                        <div className='icons'>
                                            <FontAwesomeIcon icon={faBook} className="amenities-icons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='icons-text'>
                                <p>Minimal documentation</p>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className='col-lg-2 col-md-6 col-md-6'>
                    <div className='caption-container'>
                        <div className='icon-card'>
                            <div className='outer-border'>
                                <div className='inner-border'>
                                    <div className='icons-container'>
                                        <div className='icons'>
                                            <FontAwesomeIcon icon={faChartGantt} className="amenities-icons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='icons-text'>
                                <p>Hight rental yeild</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
