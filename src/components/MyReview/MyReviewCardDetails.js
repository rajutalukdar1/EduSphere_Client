import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const MyReviewCardDetails = ({ rev }) => {
    const { user } = useContext(AuthContext);
    const { serviceName, rating, message, email } = rev;
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 mb-5 shadow-md card bg-base-100 mx-auto my-8'>
            <div className="card card-side bg-base-100 shadow-xl">
                <div className='flex justify-between'>
                    <img className='rounded-full' style={{ height: '55px', width: '55px' }} src={user?.photoURL} alt="" />
                    <h3 className='text-xl font-semibold'>{serviceName}</h3>
                </div>
                <div className="card-body">
                    <h2 className='text-xl font-semibold'>Ratting:{rating} </h2>
                    <h2 className='mt-4 text-xl font-semibold'>Email:{email}</h2>
                    <p className='text-xl font-semibold'>comment: {message}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Delete</button>
                        <button className="btn btn-primary">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCardDetails;