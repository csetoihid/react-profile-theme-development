import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ProjectsPage from '../pages/ProjectsPage';
import CoursesPage from '../pages/CoursesPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

class AppRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/service' component={ServicePage} />
                    <Route exact path='/course' component={CoursesPage} />
                    <Route exact path='/protfolio' component={ProjectsPage} />
                    <Route exact path='/projectDetails/:projectId/:projectName' component={ProjectDetailsPage} />
                    <Route exact path='/contact' component={ContactPage} />
                    <Route exact path='/about' component={AboutPage} />
                    <Route exact path='/refund' component={RefundPage} />
                    <Route exact path='/terms' component={TermsPage} />
                    <Route exact path='/privacy' component={PrivacyPage} />
                    <Route exact path='/courseDetails/:courseId/:courseName' component={CourseDetailsPage} />
                </Switch>
            </Fragment>

        );
    }
}

AppRoute.propTypes = {};

export default AppRoute;
