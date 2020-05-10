import React from "react";
import { useAuth } from "../context/auth";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

function Admin(props) {
    const { setAuthTokens } = useAuth();

    function logOut() {
        setAuthTokens();
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                Admin Page
                <Button onClick={logOut()} variant="primary" type="submit">
                    Log Out
                </Button>
            </Row>
        </Container>
    );
}

export default Admin;