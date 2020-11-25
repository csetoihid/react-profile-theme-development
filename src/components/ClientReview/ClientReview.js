import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';


class ClientReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myData: []
        };
    }


    componentDidMount(){
        RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
            this.setState({myData: result}); 
        }).catch(error=>{
            this.setState({myData: []}); 
        });
    }

    render() {

        const myList= this.state.myData;
        const myView = myList.map(list=>{
            return <div>
                      <Row>
                          <Col>
                          <Image className='circleImg' src={list.client_img}/>
                          <h1 className='serviceName'>{list.client_name}</h1>
                          <p className='des'>{list.client_review}</p>  
                          </Col>
                      </Row>
                    </div>
        
        });


        var settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            vertical: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return (
            <Fragment>
                <Container className='text-center videoCard mb-5'>
                <h1 className='text-center serviceMainTitle mt-4'>Client saya</h1>
                <Slider {...settings}>

                    {myView}


                </Slider>
                </Container>
            </Fragment>

        );
    }
}

ClientReview.propTypes = {};

export default ClientReview;
