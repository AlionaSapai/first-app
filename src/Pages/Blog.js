import React, {Component} from 'react';
import {Row, Col, Card, ListGroup, Button} from "react-bootstrap";



class Blog extends Component {
      render() {
        return (
            <div>
                <Row>
                    <Col md="9">
                        <div className="row">
                            <div className="col">
                                <Card className="m-4 text-center" bg="light" border="primary">
                                    <Card.Img
                                        variant="top"
                                        height='190px'
                                        src="https://donpion.ua/static/media/uploads/product/One_flower/rose-import/kahala/.thumbnails/kahala_.jpg/kahala_-0x700.jpg"
                                    />
                                    <Card.Body>
                                        <Card.Title>ТРОЯНДА КАХАЛА</Card.Title>
                                            <Card.Text>
                                                Кахала
                                            </Card.Text>
                                        <Button variant="primary"
                                                href={'/postfirst'}
                                                >Детальніше
                                        </Button>
                                    </Card.Body>
                                 </Card>
                            </div>

                            <div className="col">
                                <Card className="m-4 text-center" bg="light" border="primary">
                                    <Card.Img
                                        variant="top"
                                        height='190px'
                                        src="https://matla-flowers.com.ua/image/cache/webp/catalog/foto-tovarov/128/Giacint_Woodstock.1-1000x1000.webp"
                                    />
                                    <Card.Body>
                                        <Card.Title>Гіацинт Woodstock</Card.Title>
                                        <Card.Text>
                                            Woodstock
                                        </Card.Text>
                                        <Button variant="primary"
                                                href={'/postsecond'}
                                                >Детальніше
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>


                            <div className="col">
                                <Card className="m-4 text-center" bg="light" border="primary">
                                    <Card.Img
                                        variant="top"
                                        height='190px'
                                        src="https://vseroste.com.ua/uploads/shop/products/main/10d33b9c-afca-11ea-af9f-9f4d08b8be87.jpg"
                                    />
                                    <Card.Body>
                                        <Card.Title>Крокус Ruby Giant</Card.Title>
                                        <Card.Text>
                                            Ruby Giant.
                                        </Card.Text>
                                        <Button variant="primary"
                                                href={'/postthird'}
                                                >Детальніше
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col">
                                <Card className="m-4 text-center" bg="light" border="primary">
                                    <Card.Img
                                        variant="top"
                                        height='190px'
                                        src="https://dobrodar.ua/uploads/cache/Products/Product_images_40122/814799_w508.jpg"
                                    />
                                    <Card.Body>
                                        <Card.Title> Хризантема Ясода Ред</Card.Title>
                                        <Card.Text>
                                            Ясода Ред
                                        </Card.Text>
                                        <Button variant="primary"
                                                href={'/postfourth'}
                                                >Детальніше
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Категорії</h5>
                        <Card>
                            <ListGroup variant="flush" >
                                <ListGroup.Item>категорія 1</ListGroup.Item>
                                <ListGroup.Item>категорія 2</ListGroup.Item>
                                <ListGroup.Item>категорія 3</ListGroup.Item>
                                <ListGroup.Item>категорія 4</ListGroup.Item>
                                <ListGroup.Item>категорія 5</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Blog;
