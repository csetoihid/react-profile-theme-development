import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PageTop from '../components/PageTop/PageTop';
import Footer from '../components/Footer/Footer';
import CourseDetails from '../components/CourseDetails/CourseDetails';

class CourseDetailsPage extends React.Component {
    constructor({match}) {
        super();
        this.state = {
            passedId : match.params.courseId,
            passedName : match.params.courseName
        };
    }

    render() {
        return (
            <Fragment>
                <TopNavigation></TopNavigation>
                <CourseDetails id={this.state.passedId} name={this.state.passedName}></CourseDetails>
                <Footer></Footer>
            </Fragment>
        );
    }
}

CourseDetailsPage.propTypes = {};

export default CourseDetailsPage;
