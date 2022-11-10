import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const ReviewCard = ({ view }) => {
    const { user } = useContext(AuthContext);
    console.log(view)
    const { serviceName, rating, message, _id, email } = view;
    console.log(serviceName, rating, message, _id)
    return (
        <div>
            <div className="card bg-base-100 mx-auto w-full my-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 shadow-xl">
                <div className="card-body">
                    <div>
                        <div className='flex justify-between'>
                            <img className='rounded-full' style={{ height: '55px', width: '55px' }} src={user?.photoURL} alt="" />
                            <h3 className='text-xl font-semibold'>{user?.displayName}</h3>
                        </div>
                        <h2 className='text-xl font-semibold'> </h2>
                        <h2 className='mt-4'>Email: {email}</h2>
                        <h2>Rating: {rating}</h2>
                    </div>
                    <p>Comment: {message}</p>
                </div>
            </div>
        </div>

    );
};

export default ReviewCard;