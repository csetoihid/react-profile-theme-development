import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footer_address : '...',
            footer_email : '...',
            footer_phone : '...',
            footer_facebook : '...',
            footer_youtube : '...',
            footer_credit : '...'
        };
    }


    componentDidMount(){
        RestClient.GetRequest(AppUrl.Footer).then(result=>{
            this.setState({footer_address: result[0]['footer_address']}); 
            this.setState({footer_email: result[0]['footer_email']}); 
            this.setState({footer_phone: result[0]['footer_phone']}); 
            this.setState({footer_facebook: result[0]['footer_facebook']}); 
            this.setState({footer_youtube: result[0]['footer_youtube']}); 
            this.setState({footer_credit: result[0]['footer_credit']}); 

        }).catch(error=>{
            this.setState({desc: ''}); 
        });
    } 

    render() {
        return (
            <Fragment>
                <Container fluid className='footerSection text-center'>
                    <Row>
                        <Col lg={3} md={6} sm={12}  className='p-5 text-justify'>
                            <h2 className='serviceName'>Follow Me</h2>
                            <a href={'//'+this.state.footer_facebook}><FontAwesomeIcon className='iconBulet' icon={faFacebook}/>Facebook</a> <br/>
                            <a href={'//'+this.state.footer_youtube}>YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify' >
                            <h2 className='serviceName'>Address</h2>
                            <p>
                                {this.state.footer_address}
                            </p>
                            <a href='#'>{this.state.footer_email}</a><br/>
                            <a href='#'>{this.state.footer_phone}</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'  >
                            <h2 className='serviceName'>Information</h2>
                            <Link to='/about'>About me</Link><br/>
                            <a href='#'>My resume</a><br/>
                            <Link to='/contact'>Contact me</Link><br/>

                        </Col> 
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify' >
                            <h2 className='serviceName'>Legal</h2>
                            <Link to='/refund'>Refund policy</Link><br/>
                            <Link to='/terms'>Tarms and Conditions</Link><br/>
                            <Link to='/privacy'>Privacy policy</Link><br/>
                        </Col>                                         
                    </Row>
                    <Row>
                        <Col className='copyRight'>
                            @toihid.com 2020
                        </Col>
                    </Row>
                    

                </Container>
            </Fragment>
        );
    }
}

Footer.propTypes = {};

export default Footer;
