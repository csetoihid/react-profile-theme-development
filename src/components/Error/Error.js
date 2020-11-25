import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ErrorImg from '../../asset/image/warning.svg';
import { Col, Container, Row } from 'react-bootstrap';

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
               <Row>
                   <Col lg={3} md={6} sm={12}  className='text-center p-5'>
                        <img className='img-fluid' src={ErrorImg}></img>
                    </Col>
                    <Col lg={9} md={6} sm={12}  className='text-left p-5'>
                        <h4 className=' p-5'>Somethings went wrong.</h4>
                    </Col>                    
                </Row>
            </Fragment>
        );
    }
}

Error.propTypes = {};

export default Error;
