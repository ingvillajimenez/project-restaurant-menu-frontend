import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Signup extends React.Component {
    handleSignup = (e) => {
        e.preventDefault();

        const API_URL = 'http://localhost:3001/api/v1';

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
        .then(data => {
            console.log(data);
            this.props.history.push('/')
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