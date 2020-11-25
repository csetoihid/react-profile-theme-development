import React, {Fragment }from 'react';
import PropTypes from 'prop-types';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';
import RefundDescription from '../components/RefundDescription/RefundDescription';

class RefundPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Refund Policy'></TopNavigation>
                <PageTop pageTitle='Refund policy'></PageTop>
                <RefundDescription></RefundDescription>
                <Footer></Footer>
            </Fragment>

        );
    }
}

RefundPage.propTypes = {};

export default RefundPage;
