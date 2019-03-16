import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
//NavFunctionality
import { BrowserRouter } from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
//Images
import Logo from '../../images/navbar_logo.png';
const Img = <img alt="logo" src={Logo} height="58px" width="357px"></img>;

class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar expand="md">
                    <NavbarBrand href="/">
                        {Img}
                    </NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <div className="header_div">
                                <NavItem>
                                    <NavLink className="nav-link" href="/#About" to="/#About" activeClassName="selected">About</NavLink>
                                </NavItem>
                            </div>
                            <div className="header_div">
                                <NavItem>
                                    <NavLink className="nav-link" href='/#How' to="/#How">Product</NavLink>
                                </NavItem>
                            </div>
                            <div className="header_div">
                                <NavItem>
                                    <NavLink className="nav-link" href='/#Team' to="/#Team">Team</NavLink>
                                </NavItem>
                            </div>
                            <div id="contactLinkBox">
                                <NavItem>
                                    <NavLink className="nav-link" id="contact-link" href="/#Contact" to="/#Contact">Contact Us</NavLink>
                                </NavItem>
                            </div>
                        </Nav>
                    </Collapse>
                </Navbar>
            </BrowserRouter>
        );
    }
}


export default Header;