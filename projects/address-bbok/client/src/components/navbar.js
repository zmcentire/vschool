import React from 'react';
import {withConcert} from '../show/concertprovider'
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle,
MDBDropdownMenu, MDBDropdownItem, MDBIcon} from 'mdbreact';

const Navbar = (props) => {
    return (
        <div>
            <MDBNavbar color="default-color" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Concert Calender</strong>
                </MDBNavbarBrand>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <MDBIcon icon="user" className="mr-1" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default" right>
                                {
                                    !props.token ?
                                        <React.Fragment>
                                            <MDBDropdownItem href="/signup">Sign Up</MDBDropdownItem>
                                            <MDBDropdownItem href="/login">Log In</MDBDropdownItem>
                                        </React.Fragment>
                                    :
                                        <React.Fragment>
                                            <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
                                            <MDBDropdownItem onClick={() => props.logout()}>Logout</MDBDropdownItem>
                                        </React.Fragment>
                                }
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        </div>
    )
}

export default withConcert(Navbar)