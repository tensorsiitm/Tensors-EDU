import React, { Component} from 'react';
import '../css/NavComponent.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Top extends Component{
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
          isNavOpen: false,
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    render(){
        return(
            <React.Fragment>
                <Navbar dark className="navbar" expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/home">LOGO</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'> HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/testseries'> TEST SERIES</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/mentorship'> MENTORSHIP</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/josaa'> JOSAA</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/tensorsexam'> TENSORS EXAM</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/resources'> RESOURCES</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Top;