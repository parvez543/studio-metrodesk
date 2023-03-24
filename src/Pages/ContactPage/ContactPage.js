import React from 'react';
import ContactComponent from '../../Component/ContactComponent/ContactComponent';
import ContactForm from '../../Component/ContactForm/ContactForm';
import ContactUs from '../../Component/ContactUs/ContactUs';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';

const ContactPage = () => {
    return (
        <div>
            <ContactComponent/>
            <ContactForm/>
            <ContactUs/>
            <LetsTalk/>
        </div>
    );
};

export default ContactPage;