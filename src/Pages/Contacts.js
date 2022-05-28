import React, {Component} from 'react';
import {Image} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <div>
                <Image
                    className="mx-auto d-block"
                    width={750}
                    height={550}
                    src="https://images.pexels.com/photos/1686974/pexels-photo-1686974.jpeg?auto=compress&cs=tinysrgb&w=1600"
                />
                <h2 className=" text-center">Ви завжди можете нас знайти за адресами:</h2>
                <ul>
                    <li><h5>вул. Нижня горова, 12</h5></li>
                    <li><h5>вул. Героїв України, 10</h5></li>
                    <li><h5> вул. Незалежності, 15</h5></li>
                </ul>
                <h2 className=" text-center">Та зателефонувати нам в будь який зручний для Вас час</h2>
                <ul>
                    <li><h5>+380 73 584 56 85</h5></li>
                    <li><h5>+380 50 584 56 85</h5></li>
                    <li><h5>+380 96 584 56 85</h5></li>
                </ul>
            </div>
        );
    }
}

export default Contacts;