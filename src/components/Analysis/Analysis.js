import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';
  import AppUrl from '../../RestApi/AppUrl';
  import RestClient from '../../RestApi/RestClient';
  import ReactHtmlParser from 'react-html-parser';


class Analysis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            desc : ''
        };
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.ChartData).then(result=>{
            this.setState({data: result}); 
        }).catch(error=>{
            this.setState({data: []}); 
        });

        RestClient.GetRequest(AppUrl.HomeTech).then(result=>{
            this.setState({desc: result[0]['tech_des']}); 
        }).catch(error=>{
            this.setState({desc: []}); 
        });
    }




    render() {
        return (
            <Fragment>
                <Container>
                <h1 className='text-center serviceMainTitle'>Technology used</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey='x_data'></XAxis>
                                    <Tooltip></Tooltip>
                                    <Bar dataKey="y_data" fill="rgba(0,115,230,0.8)" />
                                </BarChart> 
                            </ResponsiveContainer>                     
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className='text-justify des'>
                                {ReactHtmlParser(this.state.desc)}
                            </p>
                        </Col>                        
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

Analysis.propTypes = {};

export default Analysis;
