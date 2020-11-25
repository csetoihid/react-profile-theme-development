import React, { Fragment } from 'react';
import { Container, Row, Button, Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons' ;
import VisibilitySensor from "react-visibility-sensor";

import CountUp from 'react-countup';


class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <Container fluid className='summaryFix summarySection p-0'>
                    <div className='summaryOverlay'>
                        <Container className='text-center'>
                            <Row>
                                <Col lg={8} md={12} sm={12}>
                                    <Row className='countingSection'>
                                        <Col>
                                            <h1 className='countingNumber'>
                                            <CountUp start={0} end={100}>
                                                {({ countUpRef, start }) => (
                                                    
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                                </CountUp>
                                            </h1>
                                            <h1 className='countingTitle'>Total project</h1>
                                            <hr className='bg-white w-25'></hr>
                                        </Col>
                                        <Col>
                                            <h1 className='countingNumber'>
                                            <CountUp start={0} end={50}>
                                                {({ countUpRef, start }) => (
                                                    
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                                </CountUp>                                               
                                            </h1>
                                            <h1 className='countingTitle'>Total clients</h1>
                                            <hr className='bg-white w-25'></hr>                                        
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={12} sm={12}>
                                <Card className='workCard'>
                                    <Card.Body>
                                        <Card.Title className='cardTitle'>How I work</Card.Title>
                                        <Card.Text>
                                            <p className='cardSubtitle'><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />Requirements gathering</p>
                                            <p className='cardSubtitle'><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />System analysis</p>
                                            <p className='cardSubtitle'><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} />Coding testing</p>
                                            <p className='cardSubtitle'><FontAwesomeIcon className='iconBulet' icon={faCheckCircle} /> Implementations</p>
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

Summary.propTypes = {};

export default Summary;
