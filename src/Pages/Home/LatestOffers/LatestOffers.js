import React from 'react';
import arrival1 from '../../../images/NewArrivals/arrival1.jpg';
import arrival2 from '../../../images/NewArrivals/arrival2.jpg';
import './LatestOffers.css';

const LatestOffers = () => {
    return (
        <div id="arrival">
            <div className="bg-white py-4 mb-5">
                <div className="container latest-section">
                    <div className="text-center my-md-5">
                        <h1>NEW ARRIVALS</h1>
                        <p style={{color: 'rgb(1, 151, 119)'}}>We announced some exciting news about our newly arrivaled Bonsai</p>
                    </div>
                    <div className="row latest row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card bg-dark text-white border-0" data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000">
                                <img src={arrival1} className="card-img" alt="..."/>
                                <div className="card-img-overlay pt-md-5 ps-md-4">
                                    <h5 className="card-title text-secondary text-start">NEW ARRIVAL</h5>
                                    <h3 className="card-text text-dark text-start">House Plants</h3>
                                    <h5 className="card-title text-secondary text-start">from</h5>
                                    <h3 className="card-text text-success text-start">$35.57</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card bg-dark text-white border-0" data-aos="fade-left" data-aos-offset="300" data-aos-duration="1000">
                                <img src={arrival2} className="card-img" alt="..."/>
                                <div className="card-img-overlay pt-md-5 ps-md-4">
                                    <h5 className="card-title text-secondary text-start">NEW ARRIVAL</h5>
                                    <h3 className="card-text text-dark text-start">Pothos Neon</h3>
                                    <h5 className="card-title text-secondary text-start">from</h5>
                                    <h3 className="card-text text-success text-start">$38.59</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestOffers;