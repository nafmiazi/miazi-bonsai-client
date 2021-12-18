import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import './Order.css';

const Order = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [order, setOrder] = useState({});

    useEffect( () => {
        fetch(`https://enigmatic-falls-65790.herokuapp.com/trees/${id}`)
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = "Pending";
        axios.post('https://enigmatic-falls-65790.herokuapp.com/orders', data)
          .then(res => {
            if(res.data.insertedId){
                window.confirm("Your Order is Confirmed");
                reset();
            }
          })
    };

    return (
        <div className="row p-3 p-md-5 m-0 bg-white">
            <div className="text-center my-md-3">
                <h1>PLACE ORDER</h1>
                <p style={{color: 'rgb(1, 151, 119)'}}>We are very much excited to have you with us. Thanks for your support</p>
            </div>

            <div className="col-lg-6 text-black p-3 p-md-4 mt-5 bg-light border border-success border-1">
                <div className="text-center">
                    <img className="destination-img border border-success border-2" src={order.img} width="100%" height="500px" alt="" />
                </div>
                <div className="text-start">
                    <h2 style={{color: 'rgb(2, 11, 119)'}} className="pt-lg-3">{order.name}</h2>
                    <h6 className="text-success pt-lg-3">{order.description}</h6>
                </div>
            </div>

            <div className="col-lg-6 mt-5 bg-light text-center border border-success border-1">
                    <div className="mt-lg-5 py-5 py-md-0">
                        <h3 className="mt-lg-5 text-black">Please Add Few Informations</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true })} value={user?.displayName || ''} className="w-75 mt-4 rounded border-0 bg-dark border border-warning text-white py-2" readOnly/> <br />
                            <input {...register("email", { required: true })} value={user?.email || ''} className="w-75 mt-4 rounded border-0 bg-dark text-white py-2" readOnly/> <br />
                            <input {...register("model", { required: true })} value={order?.name || ''} className="w-75 mt-4 rounded border-0 bg-dark text-white py-2" readOnly/> <br />
                            <input {...register("price", { required: true })} value={order?.price || ''} className="w-75 mt-4 rounded border-0 bg-dark text-white py-2" readOnly/> <br />
                            <input {...register("condition", { required: true })} value={order?.height || ''} className="w-75 mt-4 rounded border-0 bg-dark text-white py-2" readOnly/> <br />
                            <textarea {...register("address", { required: true, maxLength: 40 })} placeholder="Put Your Address" className="w-75 mt-4 color rounded border-0 bg-dark text-white py-2"/> <br />
                            <input {...register("phone", { required: true })} placeholder="Put Your Phone Number"  className="w-75 mt-4 color rounded border-0 bg-dark text-white py-2"/> <br />
                            <input className="btn btn-warning mt-4 w-75" type="submit" value="Confirm Order"/>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default Order;