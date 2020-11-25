import React, {Fragment }from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Image } from 'react-bootstrap';
import WebDev from '../../asset/image/website.jpg';

import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';


class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: []
        };
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.Services).then(result=>{
            this.setState({myData: result}); 
        }).catch(error=>{
            this.setState({myData: []}); 
        });
    }


    render() {

        const myList= this.state.myData;
        const myView = myList.map(list=>{
            return  <Col lg={4} md={6} sm={1}>
            <div className='serviceCard text-center'>
                    <Image className='img-responsive' src={list.service_logo} alt='image' fluid  roundedCircle />
                <h2 className='serviceName'>{list.service_name}</h2>
                <p className='text-justify'>{list.service_description}</p>
            </div>
        </Col>
        });





        return (
            <Fragment>
                <Container>
                <h1 className='text-center serviceMainTitle'>Services</h1>
                    <Row>

                        {myView}
                                                                        
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

Services.propTypes = {};

export default Services;
