import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/UserContext';
import UseTitle from '../UseTitle/UseTitle';

const MyReview = () => {
    // useEffect(()=>{
    //     fetch()
    // },[])
    const { user } = useContext(AuthContext);
    UseTitle('Review');
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 mb-5 shadow-md card bg-base-100 mx-auto my-8'>
            <div className="card card-side bg-base-100 shadow-xl">
                <div className='flex justify-between'>
                    <img className='rounded-full' style={{ height: '55px', width: '55px' }} src={user?.photoURL} alt="" />
                    <h3 className='text-xl font-semibold'>{user?.displayName}</h3>
                </div>
                <div className="card-body">
                    <h2 className='text-xl font-semibold'>Ratting: </h2>
                    <h2 className='mt-4 text-xl font-semibold'>Email:{user.email}</h2>
                    <p className='text-xl font-semibold'>comment: </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Delete</button>
                        <button className="btn btn-primary">Edit</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyReview;