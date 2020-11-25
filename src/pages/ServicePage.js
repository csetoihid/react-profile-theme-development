import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';

class ServicePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Service'/>
                <PageTop pageTitle='Services'/>
                <Services/>
                <ContactSection/>
                <Footer/>

            </Fragment>

        );
    }
}

ServicePage.propTypes = {};

export default ServicePage;
