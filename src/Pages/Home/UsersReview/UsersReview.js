import React, { useEffect, useState } from 'react';
import UserReview from '../UserReview/UserReview';

const UsersReview = () => {
    const [usersReview, setUsersReview] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-falls-65790.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setUsersReview(data));
    }, [])
    return (
        <div className="py-4">
            <div className="container">
                <div className="text-center my-md-5">
                    <h1>USERS REVIEW</h1>
                    <p style={{color: 'rgb(1, 151, 119)'}}>lets Explore what our honorable clients says about us</p>
                </div>
                <div className="row m-0 mb-5">
                    {
                        usersReview.map(userReview => <UserReview userReview={userReview} key={userReview._id} ></UserReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UsersReview;