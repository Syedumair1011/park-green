import React, { useState } from 'react'; // Import useState from React
import { Button, Modal } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import ContactUs from './ContactUs';

export default function Test({ showModal, handleCloseModal }) {
    const [value, setValue] = useState(); // Initialize state for phone input

    return (
        <>
            {/* Modal component with props passed from ParentComponent */}
            <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Request For Brochure</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <ContactUs showPart={'form'}/>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}
