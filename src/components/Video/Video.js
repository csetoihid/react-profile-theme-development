import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons' ;
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            videoDes: '...',
            videoUrl : '...'
        };
    }

modalClose=()=>this.setState({show:false});
modalOpen=()=>this.setState({show: true});

componentDidMount(){
    RestClient.GetRequest(AppUrl.HomeVideo).then(result=>{
        this.setState({videoDes: result[0]['video_des'], videoUrl: result[0]['video_url']}); 
    }).catch(error=>{
        this.setState({title: '???', subtitle: '???'}); 
    });
}

    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                        <Col className='videoCard'>
                            <h1 className='text-center serviceMainTitle'>How I do</h1>
                            <p className='videoDes'>
                            {this.state.videoDes}
                            </p>
                            <p ><FontAwesomeIcon onClick={this.modalOpen}className='playBtn' icon={faPlayCircle}/></p>
                        
                        </Col>
                    </Row>
                </Container>

                <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
                <Modal.Body>
                <Player>
                    <source src={this.state.videoUrl} />
                    <BigPlayButton position='center' />
                </Player>


                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={this.modalClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>



            </Fragment>

        );
    }
}

Video.propTypes = {};

export default Video;
