import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image, Button, Fluid} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons' ;
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons' ;
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';


class CourseDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            course_short_title: '...',
            course_short_des : '...',
            course_small_img : '...',
            course_long_title : '...',
            course_long_des : '...',
            course_total_lectures : '...',
            course_total_students : '...',
            course_skill_all : '...',
            course_video_url : '...',
            course_link : '...'

        };
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.CourseDetails+this.state.id).then(result=>{
                this.setState({course_short_title: result[0]['course_short_title'],
                course_short_des: result[0]['course_short_des'],
                course_small_img: result[0]['course_small_img'],
                course_long_title: result[0]['course_long_title'],
                course_long_des: result[0]['course_long_des'],
                course_total_lectures: result[0]['course_total_lectures'],
                course_total_students: result[0]['course_total_students'],
                course_skill_all: result[0]['course_skill_all'],
                course_video_url: result[0]['course_video_url'],
                course_link: result[0]['course_link']
            });  
        }).catch(error=>{
            this.setState({course_short_title: ''}); 
        });
    }    

    render() {
        return (
            <Fragment>
                <Container fluid className='topPageFix p-0'>
                    <div className='topPageOverlay'>
                        <Container className='topPageContentCourse'>
                            <Row>
                                <Col lg={6} md={6} sm={6}>
                                    <h3>{this.state.course_short_title} </h3>
                                    <h5>Total lecture = {this.state.course_total_lectures}</h5>
                                    <h5>Total student = {this.state.course_total_students}</h5>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <p>{this.state.course_short_des}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container>
                <Row>
                        <Col lg={6} md={6} sm={12} className='p-4 courseFeatures' >
                        <h2 className='serviceName'> {this.state.course_long_title}</h2>

                        {ReactHtmlParser(this.state.course_long_des)}
                        {/* 
                            <ul>
                                <li><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            </ul>
                        */}
                            <a href={'//'+this.state.course_link}><Button variant="primary">Live preview</Button></a>
                        </Col>
                        <Col lg={6} md={6} sm={12} className='p-4'>
                        <Player>
                            <source src={this.state.course_video_url} />
                            <BigPlayButton position='center' />
                        </Player>
                        </Col>                       
                    </Row>

                </Container>
                
            </Fragment>
        );
    }
}

CourseDetails.propTypes = {};

export default CourseDetails;
