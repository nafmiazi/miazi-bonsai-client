import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';

const Footer = () => {
    // Display Footer section
    return (
       <>
            <div className="row custom-footer m-0 p-2 p-md-5 pb-3">
                <div className="col-lg-4 text-start p-3 pt-2">
                    <img src={logo} width="60px" className="me-2 mb-4 title" alt=""/>
                    <p className="mb-4">Miazi Bonsai is a trusted name in Bonsai Selling Service, who is always at your side and your satisfaction is our first priority.  We believe in your happiness not in over profit.Stay With Us.</p>
                    <h6>Follow Us On</h6>
                    <div>
                        <i className="fab fa-facebook-f me-3 icon-name"></i>
                        <i className="fab fa-twitter me-3 icon-name"></i>
                        <i className="fab fa-linkedin-in me-3 icon-name"></i>
                        <i className="fab fa-pinterest-p me-3 icon-name"></i>
                        <i className="fab fa-instagram icon-name"></i>
                    </div>
                </div>
                <div className="col-lg-2 text-start">
                    <h4 className="icon-name mb-4">Payment Methods</h4>
                    <i class="fab fa-3x fa-cc-visa text-primary me-2"></i>
                    <i class="fab fa-3x fa-cc-mastercard text-danger me-2"></i>
                    <i class="fab fa-3x fa-cc-paypal text-success me-2"></i>
                    <i class="fab fa-3x fa-cc-amex text-black me-3"></i>
                    <i class="fab fa-3x fa-cc-stripe text-danger me-2"></i>
                    <i class="fab fa-3x fa-bitcoin text-primary"></i>
                    
                </div>
                <div className="col-lg-3 text-start">
                    <h4 className="icon-name mb-4 ms-md-3">Contact Us</h4>
                    <h6 className="lh-lg"><i className="fas fa-map-marker-alt ms-md-3 me-md-2 icon-name"></i> 250/A, O R Nezam Road, Ctg.</h6>
                    <h6 className="lh-lg"><i className="fas fa-envelope ms-md-3 me-md-2 icon-name"></i> naf71bd@gmail.com </h6>
                    <h6 className="lh-lg"><i className="fas fa-phone-alt ms-md-3 me-md-2 icon-name"></i> +88 012345 6789 </h6>
                    <h6 className="mt-3 icon-name ms-md-3 me-md-2">Feel free to contact with us</h6>
                </div>
                <div className="col-lg-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8563456176425!2d91.82261121443021!3d22.359052446411006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8836cb84b31%3A0xb85e08dab5fa7695!2sO.R.%20Nizam%20Rd%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1639808111141!5m2!1sen!2sbd" title="map" width="100%" height="80%" style={{border:0, borderRadius: '10px'}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            
            <h6 className="mb-0 py-3 bg-black text-white text-center">Copyright <i className="far fa-copyright"></i> 2021 Nurul Afsar Fahim</h6>
       </>
    );
};

export default Footer;