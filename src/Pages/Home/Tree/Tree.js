import React from 'react';
import { Link } from 'react-router-dom';
import './Tree.css';

const Tree = (params) => {
    const{_id, img, name, description, price, height} = params.tree;

    return (
        <div className="trees-card col-md-6 col-lg-4 gy-4 gx-4">
            <div className="card custom-tree-card text-start" data-aos="fade-up">
                <img src={img} className="card-img-top rounded-0" height="350px" alt="..." />
                <div className="card-body custom-body">
                    <h4 className="card-title text-white">{name}</h4>
                    <h5 className="card-text price mt-4"> <span><i className="fas fa-dollar-sign"></i> {price}/MRP</span> <span className="bg-danger text-white px-2 py-1 rounded small">{height}</span> </h5>
                    <p className="card-text text-white my-4">{description.slice(0,100)}...</p>
                    <Link to ={`/order/${_id}`}>
                        <button className="btn w-100 custom-button text-white">Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tree;