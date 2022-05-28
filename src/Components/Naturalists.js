import React, {Component} from 'react';
import {Image} from "react-bootstrap";

class Naturalists extends Component {
    render() {
        return (
            <div>
                <Image
                    className="mx-auto d-block"
                  //  width={350}
                    //height={350}
                    src="https://images.pexels.com/photos/906006/pexels-photo-906006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </div>
        );
    }
}

export default Naturalists;