import React from 'react';

const AddServices = () => {
    return (
        <div>
            <h2 className='text-4xl text-red-400 font-bold mt-4'>Add Your Services</h2>
            <form>
                <div className='grid grid-cols-1 lg:grid-cols-1 mt-8 mb-8 gap-4 '>
                    <h2 className='text-start text-xl font-bold'><span className='text-orange-500'>Photo</span> URL</h2>
                    <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered input-secondary w-full" />
                    <h2 className='text-start text-xl font-bold'>Subject <span className='text-orange-500'>Name</span></h2>
                    <input type="text" name='subjectName' placeholder="Subject Name" className="input input-bordered input-primary w-full " />
                    <h2 className='text-start text-xl font-bold'><span className='text-orange-500'>Total</span> Price</h2>
                    <input type="text" name='totalPrice' placeholder="Total Price" className="input input-bordered input-accent w-full " />
                    <h2 className='text-start text-xl font-bold'>All <span className='text-orange-500'>Details</span> </h2>
                    <input type="text" name='allDetails' placeholder="All Details" className="input input-bordered input-success w-full " />
                </div>
                <div>
                    <button className="btn btn-wide mb-8">Service Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddServices;