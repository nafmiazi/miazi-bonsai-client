import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const {user, isLoading} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('https://enigmatic-falls-65790.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => {
            const matchedEmail = data.filter(singleData => singleData?.email === user?.email)
            setOrders(matchedEmail);
        });
    })

    const handleDelete = id => {
        const url = `https://enigmatic-falls-65790.herokuapp.com/orders/${id}`;
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert("Are you sure you want to cancel your order?")
            }
        })
    }

    if(isLoading){
        return <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />
    }

    return (
        <div className="text-primary row m-0">
                <div className="col-lg-9 mx-auto">
                    <h4 className="text-center my-lg-4">Your Orders</h4>
                    <Table striped bordered hover responsive>
                        <thead className="table-secondary">
                            <tr>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr className="table-secondary" key={order._id}>
                                    <td>{order.name}</td>
                                    <td>{order.model}</td>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    <td>{order.price}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        {order.payment ? 
                                        'Paid' :
                                        <div>
                                            <button onClick={() => handleDelete(order._id)} className="btn btn-sm btn-danger me-2">
                                                <i class="fas fa-times"></i>
                                            </button>
                                            <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-sm btn-success">Pay</button></Link>
                                        </div>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
    );
};

export default MyOrder;