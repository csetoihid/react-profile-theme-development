import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

class RecentProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: []
        };
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.ProjectsLimit).then(result=>{
            this.setState({myData: result}); 
        }).catch(error=>{
            this.setState({myData: '??'}); 
        });
    }


    render() {

        const myList= this.state.myData;
        const myView = myList.map(list=>{
            return  <Col lg={4} md={6} sm={12} className='p-2'>
                <Card>
                    <Card.Img variant="top" src={list.img_1} />
                    <Card.Body className='projectCard'>
                        <Card.Title className='projectCardTitle'>{list.project_name}</Card.Title>
                        <Card.Text className='projectCardDes'>{list.short_des}</Card.Text>
                        <Link  to={"/projectDetails/"+ list.id+"/"+list.project_name}><Button variant="primary">Details </Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        });

        return (
            <Fragment>
                <Container>
                <h1 className='text-center serviceMainTitle'>Recent Projects</h1>
                    <Row className='text-center'>
                        {myView}
                    
                    </Row>
                </Container>
            </Fragment>
            
        );
    }
}

RecentProjects.propTypes = {};

export default RecentProjects;
