import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Image } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';

class PrivacyDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc : ''
        };
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({desc: result[0]['info_privacy']}); 
        }).catch(error=>{
            this.setState({desc: ''}); 
        });
    } 

    render() {
        return (
            <Fragment>
                <Container className='pt-5'>
                    <Row>
                        <Col>
                        {ReactHtmlParser(this.state.desc)}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

PrivacyDescription.propTypes = {};

export default PrivacyDescription;
