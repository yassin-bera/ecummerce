import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

const SliderImage = ({ images }) => {
    return (
        <Carousel showThumbs={false} showStatus={false} showArrows={true}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default SliderImage;