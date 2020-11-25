import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';


class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: []
        };
    }


    componentDidMount(){
        RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
            this.setState({myData: result}); 
        }).catch(error=>{
            this.setState({myData: []}); 
        });
    }


    render() {

        const myList= this.state.myData;
        const myView = myList.map(list=>{
            return <Col lg={6} md={12} sm={12}>
            <Row  className='text-justify'>
                <Col lg={6} md={12} sm={12} className='pt-5'>
                    <Image fluid src={list.course_small_img}/>
                </Col>
                <Col lg={6} md={12} sm={12} className='pt-5'>
                    <h5 className='coursesTitle'>{list.course_short_title}</h5>
                    <p className='courseDes'>{list.course_short_des}</p>
                   <Link className='courseDetails text-left' to= {"/courseDetails/"+ list.id+"/"+list.course_short_title} > Details </Link> 
                </Col>  
            </Row>
        </Col>
        });

        return (
            <Fragment>
                <Container>
                <h1 className='text-center serviceMainTitle'>Courses</h1>
        <Row className='pb-5'>{myView}</Row>
                </Container>
            </Fragment>
        );
    }
}

Courses.propTypes = {};

export default Courses;
