import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JyA4XFirDDiSweA5Cc6khdav4LT08o2FPsi2qq3dnMWQShR8gXPCJATkpLq1bJRmlXiu0VmdKgpYEChEJDcbtVp00OS1OrMZK');

const Payment = () => {
    const {orderId} = useParams();
    const [order, setOrder] = useState({});
    useEffect( () => {
        fetch(`https://enigmatic-falls-65790.herokuapp.com/orders/${orderId}`)
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [orderId])
    return (
        <div>
            <h2 className='text-success'>Please Pay for: {order.model}</h2>
            <h4 className='text-black mb-3'>Net Payable: ${order.price}</h4>
            <h4 className='text-danger mb-3'>Please Enter Your Card Number</h4>
            {order?.price && <Elements stripe={stripePromise}>
                <CheckoutForm order={order} ></CheckoutForm>
            </Elements>}
        </div>
    );
};

export default Payment;