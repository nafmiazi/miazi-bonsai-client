import React, { useEffect, useState } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect( () => {
        fetch('https://enigmatic-falls-65790.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setAllOrders(data));
    })

    const handleDelete = id => {
        const url = `https://enigmatic-falls-65790.herokuapp.com/orders/${id}`;
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert("Are you sure you want to cancel your order?");
            }
        })
    }

    const handleUpdateStatus = id => {
        const url = `https://enigmatic-falls-65790.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allOrders)
        })
        .then()
    }

    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />
    }
    return (
        <div>
            <div className="text-white row m-0">
                <div className="col-lg-9 mx-auto">
                    <h2 className="text-center my-lg-4">Manage All Clients Orders</h2>
                    <Table striped bordered hover responsive>
                        <thead className="table-secondary">
                            <tr>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrders.map(orders => <tr className="table-secondary" key={orders._id}>
                                    <td>{orders.name}</td>
                                    <td>{orders.model}</td>
                                    <td>{orders.email}</td>
                                    <td>{orders.address}</td>
                                    <td>{orders.price}</td>
                                    <td>{orders.status}</td>
                                    <td className="text-center"><button onClick={() => handleDelete(orders._id)} className="btn btn-sm btn-danger me-2 mb-2 mb-md-0">Cancel Orders</button><button onClick={() => handleUpdateStatus(orders._id)} className="btn btn-sm btn-warning">Update</button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;