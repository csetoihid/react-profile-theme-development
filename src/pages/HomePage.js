import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TopBanner from '../components/TopBanner/TopBanner';
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Analysis from '../components/Analysis/Analysis';
import Summary from '../components/Summary/Summary';
import RecentProjects from '../components/RecentProjects/RecentProjects';
import Courses from '../components/Courses/Courses';
import Video from '../components/Video/Video';
import ClientReview from '../components/ClientReview/ClientReview';
import Footer from '../components/Footer/Footer';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Home'></TopNavigation>
                <TopBanner></TopBanner>
                <Services></Services>
                <Analysis></Analysis>
                <Summary></Summary>
                <RecentProjects></RecentProjects>
                <Courses></Courses>
                <Video></Video>
                <ClientReview></ClientReview>
                <Footer></Footer>
            </Fragment>
 
        );
    }
}

HomePage.propTypes = {};

export default HomePage;
