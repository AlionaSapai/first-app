import React, {Component} from 'react';

import CarouselBoxHk from "../Components/CarouselBoxHk";
import {Button, Card, Container,} from "react-bootstrap";



export class Home extends Component {

    render() {
        return (
            <div>
                <CarouselBoxHk/>
                <Container>
                    <h2 className="text-center m-4">Наша команда</h2>
                    <div className="row">
                        <div className="col">
                           <Card className="m-4 text-center" bg="light" border="primary">
                               <Card.Img
                                   variant="top"
                                   src="https://images.pexels.com/photos/6624218/pexels-photo-6624218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                   />
                               <Card.Body>
                                   <Card.Title>Ідейні вдохновителі</Card.Title>
                                   <Card.Text>
                                       Разом- ми сила!
                                   </Card.Text>
                                   <Button variant="primary"
                                           href={'/developers'}
                                   >Про вдохновителів</Button>
                               </Card.Body>
                           </Card>
                        </div>

                        <div className="col">
                            <Card className="m-4 text-center" bg="light" border="primary">
                                <Card.Img
                                    variant="top"
                                    src="https://images.pexels.com/photos/5409733/pexels-photo-5409733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                />
                                <Card.Body>
                                    <Card.Title>Флористи</Card.Title>
                                    <Card.Text>
                                        Нас надихає природа
                                    </Card.Text>
                                    <Button variant="primary"
                                            href={'/naturalists'}>
                                        Про флористів</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col">
                            <Card className="m-4 text-center" bg="light" border="primary">
                                <Card.Img
                                    variant="top"
                                    src="https://images.pexels.com/photos/6764320/pexels-photo-6764320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                />
                                <Card.Body>
                                    <Card.Title>Маркетологи</Card.Title>
                                    <Card.Text>
                                        Ми знаємо, що Вам потрібно
                                    </Card.Text>
                                    <Button variant="primary"
                                            href={'/marketers'}
                                    >Про маркетологів
                                    </Button>
                                </Card.Body>
                            </Card>

                        </div>

                    </div>
                </Container>

            </div>

        );
    }
}

export default Home;