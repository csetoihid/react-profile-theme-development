import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Contact' ></TopNavigation>
                <PageTop pageTitle='Contact us'></PageTop>
                <ContactSection></ContactSection>
                <Footer></Footer>
            </Fragment>

        );
    }
}

ContactPage.propTypes = {};

export default ContactPage;
