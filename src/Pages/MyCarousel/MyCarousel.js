import React from 'react';
import "./MyCarousel.css"
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
    return (
        <div>
            {/* start carusel */}
            <Carousel className="w-75 mx-auto">
            <Carousel.Item>
                <img
                className="d-block w-100 caruselImage"
                src="https://www.tutorialrepublic.com/lib/images/css-illustration.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Learn CSS3 With us</h3>
                <p>CSS is a computer language for laying out and structuring web pages.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 caruselImage"
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200711122552/Python-Programming-Language.png"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Learn PYTHON With us</h3>
                <p>Python is a computer programming language often used to build websites and software.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 caruselImage"
                src="https://www.tutorialrepublic.com/lib/images/html-illustration.png"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Learn HTML5 With us</h3>
                <p>HTML elements are the building blocks of HTML pages.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default MyCarousel;