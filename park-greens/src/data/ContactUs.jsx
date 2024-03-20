import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs({ showPart }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [query, setQuery] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://127.0.0.1:3001/send-email', {
                name,
                email,
                phoneNumber,
                query
            });
            console.log('Response:', response);
            toast.success('Email sent successfully our Agent will contact you Shortly');
        } catch (error) {
            console.error('Error:', error);
            console.error('Error sending email:', error.response.data);
            toast.error('Error sending email');
        }
    
        // Clear form fields
        setName('');
        setEmail('');
        setPhoneNumber('');
        setQuery('');
    };

    return (
        <div>
            <div className="container" id="ContactUs">
            {/* <div className="pb-5">
            <h2 className="pb-2">Contact Us</h2>
                <div className="sub-heading">
                    <h6 className="mb-3">Fill the form one of ou agent will contact you Shortly.</h6>
                </div>
            </div> */}
                <div className="row">
                    {showPart === "address" && (
                        <div className="col-lg-5">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Vertically centered hero sign-up form</h1>
                            <p className="col-lg-10">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                        </div>
                    )}
                    {showPart === "form" && (
                        <div className="col-md-12 mx-auto col-lg-12">
                            <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                    <label htmlFor="floatingInput">Name</label> {/* Use htmlFor instead of for */}
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingPassword" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="floatingPassword">Email</label> {/* Use htmlFor instead of for */}
                                </div>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                    className='form-control'
                                    style={{ marginBottom: '15px' }} />
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" placeholder="Type Your Query" rows={10} value={query} onChange={(e) => setQuery(e.target.value)}></textarea>
                                    <label htmlFor="floatingPassword">Query</label> {/* Use htmlFor instead of for */}
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Submit and Download Brochure</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
