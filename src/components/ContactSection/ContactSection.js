import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons' ;
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';


class ContactSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    sendContact(){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let msg = document.getElementById('msg').value;
        let jsonObject = {name: name, email: email, msg: msg};
        
        RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(jsonObject)).then(result=>{
            alert(result); 
        }).catch(error=>{
            alert(error); 
        });

    }

    render() {
        return (
            <Fragment>
                <Container className='contactSection pt-5'>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <h1 className='text-left serviceName'>Connect now</h1> 

                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" id='name' />
                                </Form.Group>                                
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" id='email' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} id='msg' />
                                </Form.Group>
                            
                                <Button variant="primary" onClick={this.sendContact}>
                                    Submit
                                </Button>
                            </Form>


                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <h1 className='text-left serviceName'>Discuss now</h1>
                            <p className='des'>#Franklgatan 10, Angered, Gothenburg, Sweden</p>
                            <p><FontAwesomeIcon className='mr-2 des' icon={faEnvelope}/>cse.toihid@gmail.com</p> 
                            <p><FontAwesomeIcon className='mr-2 des' icon={faPhone}/>+46 0764467519</p>                        
                        </Col>
                    </Row>
                </Container>
            </Fragment>

        );
    }
}

ContactSection.propTypes = {};

export default ContactSection;
