import React from 'react';
import './Info.css';

const Info = () => {
    return (
        <div className="row m-0 info bg-color text-black py-2">
            <div className="col-lg-6">
                <i className="fab fa-facebook-f me-3 text-black"></i>
                <i className="fab fa-twitter me-3 text-black"></i>
                <i className="fab fa-linkedin-in me-3 text-black"></i>
                <i className="fab fa-pinterest-p me-3 text-black"></i>
                <i className="fab fa-instagram text-black"></i>
            </div>
            <div className="col-lg-6 text-black">
                <span className="me-md-5">+1 828-376-0532</span>
                <span className="fw-bold">miazibonsai@support.com</span>
            </div>
        </div>
    );
};

export default Info;