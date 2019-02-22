import React from 'react';
import {
    Container
} from 'reactstrap';

import ContactSection from './Contact_Section'
import SubscribeSection from './Subscribe_Section'


class Contact extends React.Component {
    render() {
        return (
            <Container id="contact" fluid>
                    <ContactSection />
                <div className="divider"></div>
                <SubscribeSection />
            </Container >
        );
    }
}

export default Contact
