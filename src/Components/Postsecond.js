import React, {Component} from 'react';
import {Button, Card, Image} from "react-bootstrap";

class Postsecond extends Component {
    render() {
        return (
            <div>
                <Image
                    className="mx-auto d-block"
                    width={350}
                    height={350}
                    src="https://matla-flowers.com.ua/image/cache/webp/catalog/foto-tovarov/128/Giacint_Woodstock.1-1000x1000.webp"
                />
                <Card className="m-4 text-center" bg="light" border="primary">
                    <Card.Body>
                        <Card.Title>Гіацинт Woodstock</Card.Title>
                        <Card.Text>
                            Гіацинт малинового кольору стане саме тим яскравим елементом вашого саду, який подарує
                            сонячний настрій та створить теплу атмосферу.
                            Висаджуючи його в саду або на клумбі варто дотримуватись відстані між рослинами у 15-20 см.
                            Висаджують гіацинт в період з вересня по листопад. Садити квітку потрібно в місцевості,
                            що добре освітлена сонцем.
                            Зацвітає гіацинт уже в березні - на початку квітня.
                            Якщо ви обираєте для себе варіант висадки квітки вдома, то варто пам’ятати, що цвіте рослина
                            при температурі від +10 до +20 градусів.
                            При вищій температурі квітка зацвіте раніше і період її цвітіння скоротиться. При
                            оптимальній температурі гіацинт Woodstock буде цвісти від 2-х до 4-х тижнів.
                            <p>Джерело: https://matla-flowers.com.ua/bulbs/hyacinth/giacint-woodstock</p>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Postsecond;