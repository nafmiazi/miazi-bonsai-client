import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banners/banner1.jpg';
import banner2 from '../../../images/banners/banner2.jpg';
import banner3 from '../../../images/banners/banner3.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" height="520px" src={banner1} alt="First slide"/>
                    <Carousel.Caption>
                        <div className="banner1 text-start p-5 container">
                            <h4 className="text-color">Get Ready to Grab Yours</h4>
                            <h1 className="text-warning my-3">FIND YOUR BONSAI</h1>
                            <h4 className="text-color my-3 my-md-0">Kids aren't bonsai. Maybe instead of trying to make them beautiful to the rest of the world, you should just love them and let them grow.</h4>
                            <Link to='/explore'>
                                <button className="btn btn-lg btn-outline-warning mt-md-3">Explore More</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img className="d-block w-100" height="520px" src={banner2} alt="Second slide"/>
                    <Carousel.Caption>
                        <div className="banner2 text-start p-5">
                            <h4 className="text-color">Enjoy The Bonsai With</h4>
                            <h1 className="text-info my-3">MIAZI'S BONSAI | The Name of Trust</h1>
                            <h4 className="text-color my-3 my-md-0">Kids aren't bonsai. Maybe instead of trying to make them beautiful to the rest of the world, you should just love them and let them grow.</h4>
                            <Link to='/explore'>
                                <button className="btn btn-lg btn-outline-info mt-md-3">Explore More</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" height="520px" src={banner3} alt="Third slide"/>
                    <Carousel.Caption>
                        <div className="banner3 text-start p-5">
                            <h4 className="text-color">Hey Bonsai Lovers Explore the</h4>
                            <h1 className="text-danger my-3">BEST PLACE FOR BUY BONSAI</h1>
                            <h4 className="text-color my-3 my-md-0">Kids aren't bonsai. Maybe instead of trying to make them beautiful to the rest of the world, you should just love them and let them grow.</h4>
                            <Link to='/explore'>
                                <button className="btn btn-lg btn-outline-danger mt-md-3">Explore More</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>   
        </>
    );
};

export default Banner;