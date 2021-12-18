import React from 'react';
import Rating from 'react-rating';
import './UserReview.css'

const UserReview = (params) => {
    const{name, review, rating} = params.userReview;

    return (
        <div className="trees-card col-md-6 col-lg-4 gy-4 gx-4">
            <div className="card mb-3 card-back-color h-100">
                <h3 className="card-header bg-transparent border-0"><i className="fas fa-2x fa-user-tie rounded-circle text-warning pt-3"></i></h3>
                <h5 className="text-warning">{name} says</h5>
                <div className="card-body text-white">
                    <h5 className="card-title"><i className="fas fa-2x fa-quote-left"></i> {review.slice(0, 200)}... <i className="fas fa-2x fa-quote-right"></i></h5>
                </div>
                <div className="card-footer bg-transparent border-0">
                    <Rating 
                        initialRating={rating}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        className="text-warning"
                        readonly>
                    </Rating>
                </div>
            </div>
        </div>
    );
};

export default UserReview;