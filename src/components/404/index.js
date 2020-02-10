import React from 'react';
import './404.css';
import {Container, Row, Col, Alert,Button,Image  } from 'react-bootstrap';
import {Link} from "react-router-dom";
class NoMatch extends  React.Component{
    render(){
        return(
                <Container>
                    <Row>
                        <Col className="col-md-12">
                            <div className="error-template">
                                <h1>
                                    Oops!</h1>
                                <h2>
                                    404 Not Found</h2>
                                <div className="error-details">
                                    Sorry, an error has occured, Requested page not found!
                                </div>
                                <div className="error-actions">
                                    <Link to="/">Home</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </Container>	
        );
    }
}
export default NoMatch;
