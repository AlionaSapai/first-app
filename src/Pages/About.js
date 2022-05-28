import React, {Component} from 'react';
import Tab from "react-bootstrap/Tab";
import {Container} from "react-bootstrap";
import {Col,Nav, Row} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Дизайн</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Команда</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Композиції</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Інтер'єр</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Екстер'єр</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <p className=" text-center"> <h4>Ми працюємо з кожним замовленням вкладаючи частинку душі </h4></p>
                                    <img className="d-block w-100"
                                     src="https://images.pexels.com/photos/3766221/pexels-photo-3766221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                     alt="picture one"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p className=" text-center"> <h4>І все таки разом ми - сила!</h4></p>
                                    <img className="d-block w-100"
                                         src="https://images.pexels.com/photos/5409735/pexels-photo-5409735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                         alt="picture two"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p className=" text-center"> <h4>Краса обов'язково врятує світ</h4></p>
                                    <img className="d-block w-100"
                                         src="https://images.pexels.com/photos/4466544/pexels-photo-4466544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                         alt="picture three"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <p className=" text-center"> <h4>І в будинку значно затишніше</h4></p>
                                    <img className="d-block w-100"
                                         src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                         alt="picture fourth"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <p className="text-center"><h4>Прикрасимо так, щоб обов'язково хотілось завітати</h4></p>
                                    <img className="d-block w-100"
                                         src="https://images.pexels.com/photos/302588/pexels-photo-302588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                         alt="picture fifth"/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;