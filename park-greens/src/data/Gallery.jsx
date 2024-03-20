import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import parkGreensImage1 from '../assets/park-greens-01.webp'; // Import the image correctly
import parkGreensImage8 from '../assets/park-greens-8.webp'; // Import the image correctly
import parkGreensImage9 from '../assets/park-greens-9.webp'; // Import the image correctly
import parkGreensImage10 from '../assets/park-greens-10.webp'; // Import the image correctly
import parkGreensImage11 from '../assets/park-greens-11.webp'; // Import the image correctly
import parkGreensImage12 from '../assets/park-greens-12.webp'; // Import the image correctly
import parkGreensImage13 from '../assets/park-greens-13.webp'; // Import the image correctly
import parkGreensImage14 from '../assets/park-greens-14.webp'; // Import the image correctly
import parkGreensImage17 from '../assets/park-greens-17.webp'; // Import the image correctly

export default function Gallery() {
    const images = [
        {
            original: parkGreensImage1,
            thumbnail: parkGreensImage1,
        },
        {
            original: parkGreensImage8,
            thumbnail: parkGreensImage8,
        },
        {
            original: parkGreensImage9,
            thumbnail: parkGreensImage9,
        },
        {
            original: parkGreensImage10,
            thumbnail: parkGreensImage10,
        },
        {
            original: parkGreensImage11,
            thumbnail: parkGreensImage11,
        },
        {
            original: parkGreensImage12,
            thumbnail: parkGreensImage12,
        },
        {
            original: parkGreensImage13,
            thumbnail: parkGreensImage13,
        },
        {
            original: parkGreensImage14,
            thumbnail: parkGreensImage14,
        },
        {
            original: parkGreensImage17,
            thumbnail: parkGreensImage17,
        },
    ];

    const [isActive, setIsActive] = useState(false);

    return (
        <div className='container'>
            <div className="pb-5">
            <h2 className="pb-2">Project Gallery</h2>
                <div className="sub-heading">
                    <h6 className="mb-3">Discover More with Portfolio</h6>
                </div>
            </div>
            <div className="gallery-container" style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
                <div className='row'>
                    <div className='col-lg-12'>
                        <ImageGallery
                            items={images}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            additionalClass="custom-image-gallery" // Add a custom class for styling
                            renderItem={renderCustomItem} // Custom render function to apply border to images
                            autoPlay={true} // Enable autoplay
                            slideInterval={5000} // Set autoplay interval to 5 seconds
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function renderCustomItem(item) {
    return (
        <div className="image-gallery-image">
            <img src={item.original} alt={item.originalAlt} style={{ border: '5px solid #e9d362' }} />
        </div>
    );
}
