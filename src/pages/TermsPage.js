import React, {Fragment }from 'react';
import PropTypes from 'prop-types';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';
import TermsDescription from '../components/TermsDescription/TermsDescription';

class TermsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Terms and conditions'></TopNavigation>
                <PageTop pageTitle='Terms and conditions'></PageTop>
                <TermsDescription></TermsDescription>
                <Footer></Footer>
            </Fragment>

        );
    }
}

TermsPage.propTypes = {};

export default TermsPage;
