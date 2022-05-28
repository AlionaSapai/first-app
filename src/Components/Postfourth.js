import React, {Component} from 'react';
import {Button, Card, Image} from "react-bootstrap";

class Postfourth extends Component {
    render() {
        return (
            <div>
                <Image
                    className="mx-auto d-block"
                    width={350}
                    height={350}
                    src="https://dobrodar.ua/uploads/cache/Products/Product_images_40122/814799_w508.jpg"
                />
                <Card className="m-4 text-center" bg="light" border="primary">
                    <Card.Body>
                        <Card.Title> Хризантема Ясода Ред</Card.Title>
                        <Card.Text>
                            Хризантема Ясода Ред — багаторічна рослина із сімейства Айстрових. Сорт входить в
                            найпопулярнішу групу горщикових дрібноквіткових хризантем Jasoda. Кущ генетично компактний,
                            володіє сферичною формою, формує акуратні куполи темно-зеленого листя, виростає у висоту до
                            50 сантиметрів. Хризантема – одна з найбільш пізньоквітнучих культур, всюди поширених на
                            присадибних і дачних ділянках. З початку жовтня і до першого снігу з морозами хризантема
                            Ясода Ред суцільно вкривається незліченною кількістю напівмахрових квіток темно-червоного
                            кольору, що досягають в діаметрі 3-4 сантиметри. Їх пишне цвітіння виділяє
                            гіркувато-полиновий аромат. На даний час хризантеми Jasoda знаходяться на самому піку
                            садової моди і увага до них тільки збільшується. Відбувається це завдяки їх незвичайним
                            декоративним якостям. У хризантем Jasoda куляста форма куща і рясне цвітіння з дуже щільним
                            розташуванням квіток на стеблах. Вони чудово підходять для вирощування у вазонах, горщиках,
                            балконних ящиках або по краях клумб, де вони зможуть найбільш повно проявити всі свої переваги.
                            Ідеальна куля!
                            <p>Джерело: https://dobrodar.ua/catalog/mnogoletniki-kornevishcha/hrizantema/hrizantemy-
                                gorshechnye-melkocvetkovye/hrizantema-asoda-red-jasoda-red.html</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Postfourth;