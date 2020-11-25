import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import AllCourses from '../components/AllCourses/AllCourses';
import Footer from '../components/Footer/Footer';


class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title='Course'></TopNavigation>
                <PageTop pageTitle='All Courses'></PageTop>
                <AllCourses></AllCourses>
                <Footer></Footer>
            </Fragment>
        );
    }
}

CoursesPage.propTypes = {};

export default CoursesPage;
