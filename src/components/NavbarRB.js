import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class NavbarRB extends React.Component {
    handleLogout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Restaurant-Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Brand><Link to='/'>Home</Link></Navbar.Brand>
                        <Navbar.Brand><Link to='/profile'>Profile</Link></Navbar.Brand>
                        <Navbar.Brand><Link to='/dashboard'>Dashboard</Link></Navbar.Brand>
                        <Navbar.Brand><Link to='/signup'>Signup</Link></Navbar.Brand>
                        <Navbar.Brand><Link to='/login'>Login</Link></Navbar.Brand>
                        <Button onClick={ this.handleLogout }>Logout</Button>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default withRouter(NavbarRB);
