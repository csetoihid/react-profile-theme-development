import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

class AllProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <Container className='pt-5'>
                    <Row className='text-center'>
                        <Col lg={4} md={6} sm={12} className='p-2'>
                        <Card>
                            <Card.Img variant="top" src="https://rabbil.com/storage/blogpost.jpg" />
                            <Card.Body className='projectCard'>
                                <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                <Card.Text className='projectCardDes'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2'>
                        <Card>
                            <Card.Img variant="top" src="https://rabbil.com/storage/blogpost.jpg" />
                            <Card.Body className='projectCard'>
                                <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                <Card.Text className='projectCardDes'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2'>
                            <Card>
                            <Card.Img variant="top" src="https://rabbil.com/storage/blogpost.jpg" />
                            <Card.Body className='projectCard'>
                                <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                <Card.Text className='projectCardDes'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2'>
                            <Card>
                            <Card.Img variant="top" src="https://rabbil.com/storage/blogpost.jpg" />
                            <Card.Body className='projectCard'>
                                <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                <Card.Text className='projectCardDes'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2'>
                            <Card>
                            <Card.Img variant="top" src="https://rabbil.com/storage/blogpost.jpg" />
                            <Card.Body className='projectCard'>
                                <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                <Card.Text className='projectCardDes'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2'>
                            <Card>
                            <Card.Img variant="top" src="https://rabbil.com/storage/blogpost.jpg" />
                            <Card.Body className='projectCard'>
                                <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                <Card.Text className='projectCardDes'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2'>
                            <Card>
                            <Card.Img variant="top" src="https://rabbil.com/storage/blogpost.jpg" />
                            <Card.Body className='projectCard'>
                                <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                <Card.Text className='projectCardDes'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Details</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

AllProjects.propTypes = {};

export default AllProjects;
