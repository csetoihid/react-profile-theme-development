import React, {Fragment }from 'react';
import PropTypes from 'prop-types';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='About'></TopNavigation>
                <PageTop pageTitle='About us'></PageTop>
                <AboutDescription></AboutDescription>
                <Footer></Footer>
            </Fragment>

        );
    }
}

AboutPage.propTypes = {};

export default AboutPage;
