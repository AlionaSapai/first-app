import React, {Component} from 'react';
import {Button, Card, Image} from "react-bootstrap";

class Postthird extends Component {
    render() {
        return (
            <div>
                <Image
                    className="mx-auto d-block"
                    width={350}
                    height={350}
                    src="https://vseroste.com.ua/uploads/shop/products/main/10d33b9c-afca-11ea-af9f-9f4d08b8be87.jpg"
                />
                <Card className="m-4 text-center" bg="light" border="primary">
                    <Card.Body>
                        <Card.Title>Крокус Ruby Giant</Card.Title>
                        <Card.Text>
                            Ботанічний крокус Ruby Giant з градієнтним забарвленням пелюсток, від білого у серцевини до
                            фіолетового, у кінчиків виглядає дуже ніжно і яскраво. Розпускаються квіти в перші ж дні
                            весни, коли сходить сніг і з'являються перші проталини, тому садити цибулини найкраще на
                            найтепліші і освітлені місця в саду. Висота квітки 8-10 см, діаметр 4 см.
                            <p>Джерело: https://vseroste.com.ua/krokus-ruby-giant-5-sht</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Postthird;