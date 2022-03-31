import React from "react";
import {Carousel} from "react-bootstrap";
import {Component} from "react";

import Fusciello from '../assets/Fusciello.jpg';
import Medeiros from '../assets/pexels-gustavo-medeiros-3929964.jpg';
import Keawnet from '../assets/pexels-siritas-keawnet-3718388.jpg';
import Boltneva from '../assets/pexels-valeria-boltneva-101472.jpg';
import Iriser from '../assets/pexels-irina-iriser-723494.jpg';


class CarouselBoxHk extends Component {
    render() {
        return (
        <Carousel>

            <Carousel.Item>
                <img
                    className= "d-block w-100"
                    src={Fusciello}
                    alt="Flowers"/>
                <Carousel.Caption>
                    <h3>Flowers image</h3>
                    <p>Фото автора Anna Fusciello з Pexels</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className= "d-block w-100"
                    src={Medeiros}
                    alt="Flowers"/>
                <Carousel.Caption>
                    <h3>Flowers image</h3>
                    <p>Фото автора Gustavo Medeiros з Pexels</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className= "d-block w-100"
                    src={Keawnet}
                    alt="Flowers"/>
                <Carousel.Caption>
                    <h3>Flowers image</h3>
                    <p>Фото автора Siritas Keawnet з Pexels</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className= "d-block w-100"
                    src={Boltneva}
                    alt="Flowers"/>
                <Carousel.Caption>
                    <h3> Flowers image</h3>
                    <p>Фото автора Valeria Boltneva з Pexels</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className= "d-block w-100"
                    src={Iriser}
                    alt="Flowers"/>
                <Carousel.Caption>
                    <h3> Flowers image</h3>
                    <p>Фото автора Irina Iriser з Pexels</p>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
        );
    }
}

export default CarouselBoxHk;