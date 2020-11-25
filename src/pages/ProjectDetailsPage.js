import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Footer from '../components/Footer/Footer';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';

class ProjectDetailsPage extends React.Component {
    constructor({match}) {
        super();
        this.state = {
            projectPassedId : match.params.projectId,
            projectPassedName : match.params.projectName
        };
    }

    render() {
        return (
            <Fragment>
                <TopNavigation></TopNavigation>
                <PageTop pageTitle={this.state.projectPassedName}></PageTop>
                <ProjectDetails id={this.state.projectPassedId}></ProjectDetails>
                <Footer></Footer>
            </Fragment>
        );
    }
}

ProjectDetailsPage.propTypes = {};

export default ProjectDetailsPage; 
