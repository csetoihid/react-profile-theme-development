import React, {Fragment }from 'react';
import '../../asset/css/custom.css';
import { Col, Container, Row, Image, Navbar, Nav ,Brand,Toggle, Collapse, Link,NavDropdown,Item } from 'react-bootstrap';
import PropTypes from 'prop-types';
import NavLogoWhite from '../../asset/image/nav-logo-white.svg';
import NavLogoBlue from '../../asset/image/nav-logo-blue.svg';
import {NavLink} from 'react-router-dom';



class TopNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarTitle: 'navTitle',
            navLogo: NavLogoWhite,
            navVariant: 'dark',
            navBackground : 'navBackground',
            pageTitle: this.props.title
        };
    }

    onScroll=()=>{
        if(window.scrollY > 100){
            this.setState({navVariant: 'light',navBarTitle: 'navTitleScroll', navLogo: NavLogoBlue, navBackground: 'navBackgroundScroll'});
        }else{
            this.setState({navVariant: 'dark', navBarTitle: 'navTtile', navLogo: NavLogoWhite,navBackground: 'navBackground'});
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
    }

    componentDidMount(){
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar fixed='top' className={this.state.navBackground} collapseOnSelect expand="lg" bg="dark" variant={this.state.navVariant}>
                <Navbar.Brand href="#home" className={this.state.navBarTitle}>
                    <NavLink to='/'>
                        <Image src={this.state.navLogo} className='p-2'/> Toihid
                    </NavLink> 
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link><NavLink exact activeStyle={{color:'#008aee'}}  to="/">HOME</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/service">SERVICES</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/course">COURSES</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/protfolio">PROTFOLIO</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/contact">CONTACT</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/about">ABOUT</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>                
            </Fragment>
        );
    }
}

TopNavigation.propTypes = {};

export default TopNavigation;
