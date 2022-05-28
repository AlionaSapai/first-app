import React, {Component} from 'react';
import {Image} from "react-bootstrap";

class Developers extends Component {
    render() {
        return (
            <div>
                <Image
                    className="mx-auto d-block"
                    width={850}
                    height={550}
                    src="https://images.pexels.com/photos/6231583/pexels-photo-6231583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </div>
        );
    }
}

export default Developers;