import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Signup extends React.Component {
    state = {
        error: {
            status: false,
            message: ''
        }
    }

    handleSignup = (e) => {
        e.preventDefault();

        const API_URL = 'https://restaurant-menu-backend.herokuapp.com/api/v1';

        fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
                password: e.target.password.value
            })
        })
        .then(response => response.json())
        .then(res => {
            if(typeof res.data !== 'undefined'){
                this.props.history.push('/login');
            } else {
                this.setState({
                    error: {
                        status: true,
                        message: res.message
                    }
                })
            }
        })
        .catch(error => alert(error));
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form onSubmit={ this.handleSignup }>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control name='name' type="text" placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control name='phone' type="text" placeholder="Enter phone number" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" />
                            </Form.Group>
                            {this.state.error.status && <p>{ this.state.error.message }</p>}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default Signup;