import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_USER_ID // Updated to use REACT_APP_USER_ID instead of REACT_APP_PUBLIC_KEY
            );
            setStateMessage('Message sent successfully!');
        } catch (error) {
            setStateMessage('Something went wrong, please try again later');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000);
            e.target.reset(); // Clears the form after sending the email
        }
    };

    return (
        <div id="ContactUS">
        <form onSubmit={sendEmail} >
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value={isSubmitting ? 'Sending...' : 'Send'} disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
        </form>
        </div>
    );
};

export default Contact;
