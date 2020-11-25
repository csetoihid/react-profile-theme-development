import React, {Fragment }from 'react';
import PropTypes from 'prop-types';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription';

class PrivacyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Privacy Policy'></TopNavigation>
                <PageTop pageTitle='Privacy'></PageTop>
                <PrivacyDescription></PrivacyDescription>
                <Footer></Footer>
            </Fragment>

        );
    }
}

PrivacyPage.propTypes = {};

export default PrivacyPage;
