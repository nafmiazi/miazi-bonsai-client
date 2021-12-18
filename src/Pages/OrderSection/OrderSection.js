import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Header/Navigation';
import Order from './Order/Order';

const OrderSection = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Order></Order>
            <Footer></Footer>
        </div>
    );
};

export default OrderSection;