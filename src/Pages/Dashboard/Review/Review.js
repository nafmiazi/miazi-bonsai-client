import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        axios.post('https://enigmatic-falls-65790.herokuapp.com/reviews', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Review Added Successfully");
                reset();
            }
        })
    };

    return (
        <div className="add-destination p-4 my-5 w-50 m-auto">
            <>
                <h2 className="text-center text-warning mb-4">Add Your Review Here</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} value={user?.displayName || ''} readOnly/>
                    <textarea {...register("review", { required: true})} placeholder="Review"/>
                    <input type="float" {...register("rating", { min: 1, max: 5 })} placeholder="Ratings"/> <br />
                    <input className="btn btn-warning" type="submit" value="Add Review"/>
                </form>
            </>
        </div>
    );
};

export default Review;