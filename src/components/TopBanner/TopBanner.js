import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Button, Col } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

class TopBanner extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: '...',
            subtitle: '...'
        };
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
            this.setState({title: result[0]['home_title'], subtitle: result[0]['home_subtitle']}); 
        }).catch(error=>{
            this.setState({title: '???', subtitle: '???'}); 
        });
    }


    render() {
        return (
            <Fragment>
                <Container fluid className='topBannerFix p-0'>
                    <div className='topBannerOverlay'>
                        <Container className='topBannerContent'>
                            <Row>
                                <Col>
                                    <h1>{this.state.title}</h1>
                                    <h4>{this.state.subtitle}</h4>
                                    <a href='//www.linkedin.com/in/toihid/'> <Button variant="primary">Read more</Button></a>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

TopBanner.propTypes = {};

export default TopBanner;
