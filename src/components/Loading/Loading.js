import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import LoadingImg from '../../asset/image/loading.svg';
import { Col, Container, Row } from 'react-bootstrap';
class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
               <Row>
                   <Col  className= 'text-center'>
                        <img src={LoadingImg}></img>
                    </Col>
                </Row>
            </Fragment>

        );
    }
}

Loading.propTypes = {};

export default Loading;
