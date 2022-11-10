import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UserContext';
import UseTitle from '../UseTitle/UseTitle';
import MyReviewCardDetails from './MyReviewCardDetails';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://assignment-no-11-server.vercel.app/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email]);

    UseTitle('Review');
    return (
        <div>
            {
                reviews.map(rev => <MyReviewCardDetails
                    key={rev._id}
                    rev={rev}
                ></MyReviewCardDetails>)
            }
        </div>

    );
};

export default MyReview;