import React from 'react';

const AboutSuccess = () => {
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5 shadow-md'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Upcoming Crouch:<br />
                            Chemistry</h2>
                        <p className='text-xl'>Price :175$</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">PreOder Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Upcoming Crouch :<br />
                            Biology</h2>
                        <p className='text-xl'>Price : 150$</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">PreOder Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Upcoming Crouch:<br />
                            Higher Math</h2>
                        <p className='text-xl'>Price :200$</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">PreOder Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSuccess;