import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <img style={{ width: "100%" }} src="images/1.jpg" alt="caro1" />
            {/* <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000} >
                <div className="">
                    <img loading="lazy" src="images/1.jpg" alt="caro1" />
                </div>
                <div className="">
                    <img loading="lazy" src="images/2.jpg" alt="caro2" />
                </div>
                <div className="">
                    <img loading="lazy" src="images/3.jpg" alt="caro3" />
                </div>
            </Carousel> */}
        </div>
    )
}

export default Banner
