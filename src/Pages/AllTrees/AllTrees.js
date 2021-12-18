import React, { useEffect, useState } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const AllTrees = () => {
    const [allTrees, setAllTrees] = useState([]);

    useEffect( () => {
        fetch('https://enigmatic-falls-65790.herokuapp.com/trees')
        .then(res => res.json())
        .then(data => setAllTrees(data));
    })

    const handleDelete = id => {
        const url = `https://enigmatic-falls-65790.herokuapp.com/trees/${id}`;
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert("Are you sure you want to remove this item?");
            }
        })
    }

    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />
    }

    return (
        <div>
            <div className="text-danger row m-0">
                <div className="col-lg-7 mx-auto">
                    <h2 className="text-center my-lg-4">Manage All Trees</h2>
                    <Table striped bordered hover responsive>
                        <thead className="table-secondary">
                            <tr>
                                <th className="text-start">Name</th>
                                <th>Price</th>
                                <th>Height</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allTrees.map(trees => <tr className="table-secondary" key={trees._id}>
                                    <td className="text-start">{trees.name}</td>
                                    <td>{trees.price}</td>
                                    <td className="text-center">{trees.height}</td>
                                    <td className="text-center"><button onClick={() => handleDelete(trees._id)} className="btn btn-sm btn-danger me-2 mb-2 mb-md-0">Cancel Trees</button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default AllTrees;