import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import Logo from '../../images/navbar_logo.png';
const Img = <img alt="logo" src={Logo} height="58px" width="357px"></img>;

class Header extends React.Component {
    render() {
        return (
                <Navbar expand="md">
                    <NavbarBrand href="/">
                        {Img}
                    </NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <div className="header_div">
                                <NavItem>
                                    <NavLink href='/About.html'>About</NavLink>
                                </NavItem>
                            </div>
                            <div className="header_div">
                                <NavItem>
                                    <NavLink href='/Product.html'>Product</NavLink>
                                </NavItem>
                            </div>
                            <div className="header_div">
                                <NavItem>
                                    <NavLink href='/MeetTheTeam.html'>Meet The Team</NavLink>
                                </NavItem>
                            </div>
                            <div id="contactLinkBox">
                                <NavItem>
                                    <NavLink id="contactLink" href="/Contact.html">Contact Us</NavLink>
                                </NavItem>
                            </div>
                        </Nav>
                    </Collapse>
                </Navbar>
        );
    }
}


export default Header;