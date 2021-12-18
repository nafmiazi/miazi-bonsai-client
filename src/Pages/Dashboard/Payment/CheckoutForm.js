import React, { useState, useEffect } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const CheckoutForm = ({order}) => {
    const {price, name, _id} = order;
    const stripe = useStripe();
    const elements = useElements();
    const{user} = useAuth();

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetch('https://enigmatic-falls-65790.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        setProcessing(true);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        } else {
            setError('');
            console.log(paymentMethod);
        }

        // Payment Intent
        const {paymentIntent, error: IntentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email: user.email
                },
              },
            },
          );

          if(IntentError){
              setError(IntentError.message);
              setSuccess('');
              setProcessing(false);
          }
          else{
            setError('');
            setSuccess('Your payment processed successfully');
            console.log(paymentIntent);
            setProcessing(false);

            // save to database
            const payment = {
                amount: paymentIntent.amount,
                transaction: paymentIntent.client_secret.slice('_secret')[0],
                created: paymentIntent.created,
                last4: paymentMethod.card.last4
            }
            const url = `https://enigmatic-falls-65790.herokuapp.com/order/${_id}`;
            fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payment)
            })
            .then((res) => res.json())
            .then((data) => console.log(data));
          }
    }

    return (
        <div className='row m-0'>
            <div className="col-lg-7 m-auto border border-warning py-5 bg-black">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '20px',
                        color: 'gold',
                        '::placeholder': {
                            color: 'white',
                        },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                    }}
                />
                {processing ? <CircularProgress></CircularProgress> :<button type="submit" className="btn btn-primary" disabled={!stripe || success}>
                    Pay ${price}
                </button>}
            </form>
            {
                error && <p style={{color : 'red'}}>{error}</p>
            }
            {
                success && <p style={{color : 'green'}}>{success}</p>
            }
            </div>
        </div>
    );
};

export default CheckoutForm;