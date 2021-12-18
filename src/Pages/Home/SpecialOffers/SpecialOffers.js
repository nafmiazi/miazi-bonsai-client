import React from 'react';
import offer from '../../../images/specialOffer/specialOffer.jpg';
import { Link } from 'react-router-dom';

const SpecialOffers = () => {
    return (
        <div id="offers">
            <div className="bg-white py-4 mb-5">
                <div className="container latest-section">
                    <div className="row latest">
                        <div className="col-lg-5 text-start pt-md-5 mb-3 mb-md-0">
                            <h5 style={{color: 'rgb(1, 151, 119)'}}>SPECIAL OFFERS</h5>
                            <h1 className="fw-normal">MIAZI'S BONSAI</h1>
                            <h1 className="text-warning">GIFT BOXES</h1>
                            <h6 className="text-muted">From planter materials to style options, discover which planter is best for your space.</h6>
                            <Link to='/explore'>
                                <button className="btn btn-md btn-outline-success mt-md-3">Explore More</button>
                            </Link>
                        </div>

                        <div className="col-lg-7">
                            <div className="card bg-dark text-white border-0">
                                <img src={offer} className="card-img" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;