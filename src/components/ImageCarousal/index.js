import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 
import './style.css';
const ImageCarousal = (props) => {
    return (
        <div className="container-fluid">
            <Carousel controls={true} indicators={true} nextLabel="" prevLabel=""  interval={null} fade>
            {props.carousalData.map((x)=> 
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={x.imageLink}
                    alt={x.imageName}
                />
                <Carousel.Caption>
                    <p>{x.imageContent}</p>
                </Carousel.Caption>
                </Carousel.Item>
            )}
            </Carousel>
    </div>

    );
};

export default ImageCarousal;