import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Image } from 'react-bootstrap';
import axios from 'axios';

class PageTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){

        axios.get('http://127.0.0.1:8000/HomeTopTitle')
        .then(function (response) {
  
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })




    }

    render() {
        return (
            <Fragment>
                <Container fluid className='topPageFix p-0'>
                    <div className='topPageOverlay'>
                        <Container className='topPageContent'>
                            <Row>
                                <Col>
                                    <h3>{this.props.pageTitle}</h3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
 
        );
    }
}

PageTop.propTypes = {};

export default PageTop;
