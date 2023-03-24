import React from 'react';
import ContactComponent from '../../Component/ContactComponent/ContactComponent';
import ContactForm from '../../Component/ContactForm/ContactForm';
import ContactUs from '../../Component/ContactUs/ContactUs';

const ContactPage = () => {
    return (
        <div>
            <ContactComponent/>
            <ContactForm/>
            <ContactUs/>
        </div>
    );
};

export default ContactPage;