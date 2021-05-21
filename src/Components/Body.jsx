import React from "react";
import IM1 from "../img/IM1.jpg";
import IM2 from "../img/IM2.jpg";
import IM3 from "../img/IM3.jpg";
import {Carousel} from 'react-bootstrap';

function Body(){
    return(
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img  className="d-block w-100"
                        src={IM1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src={IM2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src={IM3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Body;