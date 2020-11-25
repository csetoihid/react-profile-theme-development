import React, {Fragment }from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Image } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import Loader from '../Loading/Loading';
import Error from '../Error/Error';

class AllCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: [],
            loading: true,
            error:false
        };
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.CourseAll).then(result=>{
            this.setState({myData: result}); 
            this.setState({loading: false});
            if(result==null){
                this.setState({error: true}); 
            }
        }).catch(error=>{
            this.setState({error: true});
        });
    }

    render() {
     
        const myList= this.state.myData;
        const myView = myList.map(list=>{
            return  <Col lg={6} md={12} sm={12} className='pt-5'> 
                        <Row  className='text-justify'>
                            <Col lg={6} md={12} sm={12}>
                                <Image fluid src={list.course_small_img}/>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <h5 className='coursesTitle'>{list.course_short_title}</h5>
                                <p className='courseDes'>{list.course_short_des}</p>
                                <a className='courseDetails text-left' href='#'>Details</a>
                            </Col>  
                        </Row>
                    </Col>
        
        });     
        if(this.state.error){
           return <Error></Error>
        }else{
            if(this.state.loading){
                return <Loader></Loader>
            }else{
                return (
                    <Fragment>
                        <Container className='pt-5'>
                            <Row>
                                {myView}
                            </Row>
        
                        </Container>
                    </Fragment>
                );            
            }
        }

    }
}

AllCourses.propTypes = {};

export default AllCourses;
