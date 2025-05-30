import React, { Component } from "react";
import "../css/NavComponent.css";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    Collapse,
    NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import ico from "../assets/images/Tensors nobg.png";

class Top extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            isNavOpen: false,
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark className="navbar" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/#/home">
                            <img src={ico} alt="icon" height="35px" />
                        </NavbarBrand>
                        <NavbarToggler
                            className="NavbarToggler"
                            onClick={this.toggleNav}
                        />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar classNam="navleft">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        {" "}
                                        HOME
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        target="_blank"
                                        to="/jeeadv"
                                    >
                                        {" "}
                                        JEE ADV 
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        target="_blank"
                                        to="/jee"
                                    >
                                        {" "}
                                        JEE MAIN
                                    </NavLink>
                                </NavItem>
                                



                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        target="_blank"
                                        to="https://exam.tensors.in/learn"
                                    >
                                        {" "}
                                        TENSORS EXAM
                                    </NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/testseries"
                                    >
                                        {" "}
                                        TEST SERIES
                                    </NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to="/mentorship"
                                    >
                                        {" "}
                                        MENTORSHIP
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/josaa">
                                        {" "}
                                        COUNSELLING
                                    </NavLink>
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
