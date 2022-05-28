import React, {Component} from 'react';
import {Image} from "react-bootstrap";

class Marketers extends Component {
    render() {
        return (
            <div>
                <Image
                    className="mx-auto d-block"
                    width={650}
                    height={850}
                    src="https://images.pexels.com/photos/5410072/pexels-photo-5410072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </div>
        );
    }
}

export default Marketers;