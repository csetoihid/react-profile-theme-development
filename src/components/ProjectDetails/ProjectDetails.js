import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

class ProjectDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectId : props.id,
            img_2: '',
            short_des : '',
            features : '',
            project_name : '',
            live_preview : ''
        };
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.ProjectDetails+this.state.projectId).then(result=>{
            this.setState({img_2: result[0]['img_2']}); 
            this.setState({short_des: result[0]['short_des']}); 
            this.setState({features: result[0]['features']}); 
            this.setState({project_name: result[0]['project_name']}); 
            this.setState({live_preview: result[0]['live_preview']}); 
             
        }).catch(error=>{
            this.setState({short_des: ''}); 
        });
    } 

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='p-4'>
                            <Image fluid src={this.state.img_2} ></Image>
                        </Col>
                        <Col lg={6} md={6} sm={12} className='p-4' >
                            <h2> {this.state.project_name}</h2>
                            <p>{this.state.short_des}</p>
                                {ReactHtmlParser(this.state.features)}
                                <a  href={this.state.live_preview}><Button variant="primary">Live preview</Button></a>
                        </Col>                       
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

ProjectDetails.propTypes = {};

export default ProjectDetails;
