import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import AllProjects from '../components/AllProjects/AllProjects';
import Footer from '../components/Footer/Footer';

class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Protfolio'></TopNavigation>
                <PageTop pageTitle='All Projects'></PageTop>
                <AllProjects></AllProjects>
                <Footer></Footer>
            </Fragment>

        );
    }
}

ProjectsPage.propTypes = {};

export default ProjectsPage;
